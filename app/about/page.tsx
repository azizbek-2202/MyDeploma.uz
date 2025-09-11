'use client'

import { Language, useTranslation } from '@/lib/i18n'
import Image from 'next/image'
import React, { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const About = () => {
    const [currentLang, setCurrentLang] = useState<Language>("uz")
    const { t } = useTranslation(currentLang);

    // faqat massivni olamiz
    const cards = t.about.cards;

    return (
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg'>
            <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

            <div className="pt-10 pb-2.5 text-center">
                <div className="container-base h-32">
                    <h2 className='text-5xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg'>{t.about.main.title}
                    </h2>
                    <h4 className='text-xl text-gray-300'>
                        {t.about.main.subject}
                    </h4>
                </div>
            </div>

            <div className="py-20 px-40">
                <div className="container-base">
                    <h4 className='text-3xl mb-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg'>{t.about.main.subTitle}</h4>
                    <div className="flex items-center my-8 text-lg bg-[#f8fbff] text-gray-500 rounded-2xl">
                        <div className='h-[420px] w-5 bg-blue-950 rounded-md'></div>
                        <div className='p-8'>
                            <h5 className='mb-10'>{t.about.main.descTitle}</h5>
                            <p className='mb-2'>{t.about.main.desc1}</p>
                            <p className='mb-2'>{t.about.main.desc2}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-center">
                    <h2 className='text-5xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg'>
                        {t.about.team.title}
                    </h2>
                    <h4 className='text-xl text-gray-300'>
                        {t.about.team.subject}
                    </h4>
                </div>

                <div className="container-base px-20 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {cards && cards.map((card, index) => (
                        <div
                            key={index}
                            className="lg:w-[268px] bg-white shadow-md rounded-2xl p-10 text-center text-xl mb-11"
                        >
                            {/* Avatar */}
                            <div className="flex justify-center mb-4">
                                <div className="w-[130px] h-[130px] rounded-full border-4 border-blue-100 overflow-hidden">
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        width={130}
                                        height={130}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>

                            {/* Name */}
                            <h2 className="text-2xl font-semibold text-[#003366]">
                                {card.title}
                            </h2>

                            {/* Role */}
                            <p className="text-gray-600 my-2">{card.role}</p>

                            {/* Phone */}
                            <p className="text-gray-500">{card.phone}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer currentLang={currentLang} />
        </div>
    )
}

export default About