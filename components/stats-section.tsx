"use client"

import { useEffect, useState } from "react"
import { useTranslation, type Language } from "@/lib/i18n"
import { GraduationCap, BookOpen, Globe, Award, FileText } from "lucide-react"
import { motion } from "framer-motion"

interface StatsSectionProps {
  currentLang: Language
}

export function StatsSection({ currentLang }: StatsSectionProps) {
  const { t } = useTranslation(currentLang)
  const [startCounting, setStartCounting] = useState(false)

  const stats = [
    {
      icon: GraduationCap,
      number: 504,
      suffix: "+",
      label: t.stats.students,
      color: "text-blue-900",
    },
    {
      icon: BookOpen,
      number: 122,
      suffix: "+",
      label: t.stats.courses,
      color: "text-red-800",
    },
    {
      icon: Globe,
      number: 48,
      suffix: "+",
      label: t.stats.countries,
      color: "text-blue-900",
    },
    {
      icon: Award,
      number: 439,
      suffix: "+",
      label: t.stats.universities,
      color: "text-red-800",
    },
    {
      icon: FileText,
      number: 84,
      suffix: "+",
      label: t.stats.certificates,
      color: "text-blue-900",
    },
  ]

  // Scroll bo‘lganda animatsiya boshlanadi
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats-section")
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          setStartCounting(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="stats-section" className="py-16 bg-blue-50">
      <div className="container-base px-4 sm:px-6 lg:px-8 bg-white shadow-xl shadow-gray-200 border border-[#eef5ff] py-10 rounded-[20px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-blue-900 mb-4">
            {t.stats.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">
                  {startCounting ? (
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-xl font-bold text-blue-900">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Count-up animatsiya componenti
function CountUp({ end, suffix }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000 // 2 sec
    const stepTime = Math.abs(Math.floor(duration / end))

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [end])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}
