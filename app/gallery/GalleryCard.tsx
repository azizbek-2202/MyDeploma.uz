'use client'
import Image from "next/image"
import { ImageIcon, Play } from "lucide-react"

interface GalleryCardProps {
    flag: string
    title: string
    images: number
    videos: number
    ITitle: string
    VTitle: string
}

export default function GalleryCard({ flag, title, images, videos, ITitle, VTitle }: GalleryCardProps) {
    return (
        <div
            className="relative w-full max-w-[300px] h-[400px] rounded-3xl overflow-hidden group backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(2,6,23,0.6)] transition-transform duration-500 transform-gpu hover:-translate-y-1"
        >
            {/* Gradient background blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-500/40 to-transparent rounded-full blur-3xl opacity-80 animate-blob" />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-gradient-to-tr from-purple-600/40 to-transparent rounded-full blur-3xl opacity-80 animate-blob delay-200" />

            {/* Flag */}
            <div className="relative w-full h-40 flex items-center justify-center p-6">
                <Image src={flag} alt={title} fill className="object-contain" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-between h-[calc(100%-160px)] p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

                <div className="flex gap-6 text-gray-300 text-sm mb-6">
                    <div className="flex items-center gap-1">
                        <ImageIcon size={16} className="text-blue-400" />
                        <span>{images} {ITitle}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Play size={16} className="text-purple-400" />
                        <span>{videos} {VTitle}</span>
                    </div>
                </div>

                <button
                    className="w-14 h-14 flex items-center justify-center rounded-full border border-white/20 text-white/90 bg-gradient-to-tr from-blue-500/30 to-purple-600/30 shadow-[0_6px_18px_rgba(99,102,241,0.25)] group-hover:scale-110 transition-transform duration-300"
                >
                    →
                </button>
            </div>

            <style jsx>{`
        .animate-blob {
          animation: blob 8s infinite;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-8px, -6px) scale(1.05); }
          66% { transform: translate(6px, 4px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
        </div>
    )
}
