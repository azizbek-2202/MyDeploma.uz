'use client'
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Language, useTranslation } from "@/lib/i18n"
import React, { useState } from "react"
import axios from "axios"

interface FormData {
    fullName: string
    phone: string
    email: string
    address: string
    message: string
}

function Contact() {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    })

    const [errors, setErrors] = useState<Partial<FormData>>({})
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState<string | null>(null)

    const validate = (): boolean => {
        const newErrors: Partial<FormData> = {}

        if (!formData.fullName.trim()) newErrors.fullName = "Ismingizni kiriting"
        if (!formData.phone.trim()) {
            newErrors.phone = "Telefon raqamingizni kiriting"
        } else if (!/^\+?[0-9]{9,15}$/.test(formData.phone)) {
            newErrors.phone = "Telefon raqamingiz noto‘g‘ri"
        }
        if (!formData.email.trim()) {
            newErrors.email = "Emailingizni kiriting"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email noto‘g‘ri"
        }
        if (!formData.message.trim()) newErrors.message = "Xabarni yozishingiz kerak"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: "" }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return

        setLoading(true)
        setSuccess(null)

        const token = "8284473156:AAFpnuV8_ytq2TS-1I9SdkxMNTV22H-mrok"
        const chatId = "@MyDeploma"

        try {
            await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                chat_id: chatId,
                text: `
📩 Yangi murojaat:
👤 Ism: ${formData.fullName}
📞 Telefon: ${formData.phone}
📧 Email: ${formData.email}
🏠 Manzil: ${formData.address || "-"}
✉️ Xabar: ${formData.message}`,
            })
            setSuccess("Xabaringiz muvaffaqiyatli yuborildi ✅")
            setFormData({
                fullName: "",
                phone: "",
                email: "",
                address: "",
                message: "",
            })
        } catch (error) {
            console.error("Xato:", error)
            setSuccess("Xabar yuborishda xatolik yuz berdi ❌")
        } finally {
            setLoading(false)
        }
    }

    const [currentLang, setCurrentLang] = useState<Language>("uz")
    const { t } = useTranslation(currentLang)

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
            <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

            {/* Title */}
            <div className="pt-16 pb-6 text-center">
                <div className="container-base">
                    <h2 className="text-5xl mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
                        {t.contact.title}
                    </h2>
                    <h4 className="text-xl text-gray-400">{t.contact.subject}</h4>
                </div>
            </div>

            <div className="container-base py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chapdagi forma */}
                <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
                    <h2 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        Biz bilan ishlash uchun quyidagi shaklni to‘ldiring
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="text-sm text-gray-300">
                                    To‘liq ism-familiyangiz
                                </label>
                                <input
                                    id="fullName"
                                    type="text"
                                    name="fullName"
                                    placeholder="To‘liq ism-familiyangiz"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full p-3 mt-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-500/40 outline-none"
                                />
                                {errors.fullName && (
                                    <span className="text-red-400 text-sm">{errors.fullName}</span>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="text-sm text-gray-300">
                                    Telefon raqamingiz
                                </label>
                                <input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    placeholder="+998901234567"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 mt-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-500/40 outline-none"
                                />
                                {errors.phone && (
                                    <span className="text-red-400 text-sm">{errors.phone}</span>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="text-sm text-gray-300">
                                    Elektron manzilingiz
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 mt-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-500/40 outline-none"
                                />
                                {errors.email && (
                                    <span className="text-red-400 text-sm">{errors.email}</span>
                                )}
                            </div>

                            {/* Address */}
                            <div>
                                <label htmlFor="address" className="text-sm text-gray-300">
                                    Manzilingiz
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    placeholder="Sizning manzilingiz"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full p-3 mt-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-500/40 outline-none"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="text-sm text-gray-300">
                                Sizning xatingiz
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Sizning xatingiz"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full p-3 mt-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-500/40 outline-none resize-none"
                            />
                            {errors.message && (
                                <span className="text-red-400 text-sm">{errors.message}</span>
                            )}
                        </div>

                        <div className="flex justify-end mt-8">
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-105 transition-transform duration-300 disabled:opacity-50"
                            >
                                {loading ? "Yuborilmoqda..." : "Ma’lumot jo‘natish"}
                            </button>
                        </div>
                    </form>

                    {success && (
                        <p className="mt-4 text-center text-lg font-medium text-green-400">
                            {success}
                        </p>
                    )}
                </div>

                {/* Preview */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
                    <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        Sizning ma’lumotlaringiz
                    </h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li className="p-3 rounded bg-gray-800/60 border border-gray-700">
                            <b>Ism:</b> {formData.fullName || "-"}
                        </li>
                        <li className="p-3 rounded bg-gray-800/60 border border-gray-700">
                            <b>Telefon:</b> {formData.phone || "-"}
                        </li>
                        <li className="p-3 rounded bg-gray-800/60 border border-gray-700">
                            <b>Email:</b> {formData.email || "-"}
                        </li>
                        <li className="p-3 rounded bg-gray-800/60 border border-gray-700">
                            <b>Manzil:</b> {formData.address || "-"}
                        </li>
                        <li className="p-3 rounded bg-gray-800/60 border border-gray-700">
                            <b>Xabar:</b> {formData.message || "-"}
                        </li>
                    </ul>
                </div>
            </div>

            <Footer currentLang={currentLang} />
        </div>
    )
}

export default Contact
