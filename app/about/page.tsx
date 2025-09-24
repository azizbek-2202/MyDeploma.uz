'use client'

import { Language, useTranslation } from '@/lib/i18n'
import Image from 'next/image'
import React, { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const About = () => {
    const [currentLang, setCurrentLang] = useState<Language>('uz')
    const { t } = useTranslation(currentLang)

    // faqat massivni olamiz
    const cards = t.about.cards

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
            {/* Header */}
            <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

            {/* Main intro */}
            <div className="pt-16 pb-4 text-center">
                <div className="container-base h-32">
                    <h2 className="text-5xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
                        {t.about.main.title}
                    </h2>
                    <h4 className="text-xl text-gray-400">{t.about.main.subject}</h4>
                </div>
            </div>

            {/* About description */}
            <div className="py-20 px-6 md:px-20 lg:px-40">
                <div className="container-base">
                    <h4 className="text-3xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
                        {t.about.main.subTitle}
                    </h4>
                    <div className="flex items-center my-10 text-lg rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
                        <div className="h-[380px] w-2.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-md" />
                        <div className="p-8 text-gray-300">
                            <h5 className="mb-6 text-white font-semibold">
                                {t.about.main.descTitle}
                            </h5>
                            <p className="mb-4">{t.about.main.desc1}</p>
                            <p className="mb-2">{t.about.main.desc2}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team section */}
            <div>
                <div className="text-center">
                    <h2 className="text-5xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
                        {t.about.team.title}
                    </h2>
                    <h4 className="text-xl text-gray-400">{t.about.team.subject}</h4>
                </div>

                <div className="container-base px-6 md:px-10 lg:px-20 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {cards &&
                        cards.map((card, index) => (
                            <div
                                key={index}
                                className="relative group bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-8 text-center transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
                            >
                                {/* Avatar */}
                                <div className="flex justify-center mb-6">
                                    <div className="w-[130px] h-[130px] rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500">
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <Image
                                                src={card.img}
                                                alt={card.title}
                                                width={130}
                                                height={130}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Name */}
                                <h2 className="text-2xl font-semibold text-white">
                                    {card.title}
                                </h2>

                                {/* Role */}
                                <p className="text-purple-300 my-2">{card.role}</p>

                                {/* Phone */}
                                <p className="text-gray-400">{card.phone}</p>
                            </div>
                        ))}
                </div>
            </div>

            {/* Footer */}
            <Footer currentLang={currentLang} />
        </div>
    )
}

export default About
