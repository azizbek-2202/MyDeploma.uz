'use client'
import { Language, useTranslation } from '@/lib/i18n'
import React, { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const ImagesPage = () => {
    const [currentLang, setCurrentLang] = useState<Language>("uz")

    const { t } = useTranslation(currentLang)

    // Galereya kartalari (massiv sifatida belgilab qo'ydik)
    const galereya: any[] = t.gallery.cards || []

    // Pagination settings
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <div>
            <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

            {/* Title section */}
            <div className="container-base h-32 text-center py-20">
                <h2 className="text-5xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
                    {t.gallery.title}
                </h2>
                <h4 className="subTitle">{t.gallery.subject}</h4>
            </div>

            {/* Cards section */}
            <div className="container-base py-20 px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                </div>
            </div>

            <Footer currentLang={currentLang} />
        </div>
    )
}

export default ImagesPage