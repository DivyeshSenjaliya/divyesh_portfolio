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
            icon: '📱',
            skills: [
                { name: 'React Native', level: 90 },
                { name: 'JavaScript / TypeScript', level: 85 },
                { name: 'REST API Integration', level: 88 },
            ],
        },
        {
            title: 'Backend & Database',
            icon: '🗄️',
            skills: [
                { name: 'Firebase & Realtime Database', level: 80 },
                { name: 'SQL & SQLite', level: 75 },
                { name: 'Payment Gateway Integration', level: 82 },
            ],
        },
        {
            title: 'Leadership & Design',
            icon: '🎨',
            skills: [
                { name: 'Team Leadership', level: 85 },
                { name: 'Responsive UI Design', level: 88 },
                { name: 'Animation & Gesture Handling', level: 80 },
            ],
        },
    ]

    const languages = [
        { name: 'English', level: 'Professional Proficiency', icon: '🇬🇧' },
        { name: 'Hindi', level: 'Full Professional Proficiency', icon: '🇮🇳' },
        { name: 'Gujarati', level: 'Native/Bilingual', icon: '🗣️' },
    ]

    const interests = [
        { icon: '💻', name: 'Programming', gradient: 'from-blue-500 to-cyan-500' },
        { icon: '📚', name: 'Continuous Learning', gradient: 'from-purple-500 to-pink-500' },
        { icon: '🧩', name: 'Problem-Solving', gradient: 'from-orange-500 to-red-500' },
        { icon: '✈️', name: 'Traveling', gradient: 'from-green-500 to-teal-500' },
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
