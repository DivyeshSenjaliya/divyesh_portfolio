'use client'

import { motion } from 'framer-motion'
import { personalInfo, experiences, education, skills } from '@/lib/data'

export default function About() {

    return (
        <section className="section-padding min-h-screen bg-background relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10 space-y-32">
                
                {/* Intro Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6 text-center md:text-left items-center md:items-start"
                >
                    
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground tracking-tight">
                            {personalInfo.name.split(' ')[0]} <span className="text-primary-500">{personalInfo.name.split(' ')[1]}</span>
                        </h1>
                        <p className="text-2xl text-mutedForeground font-light">{personalInfo.role}</p>
                        <p className="text-lg text-mutedForeground leading-relaxed max-w-2xl">{personalInfo.bio}</p>
                        
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-4">
                            {personalInfo.languages.map(lang => (
                                <span key={lang} className="px-4 py-2 rounded-full glass-card text-sm font-medium text-foreground">{lang}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Experience & Education */}
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Experience */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-display font-bold text-foreground flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-primary-500" />
                            Experience
                        </h2>
                        <div className="space-y-8">
                            {experiences?.map((exp, i) => (
                                <div key={i} className="relative pl-8 border-l border-muted">
                                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary-500" />
                                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                                    <p className="text-primary-400 font-medium mb-2">{exp.company} <span className="text-mutedForeground text-sm ml-2">{exp.period}</span></p>
                                    <p className="text-mutedForeground leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-display font-bold text-foreground flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-primary-500" />
                            Education
                        </h2>
                        <div className="space-y-8">
                            {education?.map((edu, i) => (
                                <div key={i} className="relative pl-8 border-l border-muted">
                                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary-500" />
                                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                                    <p className="text-primary-400 font-medium mb-2">{edu.institution} <span className="text-mutedForeground text-sm ml-2">{edu.period}</span></p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Technical Skills */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-display font-bold text-foreground text-center">Technical Expertise</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.technical.map((skill, i) => (
                            <div key={i} className="glass-card p-6 rounded-2xl hover:border-primary-500/30 transition-colors">
                                <h3 className="text-lg font-bold text-foreground mb-2">{skill.title}</h3>
                                <p className="text-mutedForeground text-sm leading-relaxed">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
