'use client'
import { Language, useTranslation } from '@/lib/i18n'
import React, { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import GalleryCard from './GalleryCard'

const Page = () => {
    const [currentLang, setCurrentLang] = useState<Language>("uz")

    const { t } = useTranslation(currentLang)

    // Galereya kartalari (massiv sifatida belgilab qo'ydik)
    const galereya: any[] = t.gallery.cards || []

    // Pagination settings
    const [currentPage, setCurrentPage] = useState(1)
    const GalereyaPerPage = 6
    const totalPages = Math.ceil(galereya.length / GalereyaPerPage)

    const indexOfLast = currentPage * GalereyaPerPage
    const indexOfFirst = indexOfLast - GalereyaPerPage
    const currentGalereya = galereya.slice(indexOfFirst, indexOfLast)

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    return (
        <div>
            <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

            {/* Title section */}
            <div className="pt-10 pb-2.5 text-center bg-[#f8fbff]">
                <div className="container-base h-32">
                    <h2 className="text-5xl mb-4 font-semibold text-blue-900">
                        {t.gallery.title}
                    </h2>
                    <h4 className="text-xl text-gray-500">{t.gallery.subject}</h4>
                </div>
            </div>

            {/* Cards section */}
            <div className="container-base py-12 px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentGalereya.map((v: any) => (
                        <GalleryCard key={v.id || v.title} {...v} />
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

            </div>

            <Footer currentLang={currentLang} />
        </div>
    )
}

export default Page
