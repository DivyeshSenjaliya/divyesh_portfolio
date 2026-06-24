import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Divyesh Senjaliya | React Native Developer',
    description: 'Portfolio of Divyesh Senjaliya, a React Native Developer building production-ready Android and iOS apps with TypeScript, Firebase, REST APIs, and scalable mobile architecture.',
    keywords: ['React Native Developer', 'Mobile App Development', 'Firebase', 'REST API', 'JavaScript', 'TypeScript', 'Portfolio'],
    authors: [{ name: 'Divyesh Senjaliya' }],
    openGraph: {
        title: 'Divyesh Senjaliya | React Native Developer',
        description: 'Production-ready React Native apps for Android and iOS.',
        type: 'website',
    },
}

import Navigation from '@/components/Navigation'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    )
}
