"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation, type Language } from "@/lib/i18n"
import { Check } from "lucide-react"
import Link from "next/link"

interface VisaSectionProps {
  currentLang: Language
}

export function VisaSection({ currentLang }: VisaSectionProps) {
  const { t } = useTranslation(currentLang)

  return (
    <section className="py-20 relative bg-[#0a0a0a] overflow-hidden">
  <div className="container-base px-4 sm:px-6 lg:px-8 relative z-10">
    <Card className="relative max-w-[650px] mx-auto border-none rounded-3xl overflow-hidden">

      <CardContent className="p-10 md:p-14 text-center relative bg-gradient-to-tr from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/20 rounded-3xl">
        <h2 className="text-[42px] font-bold text-white mb-2 drop-shadow-lg">
          {t.visa.title}
        </h2>
        <h3 className="text-[42px] font-semibold mb-6 text-white">
          <span className="text-red-500 drop-shadow">MyDeploma.uz </span>
          {t.visa.subtitle}
        </h3>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          {t.visa.description}
        </p>

        <div className="grid grid-cols-1 gap-6 mb-14">
          {t.visa.steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-3 text-left bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-xl hover:bg-white/10 transition-all"
            >
              <div className="w-7 h-7 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-200 font-medium">{step}</p>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-block text-lg px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 transition-all text-white rounded-2xl shadow-lg shadow-purple-500/30"
        >
          {t.visa.cta}
        </Link>
      </CardContent>
    </Card>
  </div>
</section>

  )
}
