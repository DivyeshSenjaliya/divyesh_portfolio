'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
    const [mounted, setMounted] = useState(false)
    const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: number; size: number }>>([])

    useEffect(() => {
        setMounted(true)

        // Generate particles
        const particleArray = Array.from({ length: 40 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: Math.random() * 20,
            size: Math.random() * 4 + 2,
        }))
        setParticles(particleArray)
    }, [])

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
        >
            {/* Animated Particle & Glow Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle opacity-30"
                        style={{
                            left: particle.left,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            animationDelay: `${particle.delay}s`,
                            background: 'rgba(20, 184, 166, 0.5)' // Teal glow
                        }}
                    />
                ))}

                {/* Reference-style deep glows */}
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark-900/50 to-dark-900" />
            </div>

            {/* Content */}
            <div className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                <div className="mb-8 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-900/30 border border-teal-500/20 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        <span className="text-sm font-medium text-teal-200 tracking-wide uppercase">Available for work</span>
                    </div>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 tracking-tight leading-[0.9]">
                    <span className="block text-white mb-2">DIVYESH</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-400 to-teal-600 animate-glow">
                        SENJALIYA
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-dark-400 max-w-2xl mx-auto mb-4 font-light tracking-wide">
                    React Native Developer
                    <span className="mx-3 text-teal-800">•</span>
                    Surat, Gujarat
                </p>

                <p className="text-lg md:text-xl text-dark-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                    Crafting high-performance cross-platform mobile experiences with a focus on
                    <span className="text-teal-400 font-normal"> fluid animations</span> and
                    <span className="text-teal-400 font-normal"> intuitive design</span>.
                </p>

                {/* Minimalist CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="/contact"
                        className="group relative px-8 py-4 bg-white text-dark-900 font-bold rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-xl shadow-teal-900/20 w-full sm:w-auto"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Get In Touch
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </span>
                    </a>

                    <a
                        href="/projects"
                        className="group px-8 py-4 rounded-full border border-dark-700 bg-dark-800/50 backdrop-blur-sm text-white font-medium hover:bg-dark-800 hover:border-teal-500/50 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                        View Work
                        <svg className="w-5 h-5 text-dark-400 group-hover:text-teal-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    </a>
                </div>

            </div>
        </section>
    )
}
