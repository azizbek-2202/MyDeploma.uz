'use client'
import Image from "next/image"
import { ImageIcon, Play } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

interface GalleryCardProps {
    flag: string
    title: string
    images: number
    videos: number
    ITitle: string
    VTitle: string
    href: string
}

export default function GalleryCard({
    flag,
    title,
    images,
    videos,
    ITitle,
    VTitle,
    href,
}: GalleryCardProps) {
    return (
        <TiltCard>
            <div className="relative w-full max-w-[320px] h-[450px] rounded-3xl 
                bg-gradient-to-br from-gray-900 via-black to-gray-800 
                shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden text-white">

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-cyan-400/80 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                            initial={{ x: Math.random() * 320, y: Math.random() * 450, opacity: 0 }}
                            animate={{
                                y: [Math.random() * 450, Math.random() * -50],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 6 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                            }}
                        />
                    ))}
                </div>

                {/* Flag image */}
                <div className="relative w-full h-40 flex items-center justify-center z-10">
                    <Image
                        src={flag}
                        alt={title}
                        fill
                        className="object-cover rounded-t-3xl shadow-lg"
                    />
                </div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-between h-[calc(100%-160px)] p-6 text-center">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                        {title}
                    </h3>

                    <div className="flex gap-8 text-sm mb-6">
                        {/* Images */}
                        <Link href={href + "/images"} className="flex flex-col items-center">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full 
                  bg-cyan-500/20 border border-cyan-400/40 shadow-md mb-2">
                                <ImageIcon size={18} className="text-cyan-300" />
                            </div>
                            <span className="text-lg font-semibold">{images}</span>
                            <span className="text-xs text-gray-400">{ITitle}</span>
                        </Link>

                        {/* Videos */}
                        <Link href={href + "/videos"} className="flex flex-col items-center">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full 
                  bg-purple-600/20 border border-purple-400/40 shadow-md mb-2">
                                <Play size={18} className="text-purple-300" />
                            </div>
                            <span className="text-lg font-semibold">{videos}</span>
                            <span className="text-xs text-gray-400">{VTitle}</span>
                        </Link>
                    </div>

                    <button
                        className="relative w-14 h-14 flex items-center justify-center rounded-full 
              border border-cyan-400/40 text-white 
              bg-gradient-to-tr from-cyan-600/30 to-purple-600/30 
              shadow-[0_0_20px_rgba(34,211,238,0.6)]
              group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(147,51,234,0.7)]
              transition duration-500"
                    >
                        →
                    </button>
                </div>
            </div>
        </TiltCard>
    )
}

// 3D Tilt wrapper
function TiltCard({ children }: { children: React.ReactNode }) {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const card = cardRef.current
        if (!card) return

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2
            const rotateX = ((y - centerY) / centerY) * 12
            const rotateY = ((x - centerX) / centerX) * -12
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }

        const resetTilt = () => {
            card.style.transform = "rotateX(0deg) rotateY(0deg)"
        }

        card.addEventListener("mousemove", handleMouseMove)
        card.addEventListener("mouseleave", resetTilt)

        return () => {
            card.removeEventListener("mousemove", handleMouseMove)
            card.removeEventListener("mouseleave", resetTilt)
        }
    }, [])

    return (
        <div ref={cardRef} className="transition-transform duration-200">
            {children}
        </div>
    )
}
