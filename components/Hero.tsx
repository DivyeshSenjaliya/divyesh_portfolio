'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
    const [mounted, setMounted] = useState(false)
    const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: number; size: number }>>([])

    useEffect(() => {
        setMounted(true)

        // Generate particles
        const particleArray = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: Math.random() * 20,
            size: Math.random() * 4 + 2,
        }))
        setParticles(particleArray)
    }, [])

    const scrollToContact = () => {
        const element = document.getElementById('contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated Particle Background */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            left: particle.left,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            animationDelay: `${particle.delay}s`,
                        }}
                    />
                ))}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
            </div>

            {/* Content */}
            <div className={`relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="mb-6">
                    <span className="inline-block px-6 py-2 glass-effect rounded-full text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-6 animate-pulse-glow">
                        ✨ Welcome to my portfolio
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
                    <span className="block text-dark-50 mb-2 hover:scale-105 transition-transform duration-300">DIVYESH SENJALIYA</span>
                    <span className="block text-gradient animate-glow">React Native Developer</span>
                </h1>

                <p className="text-lg md:text-xl text-dark-300 max-w-3xl mx-auto mb-4 font-medium">
                    📍 Surat, Gujarat
                </p>

                <p className="text-base md:text-lg text-dark-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    As a passionate React Native Developer, I am seeking an opportunity to work with a growth-oriented
                    organization where I can leverage my skills in cross-platform mobile development to build high-quality,
                    user-centric applications.
                </p>

                {/* Contact Info */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm md:text-base text-dark-300">
                    <a
                        href="tel:+919574520727"
                        className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover:text-purple-400 hover:scale-110 transition-all duration-300 group"
                    >
                        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +91 9574520727
                    </a>
                    <a
                        href="mailto:divyeshsenjaliya@gmail.com"
                        className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover:text-purple-400 hover:scale-110 transition-all duration-300 group"
                    >
                        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        divyeshsenjaliya@gmail.com
                    </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                        onClick={scrollToContact}
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                    >
                        <span className="relative z-10">Get In Touch</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                    <a
                        href="#projects"
                        className="px-8 py-4 glass-effect text-dark-50 font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 neon-border"
                    >
                        View Projects
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    )
}
