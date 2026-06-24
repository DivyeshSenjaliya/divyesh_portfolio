'use client'

import { useMemo, useState } from 'react'
import { Smartphone } from 'lucide-react'

interface ProjectIconProps {
    title: string
    icon?: string
    image?: string
    links?: {
        ios?: string
        android?: string
    }
    imageClassName?: string
    fallbackClassName?: string
}

function getStoreIconUrl(url?: string) {
    if (!url) return null

    return `/api/app-icon?url=${encodeURIComponent(url)}`
}

function getInitials(title: string, icon?: string) {
    if (icon) return icon

    return title
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase())
        .join('')
}

export default function ProjectIcon({
    title,
    icon,
    image,
    links,
    imageClassName = 'h-full w-full object-cover',
    fallbackClassName = 'flex h-full w-full items-center justify-center text-4xl font-black text-ink',
}: ProjectIconProps) {
    const sources = useMemo(
        () =>
            [
                image,
                getStoreIconUrl(links?.android),
                getStoreIconUrl(links?.ios),
            ].filter((source): source is string => Boolean(source)),
        [image, links?.android, links?.ios]
    )
    const [sourceIndex, setSourceIndex] = useState(0)
    const currentSource = sources[sourceIndex]
    const initials = getInitials(title, icon)

    if (currentSource) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={currentSource}
                alt={`${title} app icon`}
                className={imageClassName}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => {
                    setSourceIndex((currentIndex) => currentIndex + 1)
                }}
            />
        )
    }

    return (
        <span className={fallbackClassName}>
            {initials || <Smartphone className="h-12 w-12" />}
        </span>
    )
}
