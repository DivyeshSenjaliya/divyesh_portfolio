'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Maximize2, Image as ImageIcon, Sparkles } from 'lucide-react'

interface ProjectGalleryProps {
    title: string
    screenshots?: string[]
    gradient?: string
}

export default function ProjectGallery({ title, screenshots = [], gradient = 'from-blue-500 to-indigo-500' }: ProjectGalleryProps) {
    const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
    const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})

    const validScreenshots = screenshots.filter((src) => !failedImages[src])

    const handleNext = useCallback(() => {
        if (activeImageIndex === null || validScreenshots.length === 0) return
        setActiveImageIndex((prev) => ((prev ?? 0) + 1) % validScreenshots.length)
    }, [activeImageIndex, validScreenshots.length])

    const handlePrev = useCallback(() => {
        if (activeImageIndex === null || validScreenshots.length === 0) return
        setActiveImageIndex((prev) => ((prev ?? 0) - 1 + validScreenshots.length) % validScreenshots.length)
    }, [activeImageIndex, validScreenshots.length])

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (activeImageIndex === null) return
            if (e.key === 'Escape') setActiveImageIndex(null)
            if (e.key === 'ArrowRight') handleNext()
            if (e.key === 'ArrowLeft') handlePrev()
        },
        [activeImageIndex, handleNext, handlePrev]
    )

    useEffect(() => {
        if (activeImageIndex !== null) {
            window.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'auto'
        }
    }, [activeImageIndex, handleKeyDown])

    const markImageFailed = (src: string) => {
        setFailedImages((prev) => ({ ...prev, [src]: true }))
    }

    return (
        <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-primary-400" />
                    <span className="text-sm font-semibold text-foreground/90 tracking-wide uppercase">
                        App Screenshots & Gallery
                    </span>
                </div>
                {validScreenshots.length > 0 && (
                    <span className="text-xs text-mutedForeground">
                        {validScreenshots.length} {validScreenshots.length === 1 ? 'Preview' : 'Previews'} Available
                    </span>
                )}
            </div>

            {validScreenshots.length > 0 ? (
                <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin scrollbar-thumb-white/10">
                    {validScreenshots.map((src, idx) => (
                        <motion.div
                            key={src}
                            whileHover={{ scale: 1.03, y: -4 }}
                            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                            onClick={() => setActiveImageIndex(idx)}
                            className="group/shot relative flex-shrink-0 cursor-pointer snap-start overflow-hidden rounded-2xl border border-white/10 bg-muted/40 shadow-lg"
                        >
                            <div className="relative w-32 h-64 sm:w-40 sm:h-80 overflow-hidden bg-black/40">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`${title} screenshot ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/shot:scale-105"
                                    loading="lazy"
                                    onError={() => markImageFailed(src)}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/shot:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-500 text-background text-xs font-bold shadow-md">
                                        <Maximize2 className="w-3.5 h-3.5" />
                                        Preview
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="rounded-2xl border border-dashed border-white/10 bg-muted/20 p-5 text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400 mb-2">
                        <Sparkles className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-medium text-foreground/80">
                        Drop screenshot images into <code className="px-1.5 py-0.5 rounded bg-black/40 text-primary-300 text-[11px]">public/assets/projects/{title.toLowerCase().replace(/\s+/g, '-')}/screenshots/</code>
                    </p>
                    <p className="text-[11px] text-mutedForeground mt-1">
                        Supported formats: JPG, PNG, WebP
                    </p>
                </div>
            )}

            {/* Lightbox Modal */}
            <AnimatePresence>
                {activeImageIndex !== null && validScreenshots[activeImageIndex] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                        onClick={() => setActiveImageIndex(null)}
                    >
                        {/* Top controls */}
                        <div className="absolute top-5 inset-x-6 flex items-center justify-between z-20">
                            <div className="flex items-center gap-3">
                                <span className="text-white font-bold text-lg">{title}</span>
                                <span className="px-2.5 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold">
                                    {activeImageIndex + 1} / {validScreenshots.length}
                                </span>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setActiveImageIndex(null)
                                }}
                                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                title="Close (Esc)"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Navigation arrows */}
                        {validScreenshots.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handlePrev()
                                    }}
                                    className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                    title="Previous (Left arrow)"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleNext()
                                    }}
                                    className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                    title="Next (Right arrow)"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </>
                        )}

                        {/* Main Image View */}
                        <motion.div
                            key={activeImageIndex}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-3xl border border-white/20 bg-black/60 shadow-2xl flex items-center justify-center p-2"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={validScreenshots[activeImageIndex]}
                                alt={`${title} screenshot full view`}
                                className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-inner"
                            />
                        </motion.div>

                        {/* Bottom thumbnail strip */}
                        {validScreenshots.length > 1 && (
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="absolute bottom-5 inset-x-0 flex justify-center gap-2 px-4 z-20"
                            >
                                <div className="flex gap-2 p-2 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 overflow-x-auto max-w-xl">
                                    {validScreenshots.map((src, i) => (
                                        <button
                                            key={src}
                                            onClick={() => setActiveImageIndex(i)}
                                            className={`relative h-14 w-8 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                                                i === activeImageIndex
                                                    ? 'border-primary-400 scale-105 shadow-md'
                                                    : 'border-transparent opacity-60 hover:opacity-100'
                                            }`}
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={src}
                                                alt={`thumb ${i + 1}`}
                                                className="h-full w-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
