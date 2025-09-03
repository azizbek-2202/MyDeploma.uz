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
        <section className="py-16 bg-[#f9fbff]">
            <div className="container-base text-center mb-12">
                <h2 className="text-[32px] md:text-[42px] font-semibold text-blue-900 mb-4">
                    Eng so‘nggi yangiliklar va blog
                </h2>
                <p className="text-gray-500 text-lg mt-2">
                    Talabalarimiz tanlagan mashhur chet elda o‘qish dasturlari
                </p>
            </div>

            <div className="container-base grid md:grid-cols-3 gap-8 px-20">
                {posts.map((post) => (
                    <Card
                        key={post.id}
                        className="h-[542px] relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition group cursor-pointer bg-white"
                    >
                        <img
                            src={post.img}
                            alt={post.title}
                            className="w-full h-56 object-cover"
                        />
                        <CardContent className="p-6 flex flex-col justify-between h-[260px] text-center">
                            <div>
                                <div className="flex items-center gap-6 text-sm text-gray-500 mb-3">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Eye className="w-4 h-4" /> {post.views}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-semibold text-blue-900 line-clamp-2 mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-lg font-medium mt-2 line-clamp-2">{post.desc}</p>
                            </div>

                            <div className="flex justify-center absolute bottom-5 left-40">
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="w-16 h-16 text-2xl rounded-full flex items-center justify-center text-blue-900 border-2 border-blue-900 group-hover:bg-blue-900 group-hover:text-white transition"
                                >
                                    →
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <Link href="/blog" className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition">
                    Ko‘proq ko‘rish
                </Link>
            </div>
        </section>
    )
}
