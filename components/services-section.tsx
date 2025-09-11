// 'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Language, useTranslation } from "@/lib/i18n"
import { GraduationCap, CreditCard, Crown } from "lucide-react"
interface ServicesSectionProps {
  currentLang: Language
}

export function ServicesSection({ currentLang }: ServicesSectionProps) {
  const { t } = useTranslation(currentLang)

  const services = [
    {
      class: "mt-10",
      icon: <GraduationCap className="w-10 h-10 text-blue-600 group-hover:text-white" />,
      title: "Dunyoning istalgan nuqtasida o‘qish imkoniyati",
      desc: "Siz biz bilan dunyoning istalgan nuqtasida o‘qishingiz mumkin",
    },
    {
      class: "",
      icon: <CreditCard className="w-10 h-10 text-red-400 group-hover:text-white" />,
      title: "O‘zingiz xohlagan tarzda to‘lash imkoniyati",
      desc: "Siz biz bilan dunyoning istalgan nuqtasida o‘qishingiz mumkin",
    },
    {
      class: "mt-10",
      icon: <Crown className="w-10 h-10 text-blue-600 group-hover:text-white" />,
      title: "Dunyo bo‘ylab yuqori sifatli ta'lim olish imkoniyati",
      desc: "Siz biz bilan dunyoning istalgan nuqtasida o‘qishingiz mumkin",
    },
  ]

  return (
    <section
      className="relative py-16">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold">Bizning xususiyatlarimiz</h2>
        <p className="mt-2">
          Bizning noyob afzalliklarimiz va kuchli tomonlarimizni kashf eting!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center 
      bg-no-repeat bg-center bg-[url('/featurebg.svg')]">
        {services.map((service, i) => (
          <Card key={i} className={`shadow-none border-0 bg-transparent text-white ${service.class}`}>
            <CardContent className="flex flex-col items-center gap-5">
              <div className="flex items-center justify-center w-28 h-28 group rounded-full bg-gray-100 hover:bg-blue-900 transition-all linear duration-200">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold px-3">{service.title}</h3>
              <p className="px-16 text-gray-400">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

  )
}
