'use client'

import { useEffect, useRef, useState } from 'react'
import { projects as localProjects } from '@/lib/data'
import { getCollectionData } from '@/lib/firestoreUtils'

export default function Projects() {
    const [projects, setProjects] = useState(localProjects)
    const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set())
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const fetchProjects = async () => {
            const remoteProjects = await getCollectionData('projects')
            if (remoteProjects.length > 0) {
                // Determine order? Firestore doesn't guarantee order unless orderBy is used.
                // For now use as is. Ideally we add an 'order' field.
                setProjects(remoteProjects as any)
            }
        }
        fetchProjects()
    }, [])

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
    }, [projects])

    return (
        <section id="projects" className="section-padding relative min-h-screen">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

            <div className="max-w-7xl mx-auto relative z-10" ref={sectionRef}>
                <div className="mb-24">
                    <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-6">
                        Featured<br /><span className="text-teal-500">Work.</span>
                    </h2>
                    <p className="text-xl text-dark-400 max-w-2xl">
                        A collection of mobile applications I've engineered, focusing on performance, user experience, and scalability.
                    </p>
                </div>

                <div className="flex flex-col gap-24">
                    {projects.map((project: any, index: number) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`project-card group transition-all duration-1000 ${visibleProjects.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Project Visual Container - Large Bento Style */}
                            <div className="relative aspect-video md:aspect-[2.4/1] w-full bg-dark-800 rounded-3xl overflow-hidden border border-white/5 group-hover:border-teal-500/30 transition-all duration-500">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient || 'from-gray-700 to-gray-900'} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />

                                {/* Placeholder Content / Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl group-hover:scale-110 transition-transform duration-500">
                                        <h3 className="text-6xl font-display font-bold text-white/20 select-none">{project.icon}</h3>
                                    </div>
                                </div>

                                {/* Floating Links */}
                                <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {project.links?.ios && (
                                        <a href={project.links.ios} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-900/80 backdrop-blur text-white rounded-full hover:bg-white hover:text-dark-900 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.93.95 0 2.58.5 3.69 1.93-2.92 1.45-2.44 5.95.88 7.32-.47 1.48-1.58 3.19-3.34 3.91zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                                        </a>
                                    )}
                                    {project.links?.android && (
                                        <a href={project.links.android} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-900/80 backdrop-blur text-white rounded-full hover:bg-white hover:text-dark-900 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.26 0 .5.07.72.2l13.56 7.84c.88.51.88 1.8 0 2.31L5.22 20.18c-.22.13-.46.2-.72.2-.83 0-1.5-.67-1.5-1.5z" /></svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="grid md:grid-cols-12 gap-6 mt-8">
                                {/* Title Column */}
                                <div className="md:col-span-4">
                                    <h3 className="text-3xl font-display font-bold text-white group-hover:text-teal-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-dark-400 font-medium mt-1">{project.subtitle}</p>
                                </div>

                                {/* Description Column */}
                                <div className="md:col-span-8">
                                    <p className="text-dark-300 text-lg leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech && project.tech.map((t: string, i: number) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/5 text-dark-300"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
