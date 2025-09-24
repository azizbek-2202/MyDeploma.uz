"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Language, useTranslation } from "@/lib/i18n"
import { GraduationCap, CreditCard, Crown } from "lucide-react"
import { useState } from "react"

interface ServicesSectionProps {
  currentLang: Language
}

export function ServicesSection({ currentLang }: ServicesSectionProps) {
  const { t } = useTranslation(currentLang)

  const services = [
    {
      class: "mt-10",
      icon: <GraduationCap className="w-10 h-10 text-blue-500 group-hover:text-white transition-colors" />,
      title: "Dunyoning istalgan nuqtasida o‘qish imkoniyati",
      desc: "Siz biz bilan dunyoning istalgan nuqtasida o‘qishingiz mumkin",
    },
    {
      class: "",
      icon: <CreditCard className="w-10 h-10 text-pink-500 group-hover:text-white transition-colors" />,
      title: "O‘zingiz xohlagan tarzda to‘lash imkoniyati",
      desc: "To‘lovni mos ravishda amalga oshirishingiz mumkin",
    },
    {
      class: "mt-10",
      icon: <Crown className="w-10 h-10 text-yellow-400 group-hover:text-white transition-colors" />,
      title: "Dunyo bo‘ylab yuqori sifatli ta'lim olish imkoniyati",
      desc: "Biz bilan eng yuqori darajada ta’limga erishasiz",
    },
  ]

  return (
    <section className="relative py-16 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="text-center mb-14">
        <h2 className="text-[40px] font-bold text-black dark:text-white">Bizning xususiyatlarimiz</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Bizning noyob afzalliklarimiz va kuchli tomonlarimizni kashf eting!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <TiltCard key={i} className={service.class}>
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center justify-center w-24 h-24 group rounded-full bg-gray-100 dark:bg-gray-800">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white px-4 text-center">
                {service.title}
              </h3>
              <p className="px-6 text-gray-500 dark:text-gray-400 text-center">
                {service.desc}
              </p>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}

// 🔥 Tilt Card component (3D Effekt)
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [style, setStyle] = useState({})

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * 10
    const rotateY = ((x - centerX) / centerX) * -10

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
    })
  }

  return (
    <Card
      className={`relative bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0f0f0f] 
      rounded-2xl shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.6)] 
      transition-transform duration-200 ease-out cursor-pointer ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent className="p-8">{children}</CardContent>
    </Card>
  )
}
