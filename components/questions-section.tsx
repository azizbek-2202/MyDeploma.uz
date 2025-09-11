// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Plus, X } from "lucide-react"
// import { useTranslation, type Language } from "@/lib/i18n"

// interface QuestionProps {
//     currentLang: Language
// }
// function Questions({ currentLang }: QuestionProps) {
//     const { t } = useTranslation(currentLang)


//     const faqs = [
//         {
//             question: "Xalqaro talabalar o‘qish paytida ishlashi mumkinmi?",
//             answer:
//                 "Bu birinchi navbatda qaysi davlatda o‘qishingizga bog‘liq. Masalan: Yevropada chet ellik talabalarga o‘qish vaqtida, haftasiga 20 soat, ta’til vaqtida esa 35-40 soat ishlashga ruxsat berilgan. Xitoy, Singapur va Malayziya kabi mamlakatlarda esa chet ellik talabalarga o‘qish davrida ishlash qat’iyan man etiladi, ammo talabalar kampusda qo‘shimcha pul ishlash imkoniyatiga ega bo‘lishadi.",
//             w: "",
//         },
//         {
//             question: "Qaysi davlat universitetlariga meni jo‘natishingiz mumkin?",
//             answer: "Hozirgi paytda biz quyidagi davlatlar bilan yaqin munosabatli ish yuritamiz: Kanada, AQSh, Angliya, Malta, Vengriya, Germaniya, Chexiya, Janubiy Koreya, Singapur, Malayziya, Avstraliya, Polsha, Latviya, Turkiya va boshqa davlatlar.",
//             w: "",
//         },
//         {
//             question: "Sizlar orqali elchixonadan 100% viza olamanmi?",
//             answer: "Har bir davlatning elchixonasi mustaqil tashkilot bo'lganligi sababli, hech kim sizga 100% viza olishingizga kafolat bera ololmaydi. Balki, elchixonaga kerakli hujjatlarni tayyorlashda ko'p yillik tajribamizga asoslanib, bizning mijozlarimiz 91% hollarida vizaga ega bo'ladi. ",
//             w: "",
//         },
//         {
//             question: "Menda IELTS sertifikati yo‘q, lekin ingliz tilini bilaman. Chet-elga o‘qishga kirishim mumkinmi?",
//             answer: "Ha, albatta. IELTS darajasiz qabul qila oladigan nufuzli universitetlar bilan ish yuritganimiz tufayli, siz o'sha universitet vakili bilan onlayn intervyudan o'tsangiz kifoya. ",
//             w: "w-[502px]",
//         },
//         {
//             question: "2 haftalik o‘quv va ta’til dasturining to‘loviga nimalar kiradi va kirmaydi?",
//             answer: "To'lov summasiga quyidagilar kiradi: • Til kurslari • Turar joy • 3 mahal ovqat • Barcha ko'ngil ochar ekskursion tadbirlarga kirish chiptalari • Sug'urta To'lov summasiga quyidagilar kirmaydi: • Aviachipta • Elchixona to'lovi • Firma to'lovi ",
//             w: "w-[479px]",
//         },
//         {
//             question: "Qanday qilib grant olsam bo‘ladi?",
//             answer: "Har bir universitet, grant berish jarayonida, sizning litsey/kolledj/universitet baholaringizga, turli-tuman yutuq va sertifikatlaringizga ahamiyat beradi. Albatta IELTS/TOPIK darajalari grant berish jarayonida asosiy ro'l o'ynaydi. Grantlar taxminan quyidagicha: • IELTS 5.5/6.0 — 30/50% gacha • IELTS 6.5/7.0 — 50/70% gacha • IELTS 7.5/8.0 — 70/100% gacha ",
//             w: "",
//         },
//     ]

//     const [openIndex, setOpenIndex] = useState<number | null>(null)


//     const toggleFAQ = (index: number) => {
//         setOpenIndex(openIndex === index ? null : index)
//     }

//     return (
//         <section className="relative py-16 bg-[#f9fbff]">
//             <div className="container-base px-10">
//                 <div className="px-4">
//                     <h2 className="text-[42px] font-semibold text-blue-900 mb-4">
//                         tez-tez so‘raladigan savollar
//                     </h2>
//                     <p className="text-gray-500 text-lg mb-6">
//                         Talabalarimiz tanlagan mashhur chet elda o‘qish dasturlari
//                     </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-10 items-start px-4">
//                     {/* Left side - Questions */}
//                     <div className="space-y-4">
//                         {faqs.map((faq, i) => (
//                             <div
//                                 key={i}
//                                 className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
//                             >
//                                 <button
//                                     onClick={() => toggleFAQ(i)}
//                                     className="w-full flex justify-between items-center text-xl text-left px-5 py-4 font-semibold text-blue-900 transition cursor-pointer"
//                                 >
//                                     <span className={`${faq.w}`}>
//                                         {faq.question}
//                                     </span>
//                                     {openIndex == i ? (
//                                         <X className="w-10 h-10 text-white bg-blue-900 rounded-full p-2" />
//                                     ) : (
//                                         <Plus className="w-10 h-10 text-blue-900 bg-[#f8fbff] rounded-full p-2" />
//                                     )}
//                                 </button>

//                                 <AnimatePresence>
//                                     {openIndex === i && (
//                                         <motion.div
//                                             initial={{ height: 0, opacity: 0 }}
//                                             animate={{ height: "auto", opacity: 1 }}
//                                             exit={{ height: 0, opacity: 0 }}
//                                             transition={{ duration: 0.3 }}
//                                             className="px-5 pb-4 text-[#808d9c] leading-relaxed"
//                                         >
//                                             {faq.answer}
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Right side - Image */}
//                     <div className="flex justify-center relative">
//                         <div className="w-72 h-72 rounded-full bg-blue-900 flex items-center justify-center overflow-hidden">
//                             <img
//                                 src="/faq-girl.png" // o'zingizning rasmi qo'ying
//                                 alt="Student"
//                                 className="w-64 h-64 object-cover rounded-full"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Questions

'use client'
import { useState, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Plus, X } from "lucide-react"
import { useTranslation, type Language } from "@/lib/i18n"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

interface QuestionProps {
    currentLang: Language
}
function Questions({ currentLang }: QuestionProps) {
    const { t } = useTranslation(currentLang)
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="container-base px-20 h-[560px]"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Questions