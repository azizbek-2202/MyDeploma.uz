import Image from "next/image"
import Link from "next/link"
import { Clock, Eye } from "lucide-react"

interface BlogCardProps {
    image: string
    title: string
    description: string
    date: string
    time: string
    views: string | number
    href?: string
}

export default function BlogCard({
    image,
    title,
    description,
    date,
    time,
    views,
    href = "#",
}: BlogCardProps) {
    return (
        <article
            className="relative w-full max-w-[397px] xl:w-[397px] xl:h-[540px] mx-auto group"
            aria-label={title}
            role="article"
        >
            {/* Outer frame with gradient blur blobs */}
            <div className="absolute inset-0 -z-10 rounded-3xl" aria-hidden="true">
                <div className="absolute -top-10 -left-10 w-56 h-56 bg-gradient-to-tr from-blue-500/40 to-transparent rounded-full blur-3xl opacity-90 animate-blob" />
                <div className="absolute -bottom-10 -right-8 w-72 h-72 bg-gradient-to-tr from-purple-600/30 to-transparent rounded-full blur-3xl opacity-85 animate-blob delay-200" />
            </div>

            {/* Main card body: glass + border gradient */}
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/6 border border-white/10 shadow-[0_10px_30px_rgba(2,6,23,0.6)] transition-transform duration-500 transform-gpu group-hover:-translate-y-1">
                {/* asymmetric top image with cut-out */}
                <div className="relative w-full h-56">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, 397px"
                        className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                        priority={false}
                    />
                    {/* soft gradient overlay to increase contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {/* decorative diagonal cut */}
                    <div
                        className="absolute -bottom-6 left-0 w-full h-12 bg-[linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0))] transform -skew-y-3"
                        aria-hidden="true"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col p-6 md:p-7 h-[calc(100%-224px)] justify-between bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]">
                    <div>
                        {/* meta */}
                        <div className="flex items-center gap-4 text-xs text-gray-300 mb-3">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-blue-300" />
                                <span className="leading-none">
                                    {time}, {date}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Eye className="w-4 h-4 text-purple-300" />
                                <span className="leading-none">{views}</span>
                            </div>
                        </div>

                        {/* title */}
                        <h3 className="text-xl md:text-[20px] font-semibold text-white/95 mb-2 line-clamp-2">
                            {title}
                        </h3>

                        {/* description */}
                        <p className="text-sm text-gray-300/80 leading-relaxed line-clamp-3">
                            {description}
                        </p>
                    </div>

                    {/* actions row */}
                    <div className="flex items-center justify-between mt-4">
                        <Link
                            href={href}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-[0_6px_20px_rgba(99,102,241,0.18)] hover:scale-105 transition-transform duration-300"
                            aria-label={`Read more about ${title}`}
                        >
                            Read
                            <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-white/12 border border-white/6">
                                →
                            </span>
                        </Link>

                        {/* small floating circular CTA (neon) */}
                        <button
                            className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white/8 text-white/90 bg-gradient-to-tr from-white/6 to-transparent shadow-[0_6px_18px_rgba(99,102,241,0.12)] hover:scale-110 transition-transform duration-300"
                            aria-label="Open post quick"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>

            {/* subtle focus ring for keyboard users */}
            <style jsx>{`
        .animate-blob {
          animation: blob 8s infinite;
        }
        @keyframes blob {
          0% {
            transform: translateY(0) scale(1);
          }
          33% {
            transform: translateY(-6px) scale(1.03);
          }
          66% {
            transform: translateY(2px) scale(0.98);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
        </article>
    )
}
