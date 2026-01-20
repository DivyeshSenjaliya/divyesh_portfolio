'use client'

import { useEffect, useRef, useState } from 'react'

export default function Skills() {
    const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set())
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observers = sectionRefs.current.map((ref, index) => {
            if (!ref) return null

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set(prev).add(index))
                    }
                },
                { threshold: 0.2 }
            )

            observer.observe(ref)
            return observer
        })

        return () => {
            observers.forEach(observer => observer?.disconnect())
        }
    }, [])

    const skillCategories = [
        {
            title: 'Mobile Development',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            skills: [
                { name: 'React Native', level: 90 },
                { name: 'JavaScript / TypeScript', level: 85 },
                { name: 'REST API Integration', level: 88 },
            ],
        },
        {
            title: 'Backend & Database',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            skills: [
                { name: 'Firebase & Realtime Database', level: 80 },
                { name: 'SQL & SQLite', level: 75 },
                { name: 'Payment Gateway Integration', level: 82 },
            ],
        },
        {
            title: 'Leadership & Design',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            skills: [
                { name: 'Team Leadership', level: 85 },
                { name: 'Responsive UI Design', level: 88 },
                { name: 'Animation & Gesture Handling', level: 80 },
            ],
        },
    ]

    const languages = [
        {
            name: 'English',
            level: 'Professional Proficiency',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.204 8.845a6 6 0 11-5.908-5.907M9 12v-1m5.121 5.122a6 6 0 10-6.427-5.903" />
                </svg>
            )
        },
        {
            name: 'Hindi',
            level: 'Full Professional Proficiency',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
            )
        },
        {
            name: 'Gujarati',
            level: 'Native/Bilingual',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            )
        },
    ]

    const interests = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            name: 'Programming',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            name: 'Continuous Learning',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            name: 'Problem-Solving',
            gradient: 'from-orange-500 to-red-500'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            name: 'Traveling',
            gradient: 'from-green-500 to-teal-500'
        },
    ]

    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4 animate-glow">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto rounded-full animate-shimmer"
                        style={{ backgroundSize: '200% 100%' }} />
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            ref={el => { sectionRefs.current[categoryIndex] = el }}
                            className={`glass-effect p-8 rounded-2xl transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group ${visibleSections.has(categoryIndex) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                                    {category.icon}
                                </span>
                                <h3 className="text-xl font-display font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-dark-200 font-medium">{skill.name}</span>
                                            <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-dark-700 rounded-full overflow-hidden relative">
                                            <div
                                                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                                                style={{
                                                    width: visibleSections.has(categoryIndex) ? `${skill.level}%` : '0%',
                                                    transitionDelay: `${skillIndex * 100}ms`
                                                }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
                                                    style={{ backgroundSize: '200% 100%' }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Languages & Interests */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Languages */}
                    <div
                        ref={el => { sectionRefs.current[3] = el }}
                        className={`glass-effect p-8 rounded-2xl transition-all duration-700 ${visibleSections.has(3) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}
                    >
                        <h3 className="text-2xl font-display font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                            Languages
                        </h3>
                        <div className="space-y-4">
                            {languages.map((language, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl group-hover:scale-125 transition-transform">{language.icon}</span>
                                        <span className="text-dark-200 font-medium">{language.name}</span>
                                    </div>
                                    <span className="text-purple-400 text-sm">{language.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Interests */}
                    <div
                        ref={el => { sectionRefs.current[4] = el }}
                        className={`glass-effect p-8 rounded-2xl transition-all duration-700 ${visibleSections.has(4) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}
                    >
                        <h3 className="text-2xl font-display font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                            Interests
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {interests.map((interest, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col items-center justify-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group overflow-hidden"
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                    <span className="text-4xl mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10">
                                        {interest.icon}
                                    </span>
                                    <span className="text-dark-200 text-sm font-medium text-center relative z-10">
                                        {interest.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
