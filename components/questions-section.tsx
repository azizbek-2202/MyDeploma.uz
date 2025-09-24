"use client"

import { useTranslation, type Language } from "@/lib/i18n"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

interface QuestionProps {
    currentLang: Language
}

function Questions({ currentLang }: QuestionProps) {
    const { t } = useTranslation(currentLang)

    const slides = [
        {
            id: 1,
            title: "Harvard University",
            desc: "Computer Science • USA",
            image: "https://swiperjs.com/demos/images/nature-1.jpg",
        },
        {
            id: 2,
            title: "Oxford University",
            desc: "Business Administration • UK",
            image: "https://swiperjs.com/demos/images/nature-2.jpg",
        },
        {
            id: 3,
            title: "MIT",
            desc: "Engineering • USA",
            image: "https://swiperjs.com/demos/images/nature-3.jpg",
        },
        {
            id: 4,
            title: "University of Toronto",
            desc: "Medicine • Canada",
            image: "https://swiperjs.com/demos/images/nature-4.jpg",
        },
        {
            id: 5,
            title: "ETH Zurich",
            desc: "Data Science • Switzerland",
            image: "https://swiperjs.com/demos/images/nature-5.jpg",
        },
    ]

    return (
        <section className="relative py-20 bg-gray-100 dark:bg-[#0a0a0a] transition-colors duration-500">
            <h2 className="text-center text-4xl font-bold mb-12 text-gray-900 dark:text-white">
                {t.popular?.title || "Popular Programs"}
            </h2>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 40,
                    stretch: 0,
                    depth: 120,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="container-base px-4 sm:px-10 h-[580px]"
            >
                {slides.map((slide) => (
                    <SwiperSlide
                        key={slide.id}
                        className="w-[320px] sm:w-[380px] lg:w-[420px]"
                    >
                        <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl group">
                            {/* Background image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-700" />

                            {/* Content */}
                            <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-lg">
                                <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                                <p className="text-sm text-gray-200">{slide.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Questions
