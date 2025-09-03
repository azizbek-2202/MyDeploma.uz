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
        <div className="bg-white w-full max-w-[300px] h-[400px] flex flex-col justify-between items-center shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 p-6 group">

            {/* Flag */}
            <div className="w-full h-40 relative">
                <Image src={flag} alt={title} fill className="object-contain" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-blue-900">{title}</h3>

            {/* Stats */}
            <div className="flex gap-6 text-gray-500 text-sm mt-2">
                <div className="flex items-center gap-1">
                    <ImageIcon size={16} />
                    <span>{images} {ITitle}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Play size={16} />
                    <span>{videos} {VTitle}</span>
                </div>
            </div>

            {/* Button */}
            <button className="w-14 h-14 flex items-center justify-center rounded-full border border-blue-900 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition">
                →
            </button>
        </div>
    )
}
