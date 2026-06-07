'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Smartphone } from 'lucide-react'
import { getCollectionData } from '@/lib/firestoreUtils'

export default function Projects() {
    const [projects, setProjects] = useState<any[]>([])

    useEffect(() => {
        const fetchProjects = async () => {
            const remoteProjects = await getCollectionData('projects')
            if (remoteProjects && remoteProjects.length > 0) {
                setProjects(remoteProjects as any)
            }
        }
        fetchProjects()
    }, [])

    return (
        <section id="projects" className="section-padding min-h-screen bg-background relative overflow-hidden pt-32">

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 tracking-tight">
                        Featured <span className="text-primary-500">Work</span>
                    </h2>
                    <p className="text-xl text-mutedForeground max-w-2xl font-light">
                        A curated collection of mobile applications engineered with a focus on fluid performance and exceptional user experience.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-16">
                    {projects.map((project: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                            <div className="relative glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row border border-white/5">
                                
                                {/* Image / Icon Area */}
                                <div className="lg:w-2/5 p-8 md:p-12 bg-muted/30 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-50" />
                                    <motion.div 
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-background border border-white/10 flex items-center justify-center shadow-2xl relative z-10 overflow-hidden"
                                    >
                                        {project.image && (
                                            /* eslint-disable-next-line @next/next/no-img-element */
                                            <img 
                                                src={project.image} 
                                                alt={project.title} 
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    if (e.currentTarget.nextElementSibling) {
                                                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                                                    }
                                                }}
                                            />
                                        )}
                                        <span 
                                            className="font-display font-bold text-primary-500"
                                            style={{ 
                                                display: project.image ? 'none' : 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '100%',
                                                height: '100%',
                                                fontSize: '3.75rem'
                                            }}
                                        >
                                            {project.icon || <Smartphone className="w-16 h-16 text-primary-500" />}
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Content Area */}
                                <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-3xl font-display font-bold text-foreground group-hover:text-primary-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-primary-500 font-medium mt-2">{project.subtitle}</p>
                                        </div>
                                        <div className="flex gap-3">
                                            {project.links?.ios && (
                                                <a href={project.links.ios} target="_blank" rel="noopener noreferrer" className="p-3 bg-muted text-foreground rounded-full hover:bg-primary-500 hover:text-background transition-colors">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                            {project.links?.android && (
                                                <a href={project.links.android} target="_blank" rel="noopener noreferrer" className="p-3 bg-muted text-foreground rounded-full hover:bg-primary-500 hover:text-background transition-colors">
                                                    <Smartphone className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-mutedForeground text-lg leading-relaxed mb-8">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech && project.tech.map((t: string, i: number) => (
                                            <span
                                                key={i}
                                                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-300 border border-primary-500/20"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
