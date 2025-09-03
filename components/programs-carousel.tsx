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
      desc:""
    },
    {
      id: 2,
      name: "Oxford University",
      program: "Business Administration",
      location: "UK, Oxford",
      duration: "3 years",
      image: "/oxford-university-campus.png",
      desc:""
    },
    {
      id: 3,
      name: "MIT",
      program: "Engineering",
      location: "USA, Massachusetts",
      duration: "4 years",
      image: "/mit-campus-aerial.png",
      desc:""
    },
    {
      id: 4,
      name: "University of Toronto",
      program: "Medicine",
      location: "Canada, Toronto",
      duration: "6 years",
      image: "/university-of-toronto-campus.png",
      desc:""
    },
    {
      id: 5,
      name: "ETH Zurich",
      program: "Data Science",
      location: "Switzerland, Zurich",
      duration: "2 years",
      image: "/eth-zurich-campus.png",
      desc:""
    },
  ]

  return (
    <section id="programs" className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[42px] font-bold text-blue-900 mb-4">{t.popular.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.popular.subtitle}</p>
        </div>

        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {programs.map((program) => (
              <CarouselItem key={program.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img
                        src={program.image || "/placeholder.svg"}
                        alt={program.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{program.name}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          <span>{program.program}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{program.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{program.duration}</span>
                        </div>
                      </div>
                      <p>{program.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
