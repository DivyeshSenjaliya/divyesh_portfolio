'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, Mail } from 'lucide-react'

export default function Navigation() {
    const pathname = usePathname()

    const navItems = [
        { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
        { name: 'About', path: '/about', icon: <User className="w-4 h-4" /> },
        { name: 'Work', path: '/projects', icon: <Briefcase className="w-4 h-4" /> },
        { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> }
    ]

    return (
        <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:w-[95%] sm:px-0 max-w-fit"
        >
            <div className="flex items-center p-1.5 rounded-full glass-card bg-background/60 w-full justify-center">
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar px-2 sm:px-4">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                                    ${isActive
                                        ? 'text-primary-foreground'
                                        : 'text-mutedForeground hover:text-foreground'
                                    }`}
                            >
                                {isActive && (
                                    <motion.div 
                                        layoutId="nav-active"
                                        className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                                    {item.icon}
                                </span>
                                <span className="hidden sm:inline">{item.name}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}
