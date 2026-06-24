'use client'

import { motion } from 'framer-motion'
import {
    ArrowRight,
    Code2,
    Database,
    ExternalLink,
    Gauge,
    Layers,
    Mail,
    MapPin,
    Phone,
    Quote,
    Rocket,
    ShieldCheck,
    Smartphone,
    Sparkles,
    Star,
    Workflow,
} from 'lucide-react'
import { personalInfo, projects, skills } from '@/lib/data'

const tools = ['React Native', 'TypeScript', 'Firebase', 'REST APIs', 'Redux Toolkit', 'Zustand']

const services = [
    {
        icon: <Smartphone className="h-5 w-5" />,
        title: 'React Native App Development',
        description: 'Production-ready Android and iOS apps using React Native CLI, TypeScript, and scalable architecture.',
        accent: 'bg-[#FFD447]',
    },
    {
        icon: <Workflow className="h-5 w-5" />,
        title: 'API & Firebase Integration',
        description: 'Clean REST API flows, Firebase services, realtime data, auth, push notifications, and robust error handling.',
        accent: 'bg-[#A78BFA]',
    },
    {
        icon: <Layers className="h-5 w-5" />,
        title: 'Mobile UI Implementation',
        description: 'Responsive, polished mobile interfaces with reusable components, smooth UX, and platform-aware details.',
        accent: 'bg-[#FF8FAB]',
    },
    {
        icon: <Gauge className="h-5 w-5" />,
        title: 'Performance & Release Support',
        description: 'Startup-time improvements, render optimization, crash-safe builds, and Android/iOS release readiness.',
        accent: 'bg-[#7DD3FC]',
    },
]

const featuredProjects = projects.slice(0, 3)
const topSkills = skills.technical.slice(0, 6)

const stats = [
    { value: '3+', label: 'Years experience' },
    { value: '7+', label: 'Mobile apps shipped' },
    { value: '2', label: 'Platforms supported' },
]

const testimonials = [
    {
        name: 'Product Teams',
        role: 'Mobile Delivery',
        quote: 'Focused on clean implementation, reusable code, and app experiences that feel reliable in production.',
    },
    {
        name: 'Startup MVPs',
        role: 'Fast Iteration',
        quote: 'Comfortable turning requirements into working mobile flows without overcomplicating the architecture.',
    },
    {
        name: 'Cross-platform Apps',
        role: 'Android & iOS',
        quote: 'Balances platform-specific behavior with a shared React Native codebase that stays maintainable.',
    },
]

function DoodleStar({ className = '' }: { className?: string }) {
    return (
        <span className={`absolute grid h-12 w-12 place-items-center rotate-12 ${className}`}>
            <span className="absolute h-full w-full border-2 border-ink bg-[#F8B4D9]" />
            <Sparkles className="relative h-5 w-5 text-ink" />
        </span>
    )
}

function AppPreviewCard() {
    return (
        <div className="relative mx-auto w-full max-w-[330px]">
            <div className="absolute -left-5 top-10 grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-[#FFD447] shadow-sketch">
                <Code2 className="h-5 w-5" />
            </div>
            <div className="absolute -right-5 bottom-10 grid h-12 w-12 place-items-center rotate-12 border-2 border-ink bg-[#FF8FAB] shadow-sketch">
                <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="border-2 border-ink bg-white p-4 shadow-sketch">
                <div className="mb-4 flex items-center justify-between border-2 border-ink bg-cream px-3 py-2">
                    <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FFD447]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#7DD3FC]" />
                    </div>
                    <span className="text-xs font-black">mobile.tsx</span>
                </div>
                <div className="space-y-3 border-2 border-ink bg-[#D9D9D9] p-4">
                    <div className="flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink bg-[#BAE6FD]">
                            <Smartphone className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                            <div className="mb-2 h-3 w-3/4 rounded-full bg-ink" />
                            <div className="h-2 w-1/2 rounded-full bg-ink/40" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 border-2 border-ink bg-cream" />
                        <div className="h-20 border-2 border-ink bg-[#FFD447]" />
                    </div>
                    <div className="h-11 rounded-full border-2 border-ink bg-ink" />
                </div>
            </div>
        </div>
    )
}

export default function Hero() {
    return (
        <main className="min-h-screen bg-cream pt-28 text-ink">
            <section className="relative overflow-hidden border-b-2 border-ink px-5 pb-10 pt-8 md:px-10 lg:px-20">
                <DoodleStar className="-left-3 top-10" />
                <DoodleStar className="-right-3 bottom-10 bg-[#BAE6FD]" />

                <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="relative z-10"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 border-2 border-ink bg-white px-4 py-2 text-sm font-black shadow-sketch">
                            <Rocket className="h-4 w-4 fill-[#FFD447] text-ink" />
                            {personalInfo.role} · {personalInfo.location}
                        </div>

                        <h1 className="max-w-4xl text-[46px] font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl">
                            Hi, I’m {personalInfo.name.split(' ')[0]} — I build production-ready mobile apps
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-ink/70">
                            {personalInfo.bio} I specialize in React Native, TypeScript, Firebase, REST APIs, and clean
                            cross-platform delivery for Android and iOS.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 text-sm font-black">
                                <Mail className="h-4 w-4" />
                                {personalInfo.email}
                            </a>
                            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 text-sm font-black">
                                <Phone className="h-4 w-4" />
                                {personalInfo.phone}
                            </a>
                            <span className="inline-flex items-center gap-2 text-sm font-black">
                                <MapPin className="h-4 w-4" />
                                {personalInfo.location}
                            </span>
                        </div>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-[#BAE6FD] px-6 py-3 text-sm font-black shadow-sketch transition hover:-translate-y-1"
                            >
                                Hire me today
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href="/projects"
                                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-3 text-sm font-black shadow-sketch transition hover:-translate-y-1"
                            >
                                View my work
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, rotate: -4, scale: 0.94 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        transition={{ duration: 0.65, delay: 0.12 }}
                        className="relative"
                    >
                        <AppPreviewCard />
                    </motion.div>
                </div>
            </section>

            <section className="border-b-2 border-ink bg-black px-5 py-4 text-cream">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-black md:justify-between md:text-base">
                    {tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                    ))}
                </div>
            </section>

            <section className="relative border-b-2 border-ink px-5 py-12 md:px-10 lg:px-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-ink/55">Services</p>
                            <h2 className="max-w-2xl text-3xl font-black tracking-[-0.05em] md:text-5xl">
                                Mobile app services for startups, SaaS, healthcare, fintech, and booking products
                            </h2>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {stats.map((stat) => (
                                <div key={stat.label} className="border-2 border-ink bg-white px-4 py-4 shadow-sketch">
                                    <p className="text-2xl font-black">{stat.value}</p>
                                    <p className="text-xs font-bold uppercase text-ink/60">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid border-2 border-ink bg-white md:grid-cols-2">
                        {services.map((service, index) => (
                            <article
                                key={service.title}
                                className={`border-ink p-6 ${index > 1 ? 'md:border-t-2' : ''} ${index % 2 === 1 ? 'md:border-l-2' : ''} ${index > 0 ? 'border-t-2 md:border-t-0' : ''}`}
                            >
                                <div className={`mb-4 grid h-10 w-10 place-items-center rounded-full border-2 border-ink ${service.accent}`}>
                                    {service.icon}
                                </div>
                                <h3 className="mb-2 text-xl font-black">{service.title}</h3>
                                <p className="mb-5 text-sm font-medium leading-6 text-ink/65">{service.description}</p>
                                <a href="/contact" className="inline-flex items-center gap-2 text-sm font-black underline decoration-2 underline-offset-4">
                                    Discuss this <ArrowRight className="h-4 w-4" />
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative border-b-2 border-ink px-5 py-12 md:px-10 lg:px-20">
                <DoodleStar className="right-8 top-10 bg-[#BAE6FD]" />
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 text-center">
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-ink/55">Featured Work</p>
                        <h2 className="inline-block border-b-4 border-ink text-4xl font-black tracking-[-0.06em] md:text-5xl">
                            My Portfolio
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-6 text-ink/65">
                            Top three mobile projects from my work — selected from production app experience.
                        </p>
                    </div>

                    <div className="grid gap-7 md:grid-cols-3">
                        {featuredProjects.map((project) => (
                            <article key={project.title} className="border-2 border-ink bg-white p-4 shadow-sketch">
                                <div className={`mb-4 grid aspect-[1.2] place-items-center border-2 border-ink bg-gradient-to-br ${project.gradient}`}>
                                    {project.image ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={project.image} alt={project.title} className="h-20 w-20 rounded-3xl border-2 border-ink bg-white object-cover shadow-sketch" />
                                    ) : (
                                        <span className="text-4xl font-black">{project.icon}</span>
                                    )}
                                </div>
                                <div className="flex min-h-[220px] flex-col">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-lg font-black">{project.title}</h3>
                                            <p className="mt-1 text-sm font-black text-ink/55">{project.subtitle}</p>
                                        </div>
                                        <a href="/projects" className="grid h-8 w-8 shrink-0 place-items-center border-2 border-ink bg-cream">
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm font-medium leading-6 text-ink/65">{project.description}</p>
                                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                                        {project.tech.slice(0, 3).map((tech) => (
                                            <span key={tech} className="rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-black">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b-2 border-ink px-5 py-12 md:px-10 lg:px-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div>
                            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-ink/55">Skills</p>
                            <h2 className="max-w-2xl text-3xl font-black tracking-[-0.05em] md:text-5xl">
                                Core skills I use to ship stable mobile products
                            </h2>
                        </div>
                        <a href="/skills" className="inline-flex items-center gap-2 text-sm font-black underline decoration-2 underline-offset-4">
                            View all skills <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {topSkills.map((skill) => (
                            <article key={skill.title} className="border-2 border-ink bg-white p-5 shadow-sketch">
                                <Database className="mb-4 h-6 w-6" />
                                <h3 className="text-lg font-black">{skill.title}</h3>
                                <p className="mt-2 text-sm font-medium leading-6 text-ink/65">{skill.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b-2 border-ink px-5 py-12 md:px-10 lg:px-20">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-8 max-w-xl text-2xl font-black tracking-[-0.04em] md:text-3xl">
                        What you get when working with {personalInfo.name.split(' ')[0]}
                    </h2>

                    <div className="grid gap-5 md:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <article
                                key={testimonial.name}
                                className={`border-2 border-ink bg-white p-5 shadow-sketch ${index === 1 ? 'md:translate-y-10' : ''}`}
                            >
                                <Quote className="mb-4 h-6 w-6 fill-[#FFD447] text-ink" />
                                <p className="text-sm font-semibold leading-6 text-ink/75">“{testimonial.quote}”</p>
                                <div className="mt-5 flex items-center gap-3">
                                    <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-[#F8B4D9] font-black">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-black">{testimonial.name}</p>
                                        <p className="text-xs font-bold uppercase text-ink/55">{testimonial.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-5 py-14 md:px-10 lg:px-20">
                <div className="mx-auto max-w-5xl border-2 border-ink bg-white px-6 py-10 text-center shadow-sketch md:px-12">
                    <Star className="mx-auto mb-4 h-9 w-9 fill-[#F8B4D9] text-ink" />
                    <h2 className="text-3xl font-black tracking-[-0.05em] md:text-5xl">
                        Let’s build your next mobile app
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-ink/65 md:text-base">
                        Need a React Native developer for an MVP, production feature, Firebase integration, or app release?
                        Send the details and I’ll help you move fast without messy code.
                    </p>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-[#BAE6FD] px-6 py-3 text-sm font-black shadow-sketch transition hover:-translate-y-1"
                    >
                        Contact {personalInfo.name.split(' ')[0]}
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </section>
        </main>
    )
}
