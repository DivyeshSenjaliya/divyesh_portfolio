'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/projects' },
    { name: 'About', path: '/about' },
]

export default function Navigation() {
    const pathname = usePathname()

    return (
        <header className="fixed inset-x-0 top-4 z-50 px-4">
            <nav className="mx-auto flex w-full max-w-xl items-center justify-between border-2 border-ink bg-cream shadow-sketch">
                <Link href="/" className="flex items-center gap-2 border-r-2 border-ink px-4 py-3 text-sm font-black">
                    <Sparkles className="h-4 w-4 fill-[#FFD447] text-ink" />
                    <span>DIVYESH</span>
                </Link>

                <div className="flex flex-1 items-center justify-center">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`border-r-2 border-ink px-3 py-3 text-xs font-black transition hover:bg-white sm:px-4 ${
                                    isActive ? 'bg-[#BAE6FD]' : 'bg-cream'
                                }`}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </div>

                <Link
                    href="/contact"
                    className="flex items-center gap-1 px-4 py-3 text-xs font-black transition hover:bg-white sm:text-sm"
                >
                    Hire me
                    <ArrowUpRight className="h-4 w-4" />
                </Link>
            </nav>
        </header>
    )
}
