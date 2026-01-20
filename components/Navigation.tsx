'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
    const pathname = usePathname()
    const [hoveredPath, setHoveredPath] = useState(pathname)

    const navItems = [
        {
            name: 'About',
            path: '/about',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            name: 'Work',
            path: '/projects',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            name: 'Contact',
            path: '/contact',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ]

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-slide-down w-[95%] max-w-fit">
            <div className="flex items-center gap-1 p-1.5 rounded-full bg-dark-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-teal-500/10 ring-1 ring-white/5">

                {/* Home Button */}
                <Link
                    href="/"
                    className={`relative p-2.5 rounded-full transition-all duration-300 group
                        ${pathname === '/'
                            ? 'bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-lg shadow-teal-500/25'
                            : 'hover:bg-white/5 text-dark-300 hover:text-white'
                        }`}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {pathname === '/' && (
                        <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-md -z-10" />
                    )}
                </Link>

                {/* Divider */}
                <div className="w-px h-6 bg-white/10 mx-1" />

                {/* Nav Links */}
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar mask-gradient px-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                onMouseEnter={() => setHoveredPath(item.path)}
                                onMouseLeave={() => setHoveredPath(pathname)}
                                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                                    ${isActive
                                        ? 'text-white'
                                        : 'text-dark-400 hover:text-white'
                                    }`}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-white/10 rounded-full -z-10 animate-fade-in" />
                                )}
                                <span className={`transition-transform duration-300 ${isActive ? 'scale-110 text-teal-400' : ''}`}>
                                    {item.icon}
                                </span>
                                <span className="hidden sm:inline">{item.name}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
