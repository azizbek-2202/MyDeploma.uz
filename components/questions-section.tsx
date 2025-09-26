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
            image: "https://avatars.mds.yandex.net/get-altay/12810232/2a00000191556c7fbd4a7d49135d933d1608/orig",
        },
        {
            id: 2,
            title: "Oxford University",
            desc: "Business Administration • UK",
            image: "https://i.insider.com/568ea4b1dd08954e458b4794",
        },
        {
            id: 3,
            title: "MIT",
            desc: "Engineering • USA",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Great_Dome%2C_Massachusetts_Institute_of_Technology%2C_Aug_2019.jpg/1200px-Great_Dome%2C_Massachusetts_Institute_of_Technology%2C_Aug_2019.jpg",
        },
        {
            id: 4,
            title: "University of Toronto",
            desc: "Medicine • Canada",
            image: "https://i.ytimg.com/vi/RirZlETqXa4/maxresdefault.jpg",
        },
        {
            id: 5,
            title: "ETH Zurich",
            desc: "Data Science • Switzerland",
            image: "https://i.ytimg.com/vi/vzH4PNZbp2U/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVyhCMA8=&amp;rs=AOn4CLBxb5svpChtYXDuGthePuHC586iQw",
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
