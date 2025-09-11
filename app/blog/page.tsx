'use client'
import { Language, useTranslation } from '@/lib/i18n'
import React, { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import BlogCard from './BlogCard'

const Page = () => {
    const [currentLang, setCurrentLang] = useState<Language>("uz")
    const { t } = useTranslation(currentLang);
    const blogs = t.blog.cards;

    // Pagination settings
    const [currentPage, setCurrentPage] = useState(1)
    const blogsPerPage = 6
    const totalPages = Math.ceil(blogs.length / blogsPerPage)
    
    const indexOfLastBlog = currentPage * blogsPerPage
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return
        setCurrentPage(page)
    }

    return (
        <div>
            <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

            <div className="pt-10 pb-2.5 text-center">
                <div className="container-base h-32">
                    <h2 className="text-5xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
                        {t.blog.title}
                    </h2>
                    <h4 className="text-xl text-gray-300">{t.blog.subject}</h4>
                </div>
            </div>

            {/* Blogs */}
            <div className="container-base px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentBlogs.map((blog: any, idx: number) => (
                    <BlogCard key={idx} {...blog} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center my-12 gap-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 hover:bg-purple-500 hover:text-white disabled:opacity-50"
                >
                    ←
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                    <button
                        key={num}
                        onClick={() => handlePageChange(num)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full border ${currentPage === num
                            ? "bg-purple-500 text-white"
                            : "text-gray-600 hover:bg-purple-500 hover:text-white"
                            }`}
                    >
                        {num}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 hover:bg-purple-500 hover:text-white disabled:opacity-50"
                >
                    →
                </button>
            </div>

            <Footer currentLang={currentLang} />
        </div>
    )
}

export default Page
