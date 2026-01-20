'use client'

import { useEffect, useState } from 'react'

export default function Experience() {
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'))
                        if (!isNaN(index)) {
                            setVisibleItems(prev => new Set(prev).add(index))
                        }
                    }
                })
            },
            { threshold: 0.2 }
        )

        const items = document.querySelectorAll('.experience-item')
        items.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    const experiences = [
        {
            title: 'React Native Developer',
            company: 'Madwise Infotech',
            period: 'November 2023 - Present',
            location: 'Surat',
            description: [
                'Developing and maintaining cross-platform mobile applications',
                'Implementing RESTful APIs and integrating third-party services',
                'Optimizing app performance and debugging issues',
            ],
            current: true,
        },
        {
            title: 'React Native Trainee',
            company: 'Madwise Infotech',
            period: 'May 2023 - November 2023',
            location: 'Surat',
            description: [
                'Assisted in developing mobile applications using React Native',
                'Learned best practices for state management and API integration',
                'Collaborated with senior developers to improve app functionality',
            ],
            current: false,
        },
    ]

    return (
        <section id="experience" className="section-padding bg-dark-800/50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4 animate-glow">
                        Professional Experience
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto rounded-full animate-shimmer"
                        style={{ backgroundSize: '200% 100%' }} />
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-blue-500/50" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                data-index={index}
                                className={`experience-item relative flex items-center transition-all duration-1000 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } ${visibleItems.has(index)
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-20'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full border-4 border-dark-900 z-10 transition-all duration-500 ${visibleItems.has(index) ? 'bg-purple-400 scale-125 shadow-[0_0_20px_rgba(168,85,247,0.5)]' : 'bg-dark-600'
                                    }`} />

                                {/* Content */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="ml-16 md:ml-0 glass-effect p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group hover:translate-x-1">
                                        {exp.current && (
                                            <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full mb-4 animate-pulse">
                                                Current Position
                                            </span>
                                        )}
                                        <h3 className="text-2xl font-display font-bold text-dark-50 mb-2 group-hover:text-purple-400 transition-colors">
                                            {exp.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2 text-purple-300/80 mb-4">
                                            <span className="font-semibold text-white">{exp.company}</span>
                                            <span className="text-dark-500">•</span>
                                            <span className="text-dark-300">{exp.location}</span>
                                        </div>
                                        <p className="text-sm text-dark-400 mb-4 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {exp.period}
                                        </p>
                                        <ul className="space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-dark-300 group-hover:text-dark-200 transition-colors">
                                                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
