"use client"

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
  mode?: "dark" | "light"
}

export default function BlogCard({
  image,
  title,
  description,
  date,
  time,
  views,
  href = "#",
  mode = "dark",
}: BlogCardProps) {
  const isDark = mode === "dark"

  return (
    <article
      className="relative w-full max-w-[397px] xl:w-[397px] xl:h-[540px] mx-auto group perspective-1000"
      aria-label={title}
      role="article"
    >
      {/* Glow blobs */}
      <div className="absolute inset-0 -z-10 rounded-3xl" aria-hidden="true">
        <div
          className={`absolute -top-10 -left-10 w-56 h-56 rounded-full blur-3xl opacity-70 animate-blob 
          ${isDark ? "bg-blue-500/30" : "bg-blue-300/40"}`}
        />
        <div
          className={`absolute -bottom-12 -right-8 w-72 h-72 rounded-full blur-3xl opacity-70 animate-blob delay-200 
          ${isDark ? "bg-purple-600/30" : "bg-pink-300/40"}`}
        />
      </div>

      {/* Card container */}
      <div
        className={`relative rounded-3xl overflow-hidden backdrop-blur-xl border shadow-[0_10px_30px_rgba(0,0,0,0.15)] 
        transform-gpu transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[0.5deg]
        ${isDark
          ? "bg-gradient-to-br from-slate-900/90 to-slate-800/70 border-white/10"
          : "bg-gradient-to-br from-white/90 to-gray-100/70 border-gray-200"}`
        }
      >
        {/* Image */}
        <div className="relative w-full h-56">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 397px"
            className="object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t 
            ${isDark ? "from-black/60" : "from-white/70"} via-transparent to-transparent`}
          />
          <div
            className="absolute -bottom-6 left-0 w-full h-12 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),rgba(255,255,255,0))] transform -skew-y-3"
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col p-6 md:p-7 h-[calc(100%-224px)] justify-between">
          <div>
            {/* Meta */}
            <div className="flex items-center gap-4 text-xs mb-3">
              <div className="flex items-center gap-2">
                <Clock className={`w-4 h-4 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                  {time}, {date}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className={`w-4 h-4 ${isDark ? "text-purple-400" : "text-purple-600"}`} />
                <span className={isDark ? "text-gray-300" : "text-gray-600"}>{views}</span>
              </div>
            </div>

            {/* Title */}
            <h3
              className={`text-xl md:text-[20px] font-semibold mb-2 line-clamp-1 
              ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed line-clamp-2 
              ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              {description}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-4">
            <Link
              href={href}
              className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105
              ${isDark
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-[0_6px_20px_rgba(99,102,241,0.4)]"
                : "bg-gradient-to-r from-blue-400 to-pink-400 text-white shadow-[0_6px_20px_rgba(236,72,153,0.4)]"}`
              }
              aria-label={`Read more about ${title}`}
            >
              Read
              <span
                className={`inline-flex w-9 h-9 items-center justify-center rounded-full border 
                ${isDark
                  ? "bg-white/10 border-white/10 text-white"
                  : "bg-black/10 border-black/10 text-black"}`}
              >
                →
              </span>
            </Link>

            <button
              className={`w-14 h-14 flex items-center justify-center rounded-full border transition-all duration-300 hover:scale-110
              ${isDark
                ? "border-white/10 text-white bg-gradient-to-tr from-slate-700/40 to-transparent shadow-[0_6px_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"
                : "border-gray-300 text-gray-700 bg-gradient-to-tr from-gray-100 to-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"}`}
              aria-label="Open post quick"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-blob {
          animation: blob 8s infinite;
        }
        @keyframes blob {
          0% {
            transform: translateY(0) scale(1);
          }
          33% {
            transform: translateY(-6px) scale(1.05);
          }
          66% {
            transform: translateY(4px) scale(0.97);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </article>
  )
}
