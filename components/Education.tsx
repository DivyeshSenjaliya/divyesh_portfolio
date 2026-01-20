'use client'

import { useEffect, useState } from 'react'

export default function Education() {
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

        const items = document.querySelectorAll('.education-item')
        items.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    const education = [
        {
            degree: 'Bachelor of Computer Applications',
            institution: 'Veer Narmad South Gujarat University, Surat',
            period: '06/2022 - Present',
            status: 'In Progress',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            ),
            gradient: 'from-purple-500 to-indigo-500',
        },
        {
            degree: 'Higher Secondary Education (HSC)',
            institution: 'GSEB, Surat',
            period: '06/2021 - 06/2022',
            status: 'Completed',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            gradient: 'from-blue-500 to-cyan-500',
        },
    ]

    return (
        <section id="education" className="section-padding relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4 animate-glow">
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto rounded-full animate-shimmer"
                        style={{ backgroundSize: '200% 100%' }} />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`education-item glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 group hover:-translate-y-2 border border-transparent hover:border-purple-500/30 ${visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${edu.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center text-3xl">
                                        {edu.icon}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-xl font-display font-bold text-dark-50 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                                            {edu.degree}
                                        </h3>
                                        <span
                                            className={`px-3 py-1 text-xs font-semibold rounded-full border ${edu.status === 'In Progress'
                                                ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                                : 'bg-green-500/10 text-green-400 border-green-500/20'
                                                }`}
                                        >
                                            {edu.status}
                                        </span>
                                    </div>
                                    <p className="text-dark-300 font-medium mb-2 group-hover:text-white transition-colors">{edu.institution}</p>
                                    <p className="text-dark-400 text-sm flex items-center gap-2">
                                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        {edu.period}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
