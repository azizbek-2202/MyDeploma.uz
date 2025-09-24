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
      color: "text-blue-500",
    },
    {
      icon: BookOpen,
      number: 122,
      suffix: "+",
      label: t.stats.courses,
      color: "text-pink-500",
    },
    {
      icon: Globe,
      number: 48,
      suffix: "+",
      label: t.stats.countries,
      color: "text-indigo-500",
    },
    {
      icon: Award,
      number: 439,
      suffix: "+",
      label: t.stats.universities,
      color: "text-yellow-400",
    },
    {
      icon: FileText,
      number: 84,
      suffix: "+",
      label: t.stats.certificates,
      color: "text-green-400",
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
    <section
      id="stats-section"
      className="py-20 relative transition-colors duration-500 
        bg-gray-50 dark:bg-[#0a0a0a]"
    >
      <div className="container-base px-6 lg:px-8 py-14 rounded-3xl 
        bg-gradient-to-tr from-blue-500/90 to-purple-500/90 
        dark:from-blue-900/50 dark:to-purple-900/50 shadow-2xl shadow-black/50">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white dark:text-gray-100 tracking-wide">
            {t.stats.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <TiltCard key={index}>
                <motion.div
                  className="text-center font-bold rounded-2xl p-6 
                    backdrop-blur-xl bg-white/40 dark:bg-white/10 
                    border border-white/30 dark:border-white/20
                    shadow-md shadow-black/30 
                    transition-all duration-500"
                  whileHover={{ scale: 1.07 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  {/* Icon container */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 
                    bg-gradient-to-tr from-white/70 to-white/30 shadow-inner dark:from-gray-700/40 dark:to-gray-900/40">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>

                  {/* Number */}
                  <div className="text-3xl mb-2 font-extrabold text-gray-900 dark:text-white">
                    {startCounting ? (
                      <CountUp end={stat.number} suffix={stat.suffix} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>

                  {/* Label */}
                  <div className="text-sm text-gray-700 dark:text-gray-400 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Tilt Card 3D Effekt
function TiltCard({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = useState({})

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * 8
    const rotateY = ((x - centerX) / centerX) * -8

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: "transform 0.1s ease",
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.3s ease",
    })
  }

  return (
    <div
      className="relative rounded-2xl"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
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
