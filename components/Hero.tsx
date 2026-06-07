'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import { getDocumentData } from '@/lib/firestoreUtils'
import profilePic from '@/app/personalImage/divyeshh.jpg'

export default function Hero() {
    const [profile, setProfile] = useState<any>(null)

    useEffect(() => {
        const fetchProfile = async () => {
            const data = await getDocumentData('profile', 'main')
            if (data) {
                setProfile(data)
            }
        }
        fetchProfile()
    }, [])

    if (!profile) return <div className="min-h-screen bg-background" />

    const nameParts = profile.name ? profile.name.split(' ') : ['DIVYESH', 'SENJALIYA']
    const firstName = nameParts[0]
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ''

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full z-[-1]">
                <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-primary-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob" />
                <div className="absolute top-[30%] -right-[10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
                <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
                
                {/* Left Column: Content */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-12 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary-500/20 bg-primary-500/10">
                            <Sparkles className="w-4 h-4 text-primary-400 animate-pulse" />
                            <span className="text-sm font-semibold text-primary-300 tracking-wider uppercase">
                                Available for new opportunities
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-extrabold mb-6 tracking-tighter uppercase leading-[1.1]"
                    >
                        <span className="block text-foreground drop-shadow-sm">{firstName}</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-purple-600 drop-shadow-sm pb-2">
                            {lastName}
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xl md:text-2xl text-mutedForeground mb-8 font-medium tracking-wide"
                    >
                        <span className="text-foreground">{profile.role}</span>
                        <span className="w-2 h-2 rounded-full bg-primary-500" />
                        <span>{profile.location}</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-lg md:text-xl text-mutedForeground max-w-xl mb-12 leading-relaxed font-light"
                    >
                        {profile.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full sm:w-auto"
                    >
                        <a
                            href="/contact"
                            className="group relative px-8 py-4 bg-foreground text-background font-bold rounded-2xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-foreground/10 w-full sm:w-auto flex items-center justify-center gap-3"
                        >
                            <span>Get In Touch</span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>

                        <a
                            href="/projects"
                            className="group px-8 py-4 rounded-2xl glass-card border border-white/10 text-foreground font-bold hover:bg-white/5 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 glow-border"
                        >
                            View Work
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Visual/Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                    className="flex-1 w-full max-w-sm md:max-w-md lg:max-w-none mt-12 lg:mt-0 flex justify-center relative"
                >
                    {/* Image Container */}
                    <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square xl:aspect-[4/5] rounded-[3rem] overflow-hidden glass-card border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                        
                        <Image
                            src={profilePic}
                            alt={profile.name || "Divyesh Senjaliya"}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Floating Badge */}
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="absolute -bottom-4 -left-4 lg:bottom-12 lg:-left-8 glass-card p-4 md:p-5 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4 z-20"
                    >
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 font-bold text-xl md:text-2xl">
                            3+
                        </div>
                        <div>
                            <p className="text-sm md:text-base text-mutedForeground font-medium">Years of</p>
                            <p className="text-base md:text-lg text-foreground font-bold tracking-wide">Experience</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
