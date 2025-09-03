// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { useTranslation, type Language } from "@/lib/i18n"
// import { Globe, CreditCard, Award } from "lucide-react"

// interface ServicesSectionProps {
//   currentLang: Language
// }

// export function ServicesSection({ currentLang }: ServicesSectionProps) {
// const { t } = useTranslation(currentLang)

//   const services = [
//     {
//       icon: Globe,
//       title: t.services.consultation.title,
//       description: t.services.consultation.description,
//     },
//     {
//       icon: CreditCard,
//       title: t.services.visa.title,
//       description: t.services.visa.description,
//     },
//     {
//       icon: Award,
//       title: t.services.support.title,
//       description: t.services.support.description,
//     },
//   ]

//   return (
//     <section id="services" className="py-16 bg-background">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-foreground mb-4">{t.services.title}</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {services.map((service, index) => {
//             const Icon = service.icon
//             return (
//               <Card key={index} className="text-center hover:shadow-lg transition-shadow">
//                 <CardContent className="p-8">
//                   <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
//                     <Icon className="w-8 h-8 text-primary-foreground" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
//                   <p className="text-muted-foreground">{service.description}</p>
//                 </CardContent>
//               </Card>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }


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

  // return (
  //   <section
  //     className="relative py-16 bg-no-repeat bg-top bg-cover"
  //     style={{ backgroundImage: "url('/your-background.png')" }} // orqa fonni o'zgartirishingiz mumkin
  //   >
  //     <div className="text-center mb-14">
  //       <h2 className="text-3xl font-bold text-blue-900">Bizning xususiyatlarimiz</h2>
  //       <p className="text-gray-500 mt-2">
  //         Bizning noyob afzalliklarimiz va kuchli tomonlarimizni kashf eting!
  //       </p>
  //     </div>

  //     <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
  //       {services.map((service, i) => (
  //         <Card key={i} className="shadow-none border-0 bg-transparent">
  //           <CardContent className="flex flex-col items-center gap-4">
  //             <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
  //               {service.icon}
  //             </div>
  //             <h3 className="text-lg font-semibold text-blue-900">{service.title}</h3>
  //             <p className="text-gray-500">{service.desc}</p>
  //           </CardContent>
  //         </Card>
  //       ))}
  //     </div>
  //   </section>
  // )
  return (
    <section
      className="relative py-16 "
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-blue-900">Bizning xususiyatlarimiz</h2>
        <p className="text-gray-500 mt-2">
          Bizning noyob afzalliklarimiz va kuchli tomonlarimizni kashf eting!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center 
      bg-no-repeat bg-center bg-[url('/featurebg.svg')]">
        {services.map((service, i) => (
          <Card key={i} className={`shadow-none border-0 bg-transparent ${service.class}`}>
            <CardContent className="flex flex-col items-center gap-5">
              <div className="flex items-center justify-center w-28 h-28 group rounded-full bg-gray-100 hover:bg-blue-900 transition-all linear duration-200">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 px-3">{service.title}</h3>
              <p className="text-gray-500 px-16">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

  )
}
