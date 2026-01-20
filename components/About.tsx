'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import profilePic from '@/app/personalImage/divyeshh.jpg'
import { personalInfo as localProfile, experiences as localExp, education as localEdu, skills as localSkills } from '@/lib/data'
import { getDocumentData, getCollectionData } from '@/lib/firestoreUtils'

export default function About() {
    const [activeSection, setActiveSection] = useState('intro')
    const [profile, setProfile] = useState(localProfile)
    const [experiences, setExperiences] = useState(localExp)
    const [education, setEducation] = useState(localEdu)
    const [skillsData, setSkillsData] = useState(localSkills)

    useEffect(() => {
        const fetchData = async () => {
            const remoteProfile = await getDocumentData('profile', 'main')
            if (remoteProfile) {
                setProfile(prev => ({
                    ...prev,
                    ...remoteProfile,
                    // Keep local image if remote doesn't have one (likely)
                    profileImage: (remoteProfile as any).profileImage || prev.profileImage
                }))
            }

            const remoteExp = await getCollectionData('experience')
            if (remoteExp.length > 0) setExperiences(remoteExp as any)

            const remoteEdu = await getCollectionData('education')
            if (remoteEdu.length > 0) setEducation(remoteEdu as any)

            const remoteSkills = await getDocumentData('skills', 'main')
            if (remoteSkills) setSkillsData(remoteSkills as any)
        }

        fetchData()
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.3, rootMargin: '-20% 0px -50% 0px' }
        )

        const sections = document.querySelectorAll('.about-section')
        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 100 // Sticky header offset
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
            setActiveSection(id)
        }
    }

    return (
        <section className="section-padding min-h-screen bg-dark-900 text-dark-200 relative">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 relative z-10">

                {/* Left Column - Sticky Sidebar */}
                <div className="lg:col-span-4 relative">
                    <div className="sticky top-32 space-y-8">
                        {/* Profile Info */}
                        <div className="flex flex-col items-start space-y-4">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-dark-800 shadow-2xl relative group">
                                <Image
                                    src={profile.profileImage || profilePic} // Fallback to safe static import
                                    alt={profile.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 192px, 192px"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                            </div>

                            <div className="flex items-center gap-2 text-dark-400">
                                <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>{profile.location}</span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {profile.languages && profile.languages.map(lang => (
                                    <span key={lang} className="px-3 py-1 rounded-full border border-dark-700 text-sm hover:border-teal-500/50 hover:text-teal-400 transition-colors cursor-default">{lang}</span>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="hidden lg:flex flex-col space-y-1">
                            {['intro', 'experience', 'studies', 'skills'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`flex items-center gap-3 py-2 text-sm font-medium transition-all group ${activeSection === item ? 'text-white' : 'text-dark-400 hover:text-dark-200'
                                        }`}
                                >
                                    <span className={`h-px w-6 bg-current transition-all ${activeSection === item ? 'w-12 bg-teal-500' : 'group-hover:w-8'}`} />
                                    <span className="uppercase tracking-widest">{item}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Right Column - Content */}
                <div className="lg:col-span-8 space-y-24 pt-12 lg:pt-0">

                    {/* Introduction */}
                    <div id="intro" className="about-section scroll-mt-32 space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight">
                                {profile && profile.name ? profile.name.split(' ')[0] : 'Divyesh'}<br />
                                <span className="text-teal-500">{profile && profile.name ? profile.name.split(' ')[1] : 'Senjaliya'}.</span>
                            </h1>
                            <p className="text-xl text-dark-300 font-light">
                                {profile.role}
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a href={profile.socials.email} className="px-6 py-3 bg-white text-dark-900 font-bold rounded-full hover:scale-105 transition-transform">
                                Email Me
                            </a>
                            <a href={profile.socials.github} target="_blank" className="p-3 border border-dark-700 rounded-full hover:bg-dark-800 hover:border-teal-500 text-white transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <a href={profile.socials.linkedin} target="_blank" className="p-3 border border-dark-700 rounded-full hover:bg-dark-800 hover:border-teal-500 text-white transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>

                        <p className="text-lg leading-relaxed text-dark-300">
                            {profile.bio}
                        </p>
                    </div>

                    {/* Works / Experience */}
                    <div id="experience" className="about-section scroll-mt-32 space-y-8">
                        <h2 className="text-3xl font-display font-bold text-white">Work Experience</h2>
                        <div className="space-y-12">
                            {experiences && experiences.map((exp, i) => (
                                <div key={i} className="group relative pl-8 border-l border-dark-800 hover:border-teal-500/50 transition-colors">
                                    <div className="absolute left-0 top-0 -translate-x-[5px] w-[9px] h-[9px] rounded-full bg-dark-800 group-hover:bg-teal-500 transition-colors" />

                                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                        <span className="text-sm font-mono text-dark-400">{exp.period}</span>
                                    </div>
                                    <h4 className="text-teal-400 font-medium mb-4">{exp.title}</h4>
                                    <p className="text-dark-300 leading-relaxed max-w-2xl">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Studies */}
                    <div id="studies" className="about-section scroll-mt-32 space-y-8">
                        <h2 className="text-3xl font-display font-bold text-white">Studies</h2>
                        <div className="space-y-12">
                            {education && education.map((edu, i) => (
                                <div key={i} className="group relative pl-8 border-l border-dark-800 hover:border-teal-500/50 transition-colors">
                                    <div className="absolute left-0 top-0 -translate-x-[5px] w-[9px] h-[9px] rounded-full bg-dark-800 group-hover:bg-teal-500 transition-colors" />

                                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                                        <span className="text-sm font-mono text-dark-400">{edu.period}</span>
                                    </div>
                                    <h4 className="text-teal-400 font-medium">{edu.degree}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Skills */}
                    <div id="skills" className="about-section scroll-mt-32 space-y-8">
                        <h2 className="text-3xl font-display font-bold text-white">Technical Skills</h2>
                        <div className="grid gap-6">
                            {skillsData && skillsData.technical && skillsData.technical.map((skill, i) => (
                                <div key={i} className="group">
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{skill.title}</h3>
                                    <p className="text-dark-400">{skill.desc}</p>
                                    <div className="h-px bg-dark-800 mt-6 group-hover:bg-dark-700 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
