"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useTranslation, type Language } from "@/lib/i18n"
import { GraduationCap, MapPin, Clock } from "lucide-react"

interface ProgramsCarouselProps {
  currentLang: Language
}

export function ProgramsCarousel({ currentLang }: ProgramsCarouselProps) {
  const { t } = useTranslation(currentLang)

  const programs = [
    {
      id: 1,
      name: "Harvard University",
      program: "Computer Science",
      location: "USA, Massachusetts",
      duration: "4 years",
      image: "/harvard-university-campus.png",
      desc: ""
    },
    {
      id: 2,
      name: "Oxford University",
      program: "Business Administration",
      location: "UK, Oxford",
      duration: "3 years",
      image: "/oxford-university-campus.png",
      desc: ""
    },
    {
      id: 3,
      name: "MIT",
      program: "Engineering",
      location: "USA, Massachusetts",
      duration: "4 years",
      image: "/mit-campus-aerial.png",
      desc: ""
    },
    {
      id: 4,
      name: "University of Toronto",
      program: "Medicine",
      location: "Canada, Toronto",
      duration: "6 years",
      image: "/university-of-toronto-campus.png",
      desc: ""
    },
    {
      id: 5,
      name: "ETH Zurich",
      program: "Data Science",
      location: "Switzerland, Zurich",
      duration: "2 years",
      image: "/eth-zurich-campus.png",
      desc: ""
    },
  ]

  return (
    <section id="programs" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[42px] font-bold mb-4">{t.popular.title}</h2>
          <p className="text-lg">{t.popular.subtitle}</p>
        </div>

        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {programs.map((program) => (
              <CarouselItem
                key={program.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full group relative overflow-hidden rounded-3xl shadow-xl backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 hover:scale-[1.02] transition-all duration-500">
                  {/* Background image blur */}
                  <div className="absolute inset-0 -z-10">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.name}
                      className="w-full h-full object-cover opacity-50 blur-lg scale-110"
                    />
                  </div>

                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Image container */}
                    <div className="aspect-video relative overflow-hidden rounded-t-3xl">
                      <img
                        src={program.image || "/placeholder.svg"}
                        alt={program.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="text-xl font-bold text-white drop-shadow-lg mb-3">
                          {program.name}
                        </h3>
                        <div className="space-y-2 text-sm text-gray-200">
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-yellow-300" />
                            <span>{program.program}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-red-400" />
                            <span>{program.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-green-400" />
                            <span>{program.duration}</span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                        {program.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-white/20 hover:bg-white/40 backdrop-blur-md border-none shadow-md text-white" />
          <CarouselNext className="bg-white/20 hover:bg-white/40 backdrop-blur-md border-none shadow-md text-white" />
        </Carousel>

      </div>
    </section>
  )
}
