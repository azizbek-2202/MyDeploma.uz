"use client"

import { Button } from "@/components/ui/button"
import { useTranslation, type Language } from "@/lib/i18n"
import Image from "next/image"

interface HeroSectionProps {
  currentLang: Language
}

export function HeroSection({ currentLang }: HeroSectionProps) {
  const { t } = useTranslation(currentLang)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
    >
      {/* World Map Background */}
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


      <div className="container-base px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-6xl text-white font-semibold mb-4">{t.hero.subtitle}</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty">{t.hero.description}</p>
          <Button size="lg" className="text-lg px-8 py-6 border-2 bg-white text-black 
          hover:border-white hover:bg-transparent hover:text-white transition-all duration-300">
            {t.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
