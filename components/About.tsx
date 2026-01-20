'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const competencies = [
        'Debugging & Performance Optimization',
        'API Integration & Data Fetching',
        'Mobile App Development & Deployment',
        'Mobile App Architecture & Microservices',
        'Third-Party API & SDK Integration',
        'UX/UI Enhancement & Responsiveness',
    ]

    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="max-w-6xl mx-auto relative z-10" ref={sectionRef}>
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4 animate-glow">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto rounded-full animate-shimmer"
                        style={{ backgroundSize: '200% 100%' }} />
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Description */}
                    <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="glass-effect p-8 rounded-2xl group hover:border-purple-500/30 transition-colors duration-300">
                            <h3 className="text-2xl font-display font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                                Professional Summary
                            </h3>
                            <p className="text-dark-300 leading-relaxed group-hover:text-dark-200 transition-colors">
                                As a passionate React Native Developer, I am seeking an opportunity to work with a growth-oriented
                                organization where I can leverage my skills in cross-platform mobile development to build high-quality,
                                user-centric applications.
                            </p>
                        </div>

                        <div className="glass-effect p-8 rounded-2xl group hover:border-blue-500/30 transition-colors duration-300">
                            <h3 className="text-2xl font-display font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                                What I Do
                            </h3>
                            <p className="text-dark-300 leading-relaxed group-hover:text-dark-200 transition-colors">
                                I specialize in developing and maintaining cross-platform mobile applications using React Native.
                                With expertise in implementing RESTful APIs and integrating third-party services, I am eager to
                                contribute to innovative projects that enhance user experiences and drive business success.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Core Competencies */}
                    <div className={`glass-effect p-8 rounded-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <h3 className="text-2xl font-display font-semibold text-gradient mb-6">
                            Core Competencies
                        </h3>
                        <div className="grid gap-4">
                            {competencies.map((competency, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 hover:translate-x-2 transition-all duration-300 group border border-transparent hover:border-purple-500/30"
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <svg
                                        className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="text-dark-200 font-medium group-hover:text-white transition-colors">{competency}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
