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

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Ismingizni kiriting"
        }

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

        if (!formData.message.trim()) {
            newErrors.message = "Xabarni yozishingiz kerak"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: "" })) // xatoni tozalash
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
        <div>
            <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />

            <div className="pt-10 pb-2.5 text-center bg-[#f8fbff]">
                <div className="container-base h-32">
                    <h2 className="text-5xl mb-4 font-semibold text-blue-900">
                        {t.contact.title}
                    </h2>
                    <h4 className="text-xl text-gray-500">{t.contact.subject}</h4>
                </div>
            </div>

            <div className="container-base py-12 grid grid-cols-1 lg:grid-cols-3 items-start gap-6">
                {/* Chapdagi forma */}
                <div className="lg:col-span-2 bg-blue-900 text-white p-8 rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold mb-8">
                        Biz bilan ishlash uchun quyidagi shaklni to‘ldiring
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                            {/* Full Name */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="fullName">To‘liq ism-familiyangiz</label>
                                <input
                                    id="fullName"
                                    type="text"
                                    name="fullName"
                                    placeholder="To‘liq ism-familiyangiz"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="p-3 rounded text-black bg-white"
                                    required
                                />
                                {errors.fullName && (
                                    <span className="text-red-400 text-sm">
                                        {errors.fullName}
                                    </span>
                                )}
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone">Telefon raqamingiz</label>
                                <input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    placeholder="+998901234567"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="p-3 rounded text-black bg-white"
                                    required
                                />
                                {errors.phone && (
                                    <span className="text-red-400 text-sm">{errors.phone}</span>
                                )}
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email">Sizning elektron manzilingiz</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="p-3 rounded text-black bg-white"
                                    required
                                />
                                {errors.email && (
                                    <span className="text-red-400 text-sm">{errors.email}</span>
                                )}
                            </div>

                            {/* Address */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="address">Sizning manzilingiz</label>
                                <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    placeholder="Sizning manzilingiz"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="p-3 rounded text-black bg-white"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message">Sizning xatingiz</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Sizning xatingiz"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-white p-3 rounded col-span-2 text-black resize-none h-32"
                                required
                            ></textarea>
                            {errors.message && (
                                <span className="text-red-400 text-sm">{errors.message}</span>
                            )}
                        </div>

                        <div className="flex items-center justify-end mt-10">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-[215px] h-[50px] bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-3 rounded col-span-2 mt-4 cursor-pointer"
                            >
                                {loading ? "Yuborilmoqda..." : "Ma’lumot jo‘natish"}
                            </button>
                        </div>
                    </form>

                    {/* Success/Error message */}
                    {success && (
                        <p className="mt-4 text-center text-lg font-medium">
                            {success}
                        </p>
                    )}
                </div>

                {/* O‘ng taraf – preview */}
                <div className="bg-white border rounded-md p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold mb-8 text-blue-900">
                        Sizning ma’lumotlaringiz
                    </h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li className="h-14 bg-[#f8fbff] flex items-center gap-4 px-3 rounded-md">
                            <b>Ism:</b> {formData.fullName || "-"}
                        </li>
                        <li className="h-14 bg-[#f8fbff] flex items-center gap-4 px-3 rounded-md">
                            <b>Telefon:</b> {formData.phone || "-"}
                        </li>
                        <li className="h-14 bg-[#f8fbff] flex items-center gap-4 px-3 rounded-md">
                            <b>Email:</b> {formData.email || "-"}
                        </li>
                        <li className="h-14 bg-[#f8fbff] flex items-center gap-4 px-3 rounded-md">
                            <b>Manzil:</b> {formData.address || "-"}
                        </li>
                        <li className="h-14 bg-[#f8fbff] flex items-center gap-4 px-3 rounded-md">
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
