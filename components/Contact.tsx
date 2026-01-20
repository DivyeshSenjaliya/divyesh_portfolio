'use client'

import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Create mailto link
        const mailtoLink = `mailto:divyeshsenjaliya@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`
        window.location.href = mailtoLink
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: 'Email',
            value: 'divyeshsenjaliya@gmail.com',
            link: 'mailto:divyeshsenjaliya@gmail.com',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: 'Phone',
            value: '+91 9574520727',
            link: 'tel:+919574520727',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: 'Location',
            value: 'Surat, Gujarat',
            link: null,
        },
    ]

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-purple-500/5 to-transparent opacity-50 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4 animate-glow">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto rounded-full animate-shimmer"
                        style={{ backgroundSize: '200% 100%' }} />
                    <p className="text-dark-300 mt-6 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-2xl font-display font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-8">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center gap-6 group">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 group-hover:scale-110 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-dark-400 text-sm mb-1 font-medium tracking-wide">{info.label}</p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-lg text-dark-50 font-medium hover:text-purple-400 transition-colors relative group-hover:tracking-wide duration-300"
                                                >
                                                    {info.value}
                                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
                                                </a>
                                            ) : (
                                                <p className="text-lg text-dark-50 font-medium">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-2xl font-display font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                                Let's Connect
                            </h3>
                            <p className="text-dark-300 mb-8 leading-relaxed">
                                Feel free to reach out for collaborations or just a friendly hello! I'm currently available for freelance projects and open to new opportunities.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="mailto:divyeshsenjaliya@gmail.com"
                                    className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 text-center relative overflow-hidden group"
                                >
                                    <span className="relative z-10">Send Email</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </a>
                                <a
                                    href="tel:+919574520727"
                                    className="flex-1 px-6 py-4 glass-effect text-dark-50 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center border border-white/5 hover:border-purple-500/30"
                                >
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
                        <h3 className="text-2xl font-display font-semibold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-8">
                            Send a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="group">
                                <label htmlFor="name" className="block text-dark-300 text-sm font-medium mb-2 ml-1 group-focus-within:text-purple-400 transition-colors">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 bg-dark-800/50 border border-dark-700/50 rounded-xl text-dark-50 placeholder-dark-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all font-sans"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="email" className="block text-dark-300 text-sm font-medium mb-2 ml-1 group-focus-within:text-purple-400 transition-colors">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 bg-dark-800/50 border border-dark-700/50 rounded-xl text-dark-50 placeholder-dark-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all font-sans"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="message" className="block text-dark-300 text-sm font-medium mb-2 ml-1 group-focus-within:text-purple-400 transition-colors">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-6 py-4 bg-dark-800/50 border border-dark-700/50 rounded-xl text-dark-50 placeholder-dark-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none font-sans"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-95 relative overflow-hidden group"
                            >
                                <span className="relative z-10">Send Message</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-white/5 text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                    <p className="text-dark-400 font-medium">
                        © {new Date().getFullYear()} Divyesh Senjaliya. Built with <span className="text-white hover:text-purple-400 transition-colors cursor-default">Next.js</span> & <span className="text-white hover:text-blue-400 transition-colors cursor-default">Tailwind CSS</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}
