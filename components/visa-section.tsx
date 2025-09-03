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
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="bg-foreground rounded-full w-2 h-2 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <div className="container-base px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="max-w-[590px] mx-auto bg-white border-none">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-[42px] font-bold text-blue-900 mb-2">{t.visa.title}</h2>
            <h3 className="text-[42px] font-semibold text-blue-900 mb-6">
              <span className="text-[#b71415]">MyDeploma.uz </span>
              {t.visa.subtitle}
            </h3>
            <p className="text-lg text-muted-foreground mb-8">{t.visa.description}</p>

            <div className="grid grid-cols-1 gap-6 mb-16">
              {t.visa.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-blue-900 font-medium">{step}</p>
                </div>
              ))}
            </div>

            <Link href="/contact" className="text-lg px-8 py-5 bg-blue-800 hover:bg-blue-900 cursor-pointer text-white rounded-xl">
              {t.visa.cta}
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
