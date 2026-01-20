'use client'

import { useEffect, useRef, useState } from 'react'

export default function Projects() {
    const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set())
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'))
                        if (!isNaN(index)) {
                            setVisibleProjects(prev => new Set(prev).add(index))
                        }
                    }
                })
            },
            { threshold: 0.1 }
        )

        const projectElements = document.querySelectorAll('.project-card')
        projectElements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const projects = [
        {
            title: 'ET App (Economic Times App)',
            tech: 'React Native, Firebase, REST API',
            description: 'Developed features to provide real-time business and stock market news updates. Integrated widgets, push notifications, and offline reading capabilities. Enhanced UX/UI for better user engagement and financial portfolio management.',
            highlights: ['Real-time updates', 'Push notifications', 'Offline reading', 'Financial portfolio'],
            gradient: 'from-purple-500 to-blue-500'
        },
        {
            title: 'Pathconnect Phlebo',
            tech: 'React Native, Firebase, REST API',
            description: 'Designed and developed an app for phlebotomists to manage and accept assigned orders. Implemented barcode scanning, photo verification, and test order verification.',
            highlights: ['Order management', 'Barcode scanning', 'Photo verification'],
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Innovation Champions\' Club',
            tech: 'React Native, Firebase, REST API',
            description: 'Created a lite version of the app to provide virtual workshops for children. Developed modules for interactive challenges, brainstorming, and innovation tracking. Integrated multimedia content for creative learning and expression.',
            highlights: ['Virtual workshops', 'Interactive challenges', 'Multimedia content'],
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Nayomi (E-Commerce App)',
            tech: 'React Native, Firebase, REST API',
            description: 'Developed an e-commerce app for nightwear, lingerie, and loungewear. Implemented seamless shopping experiences and multiple payment options.',
            highlights: ['E-commerce', 'Payment integration', 'Product catalog'],
            gradient: 'from-pink-500 to-rose-500'
        },
        {
            title: 'Mihyar (Shopping App)',
            tech: 'React Native, Firebase, REST API',
            description: 'Created a fashion e-commerce app with advanced search and filtering options. Integrated push notifications for exclusive offers and new arrivals.',
            highlights: ['Advanced search', 'Push notifications', 'Fashion catalog'],
            gradient: 'from-amber-500 to-orange-500'
        },
        {
            title: 'The Body Shop UAE & Jeddah',
            tech: 'React Native, Firebase, REST API',
            description: 'Developed an app for beauty and skincare products with an intuitive UI. Enabled easy navigation, product discovery, and seamless checkout.',
            highlights: ['Beauty products', 'Intuitive UI', 'Seamless checkout'],
            gradient: 'from-teal-500 to-green-500'
        },
        {
            title: 'LEGO Saudi Arabia',
            tech: 'React Native, Firebase, REST API',
            description: 'Designed an engaging shopping experience for LEGO® products. Implemented product showcases, interactive games, and video content.',
            highlights: ['Product showcases', 'Interactive games', 'Video content'],
            gradient: 'from-yellow-400 to-orange-500'
        },
    ]

    return (
        <section id="projects" className="section-padding relative">
            <div className="absolute inset-0 bg-dark-900/50" />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4 animate-glow">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto rounded-full animate-shimmer"
                        style={{ backgroundSize: '200% 100%' }} />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`project-card glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-700 group relative overflow-hidden ${visibleProjects.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                                }`}
                            style={{
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur" />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-display font-bold text-dark-50 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all duration-300">
                                        {project.title}
                                    </h3>
                                    <svg
                                        className="w-6 h-6 text-dark-400 group-hover:text-white flex-shrink-0 group-hover:scale-110 group-hover:rotate-45 transition-all duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </div>

                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-white/5 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                                        {project.tech}
                                    </span>
                                </div>

                                <p className="text-dark-300 mb-6 leading-relaxed group-hover:text-dark-200 transition-colors">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.highlights.map((highlight, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-dark-800/50 text-dark-400 text-xs rounded-full border border-white/5 group-hover:border-white/10 group-hover:text-dark-300 transition-colors"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
