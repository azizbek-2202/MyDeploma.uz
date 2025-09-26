"use client"

import { HeaderTwo } from "@/components/HeaderTwo"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { Language } from "@/lib/i18n"
import { useTranslation } from "@/lib/i18n"
import { motion, AnimatePresence } from "framer-motion"

function TestPage() {
    const [currentLang, setCurrentLang] = useState<Language>("uz")
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation(currentLang)

    return (
        <div>
            <HeaderTwo currentLang={currentLang} onLanguageChange={setCurrentLang} />
            <section
                id="home"
                className="relative min-h-screen flex items-center justify-center text-white"
            >
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.jpg"
                        alt="Students learning in modern classroom"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Content */}
                <div className="container-base px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-start justify-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                                {t.test.title}
                            </h1>
                            <span className="text-2xl font-bold ml-1">{t.test.tm}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
                            {t.test.subtitle}
                        </h2>

                        {/* Open modal button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-xl px-8 py-3 border-2 bg-transparent rounded-xl border-white cursor-pointer"
                        >
                            {t.test.info}
                        </button>

                        {/* Phones */}
                        <div className="mt-16 flex gap-10 justify-center">
                            <Link
                                href="tel:+998692111170"
                                className="text-lg px-8 py-2 border-2 bg-transparent rounded-xl border-white cursor-pointer transition"
                            >
                                {t.test.phone}
                            </Link>

                            <Link
                                href="tel:+998505111170"
                                className="text-lg px-8 py-2 border-2 bg-transparent rounded-xl border-white cursor-pointer transition"
                            >
                                {t.test.phone}
                            </Link>
                        </div>

                        {/* Social links */}
                        <div className="mt-20 flex items-center justify-center gap-10 sm:gap-32">
                            <Link
                                href="https://www.instagram.com/mydiploma.uz/"
                                className="text-lg px-8 py-2 border-2 rounded-xl border-white hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                            >
                                {t.test.ins}
                            </Link>
                            <Link
                                href="https://t.me/mydiplomaa"
                                className="text-lg px-8 py-2 border-2 rounded-xl border-white hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                            >
                                {t.test.tel}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                style={{ transformPerspective: 1000 }}
                                className="bg-white/20 border border-white/30 backdrop-blur-xl rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center text-white"
                            >
                                <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">
                                    {t.test.modal.title}
                                </h3>
                                <p className="mb-6 text-lg">
                                    {t.test.modal.subtitle}{" "}
                                    <a
                                        href="https://t.me/mydiplomaa"
                                        target="_blank"
                                        className="text-blue-300 font-semibold underline hover:text-blue-400"
                                    >
                                        {t.test.modal.kan}
                                    </a>{" "}
                                    {t.test.modal.subtitle2}
                                </p>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-2 bg-white/20 border border-white/40 text-white rounded-xl hover:bg-white/30 transition cursor-pointer"
                                >
                                    Yopish
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </div>
    )
}

export default TestPage