"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTranslation, type Language } from "@/lib/i18n"
import { Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface VisaSectionProps {
  currentLang: Language
}

export function VisaSection({ currentLang }: VisaSectionProps) {
  const { t } = useTranslation(currentLang)

  return (
    <section
      className="relative py-24 transition-colors duration-500 
      bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden"
    >
      {/* Neon background orbs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-200" />

      <div className="container-base px-4 sm:px-6 lg:px-8 relative z-10">
        <TiltCard>
          <Card className="relative max-w-[720px] mx-auto border-none rounded-[2rem] overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.3)]">
            <CardContent
              className="p-10 md:p-16 text-center relative 
              bg-gradient-to-br from-white/80 to-white/60 dark:from-[#111827] dark:via-[#0a0a0a] dark:to-[#111827]
              rounded-[2rem] border border-white/10 dark:border-white/5"
            >
              {/* Title */}
              <h2 className="text-[40px] md:text-[46px] font-extrabold mb-3 
                text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg">
                {t.visa.title}
              </h2>

              <h3 className="text-[32px] md:text-[38px] font-semibold mb-8 
                text-gray-900 dark:text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400">
                  MyDeploma.uz
                </span>{" "}
                {t.visa.subtitle}
              </h3>

              <p className="text-lg text-gray-700 dark:text-gray-300/90 mb-12 leading-relaxed max-w-2xl mx-auto">
                {t.visa.description}
              </p>

              {/* Steps */}
              <div className="grid gap-5 mb-14">
                {t.visa.steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-left 
                    bg-white/70 dark:bg-white/5 border border-gray-200/40 dark:border-white/10 
                    backdrop-blur-lg p-5 rounded-2xl 
                    hover:bg-white/90 dark:hover:bg-white/10 
                    hover:scale-[1.02] transition-all duration-300 shadow-md"
                  >
                    <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_0_12px_rgba(99,102,241,0.6)]">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="inline-block text-lg md:text-xl px-12 py-5 
                bg-gradient-to-r from-blue-600 to-purple-700 
                hover:from-blue-500 hover:to-purple-600 
                transition-all text-white rounded-2xl 
                shadow-[0_0_18px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] 
                scale-100 hover:scale-105 duration-300"
              >
                {t.visa.cta}
              </Link>
            </CardContent>
          </Card>
        </TiltCard>
      </div>
    </section>
  )
}

// 3D Tilt Card Component
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
      className="relative rounded-[2rem]"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
