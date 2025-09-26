"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProgramsCarousel } from "@/components/programs-carousel"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { VisaSection } from "@/components/visa-section"
import { Footer } from "@/components/footer"
import type { Language } from "@/lib/i18n"
import Questions from "@/components/questions-section"
import BlogSection from "@/components/BlogSection"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<Language>("uz")
  const [load, setLoad]=useState(true)
  const router = useRouter()

  useEffect(()=>{
    if (load) {
      router.push("/test")
    }
  },[load,router])

  return (
    <div className="min-h-screen">
      <main>
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
        <HeroSection currentLang={currentLang} />
        <ProgramsCarousel currentLang={currentLang} />
        <ServicesSection currentLang={currentLang} />
        <StatsSection currentLang={currentLang} />
        <VisaSection currentLang={currentLang} />
        <Questions currentLang={currentLang}/>
        <BlogSection/>
      </main>
      <Footer currentLang={currentLang} />
    </div>
  )
}
