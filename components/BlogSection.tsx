"use client"

import { Calendar, Eye } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const posts = [
    {
        id: 1,
        title: "“Chet elda o‘qish: hayot va xarajatlar”",
        desc: "Chet eldagi talabalar hayoti: haqiqiy xarajatlar va byudjetni boshqarish",
        date: "13:44, 02-yan, 2025",
        views: "2 439",
        img: "/image.png",
    },
    {
        id: 2,
        title: "Angliyada o‘qish qiyinmi?",
        desc: "Talabador uchun keladigan sinovlar, o‘quv jarayonining talab qiluvchi bosqichlari",
        date: "14:11, 28-avg, 2025",
        views: "10 972",
        img: "/image.png",
    },
    {
        id: 3,
        title: "“Campus – Talabalikning Eng Yorqin Sahifalari”",
        desc: "Talabalik shahrchasida hayot: Xorijiy talabadorning yangi tajribasi",
        date: "15:33, 25-avg, 2025",
        views: "2 119",
        img: "/image.png",
    },
]

function BlogCard3D({ post }: { post: (typeof posts)[0] }) {
    const [transform, setTransform] = useState("")

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - card.left
        const y = e.clientY - card.top
        const centerX = card.width / 2
        const centerY = card.height / 2
        const rotateX = ((y - centerY) / 15).toFixed(2)
        const rotateY = ((centerX - x) / 15).toFixed(2)
        setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`)
    }

    const resetTransform = () => {
        setTransform("rotateX(0deg) rotateY(0deg) scale(1)")
    }

    return (
        <div
            className="relative rounded-3xl transition-all duration-500"
            style={{ perspective: "1200px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTransform}
        >
            <div
                className="relative rounded-3xl overflow-hidden 
        bg-gradient-to-br from-neutral-900 via-black to-neutral-800 
        border border-white/10 
        shadow-[0_20px_50px_rgba(0,0,0,0.8)]
        transition-transform duration-300"
                style={{ transform, transformStyle: "preserve-3d" }}
            >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
                    <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col justify-between h-[280px]">
                    <div>
                        <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                            <span className="flex items-center gap-1 text-white/90">
                                <Calendar className="w-4 h-4" /> {post.date}
                            </span>
                            <span className="flex items-center gap-1 text-white/90">
                                <Eye className="w-4 h-4" /> {post.views}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white line-clamp-2 mb-3 drop-shadow-lg">
                            {post.title}
                        </h3>
                        <p className="text-gray-300 text-base font-medium line-clamp-2">
                            {post.desc}
                        </p>
                    </div>

                    {/* Button */}
                    <div className="flex justify-start mt-6">
                        <Link
                            href={`/blog/${post.id}`}
                            className="w-14 h-14 rounded-full flex items-center justify-center 
              text-white text-2xl font-bold
              bg-gradient-to-tr from-fuchsia-500 via-violet-600 to-indigo-500
              shadow-[0_0_20px_rgba(168,85,247,0.7)]
              hover:shadow-[0_0_35px_rgba(139,92,246,1)]
              transition-all duration-500"
                        >
                            →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function BlogSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
            <div className="container-base text-center mb-14">
                <h2 className="text-[32px] md:text-[42px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 drop-shadow-lg mb-4">
                    Eng so‘nggi yangiliklar va blog
                </h2>
                <p className="text-gray-400 text-lg mt-2 max-w-2xl mx-auto">
                    Talabalarimiz tanlagan mashhur chet elda o‘qish dasturlari
                </p>
            </div>

            {/* Cards grid */}
            <div className="container-base grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-12 lg:px-20">
                {posts.map((post) => (
                    <BlogCard3D key={post.id} post={post} />
                ))}
            </div>

            {/* More button */}
            <div className="flex justify-center mt-14">
                <Link
                    href="/blog"
                    className="px-10 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-500 
          text-white font-semibold text-lg tracking-wide 
          shadow-[0_0_25px_rgba(139,92,246,0.8)]
          hover:shadow-[0_0_40px_rgba(168,85,247,1)]
          transition duration-500"
                >
                    Ko‘proq ko‘rish
                </Link>
            </div>
        </section>
    )
}
