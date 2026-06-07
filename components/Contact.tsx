'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { getDocumentData } from '@/lib/firestoreUtils'

export default function Contact() {
    const [profile, setProfile] = useState<any>(null)
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    useEffect(() => {
        const fetchProfile = async () => {
            const remoteProfile = await getDocumentData('profile', 'main')
            if (remoteProfile) {
                setProfile(remoteProfile)
            }
        }
        fetchProfile()
    }, [])

    if (!profile) return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
        </div>
    )

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const mailtoLink = `mailto:${profile.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`
        window.location.href = mailtoLink
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section id="contact" className="section-padding min-h-screen bg-background relative flex items-center pt-32">

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4 tracking-tight">
                        Let's <span className="text-primary-500">Connect</span>
                    </h2>
                    <p className="text-xl text-mutedForeground mt-6 max-w-2xl mx-auto font-light">
                        Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-primary-500 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-background transition-all duration-500">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-mutedForeground text-sm font-medium mb-1">Email</p>
                                    <a href={`mailto:${profile.email}`} className="text-xl text-foreground font-medium hover:text-primary-400 transition-colors">
                                        {profile.email}
                                    </a>
                                </div>
                            </div>

                            {/* @ts-ignore */}
                            {profile.phone && (
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-primary-500 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-background transition-all duration-500">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-mutedForeground text-sm font-medium mb-1">Phone</p>
                                        {/* @ts-ignore */}
                                        <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-xl text-foreground font-medium hover:text-primary-400 transition-colors">
                                            {/* @ts-ignore */}
                                            {profile.phone}
                                        </a>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-primary-500 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-background transition-all duration-500">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-mutedForeground text-sm font-medium mb-1">Location</p>
                                    <p className="text-xl text-foreground font-medium">
                                        {profile.location}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass-card p-8 md:p-10 rounded-[2rem] relative glow-border"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-mutedForeground text-sm font-medium mb-2 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 bg-muted/30 border border-white/5 rounded-2xl text-foreground placeholder-mutedForeground/50 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-sans"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-mutedForeground text-sm font-medium mb-2 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 bg-muted/30 border border-white/5 rounded-2xl text-foreground placeholder-mutedForeground/50 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-sans"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-mutedForeground text-sm font-medium mb-2 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-6 py-4 bg-muted/30 border border-white/5 rounded-2xl text-foreground placeholder-mutedForeground/50 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none font-sans"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-5 bg-foreground text-background font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                            >
                                <span>Send Message</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-32 text-center">
                    <p className="text-mutedForeground font-medium">
                        © {new Date().getFullYear()} Divyesh Senjaliya. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    )
}
