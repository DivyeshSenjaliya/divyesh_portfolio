import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_HOSTS = new Set(['play.google.com', 'apps.apple.com'])

function decodeHtml(value: string) {
    return value
        .replace(/&amp;/g, '&')
        .replace(/&#x2F;/g, '/')
        .replace(/&#47;/g, '/')
        .replace(/&quot;/g, '"')
}

function extractImageUrl(html: string) {
    const patterns = [
        /<meta\s+(?:property|name)=["']og:image["']\s+content=["']([^"']+)["']/i,
        /<meta\s+content=["']([^"']+)["']\s+(?:property|name)=["']og:image["']/i,
        /<meta\s+(?:property|name)=["']twitter:image["']\s+content=["']([^"']+)["']/i,
        /<meta\s+content=["']([^"']+)["']\s+(?:property|name)=["']twitter:image["']/i,
        /<link\s+rel=["']apple-touch-icon["'][^>]*href=["']([^"']+)["']/i,
    ]

    for (const pattern of patterns) {
        const match = html.match(pattern)
        if (match?.[1]) {
            return decodeHtml(match[1])
        }
    }

    return null
}

export async function GET(request: NextRequest) {
    const storeUrl = request.nextUrl.searchParams.get('url')

    if (!storeUrl) {
        return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 })
    }

    let parsedUrl: URL

    try {
        parsedUrl = new URL(storeUrl)
    } catch {
        return NextResponse.json({ error: 'Invalid url parameter' }, { status: 400 })
    }

    if (parsedUrl.protocol !== 'https:' || !ALLOWED_HOSTS.has(parsedUrl.hostname)) {
        return NextResponse.json({ error: 'Unsupported store url' }, { status: 400 })
    }

    try {
        const response = await fetch(parsedUrl.toString(), {
            headers: {
                Accept: 'text/html,application/xhtml+xml',
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36',
            },
            next: { revalidate: 60 * 60 * 24 },
        })

        if (!response.ok) {
            return NextResponse.json({ error: 'Store page unavailable' }, { status: 502 })
        }

        const html = await response.text()
        const imageUrl = extractImageUrl(html)

        if (!imageUrl) {
            return NextResponse.json({ error: 'Icon not found' }, { status: 404 })
        }

        const resolvedImageUrl = imageUrl.startsWith('//')
            ? `https:${imageUrl}`
            : new URL(imageUrl, parsedUrl.origin).toString()

        const redirectResponse = NextResponse.redirect(resolvedImageUrl, 307)
        redirectResponse.headers.set('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800')

        return redirectResponse
    } catch {
        return NextResponse.json({ error: 'Unable to fetch app icon' }, { status: 500 })
    }
}
