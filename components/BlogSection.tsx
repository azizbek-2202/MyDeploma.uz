"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Eye } from "lucide-react"
import Link from "next/link"

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
    {
        id: 4,
        title: "“Kelajak uchun poydevor: volontyorlik va xalqaro seminarlar”",
        desc: "Xalqaro volontyorlik va seminarlar – talabador uchun katta imkoniyat",
        date: "18:45, 21-avg, 2025",
        views: "3 625",
        img: "/image.png",
    },
    {
        id: 5,
        title: "SAT 1360+ bilan Amerikada 100% grant – bu real!",
        desc: "Grant Orzusi Endi Qo‘lingizda! Amerika universitetlari eshiklari siz uchun ochiq",
        date: "19:27, 19-avg, 2025",
        views: "3 680",
        img: "/image.png",
    },
    {
        id: 6,
        title: "Bahorda talaba bo‘ling!",
        desc: "Bir yil kutmang: Bahorgi qabul bilan ertab talabalikka qadam qo‘ying",
        date: "16:00, 15-avg, 2025",
        views: "3 894",
        img: "/image.png",
    },
]

export default function BlogSection() {
    return (
        <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            <div className="container-base text-center mb-14">
                <h2 className="text-[32px] md:text-[42px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg mb-4">
                    Eng so‘nggi yangiliklar va blog
                </h2>
                <p className="text-gray-400 text-lg mt-2 max-w-2xl mx-auto">
                    Talabalarimiz tanlagan mashhur chet elda o‘qish dasturlari
                </p>
            </div>

            {/* Cards grid */}
            <div className="container-base grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-12 lg:px-20">
                {posts.map((post) => (
                    <Card
                        key={post.id}
                        className="group pb-5 relative rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-tr from-blue-500 to-purple-500 shadow-lg transition-all duration-500 cursor-pointer border-none"
                    >
                        {/* Image with hover scale */}
                        <div className="relative w-full h-56 overflow-hidden">
                            <img
                                src={post.img}
                                alt={post.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition"></div>
                        </div>

                        {/* Content */}
                        <CardContent className="p-8 flex flex-col items-center justify-between h-[280px] text-left relative z-10">
                            <div>
                                <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                                    <span className="flex items-center gap-1 text-white">
                                        <Calendar className="w-4 h-4" /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-1 text-white">
                                        <Eye className="w-4 h-4" /> {post.views}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white line-clamp-2 mb-3 transition">
                                    {post.title}
                                </h3>
                                <p className="text-gray-300 text-lg font-medium mt-2 line-clamp-2">
                                    {post.desc}
                                </p>
                            </div>

                            {/* Action button */}
                            <div className="flex justify-start mt-6">
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-white text-white text-2xl font-bold group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-blue-500/30"
                                >
                                    →
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* More button */}
            <div className="flex justify-center mt-14">
                <Link
                    href="/blog"
                    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/40 hover:shadow-pink-500/40 transition duration-500"
                >
                    Ko‘proq ko‘rish
                </Link>
            </div>
        </section>

    )
}
