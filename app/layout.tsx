import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Divyesh Senjaliya - React Native Developer',
    description: 'Portfolio of Divyesh Senjaliya, a passionate React Native Developer specializing in cross-platform mobile development with expertise in React Native, Firebase, REST API, and modern mobile technologies.',
    keywords: ['React Native Developer', 'Mobile App Development', 'Firebase', 'REST API', 'JavaScript', 'TypeScript', 'Portfolio'],
    authors: [{ name: 'Divyesh Senjaliya' }],
    openGraph: {
        title: 'Divyesh Senjaliya - React Native Developer',
        description: 'Passionate React Native Developer creating innovative mobile applications',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
