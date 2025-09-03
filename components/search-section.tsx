"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslation, type Language } from "@/lib/i18n"
import { Search } from "lucide-react"

interface SearchSectionProps {
  currentLang: Language
}

export function SearchSection({ currentLang }: SearchSectionProps) {
  const { t } = useTranslation(currentLang)

  const countries = [
    "Janubiy Koreya",
    "AQSH",
    "Ispaniya",
    "Angliya",
    "Irlandiya",
    "Shotlandiya",
    "Germaniya",
    "Frantsiya",
    "Avstraliya",
    "Avstriya",
    "Vengriya",
    "Polsha",
    "Daniya",
    "Kanada",
    "Latviya",
    "Malaysiya",
    "Yangi Zelandiya",
    "Xindiston",
    "Shveytsariya",
    "Yaponiya",
    "Chexiya",
    "Turkiya",
    "Kipr",
    "Singapur",
    "Andorra",
    "Malta",
    "Gollandiya",
    "Tayland",
    "Belgiya",
    "Gretsiya",
    "Italiya",
    "Xitoy",
    "BAA",
    "Portugaliya",
    "Finlandiya",
    "Litva",
    "Rossiya",
    "Ukraina",
    "Gruziya",
    "Ozarbayjon",
    "Belarus",
    "Ruminiya",
    "Grenada",
    "Slovakiya",
    "Xorvatiya",
    "Janubiy Afrika",
    "Qozog'iston",
    "Qirgʻiziston",
    "Tojikiston",
    "O'zbekiston",
    "Dunyo bo'ylab",
  ]

  const programs = [
    "Bakalavriat",
    "Magistratura",
    "Ilmiy Daraja",
    "Diplom va Sertifikar Kurslari",
    "Tayyorlov Kurslari",
    "Til Kurslari",
    "Ta'til Dasturlari",
    "Maktab/Internat-Maktablari",
    "Sport Oromgohlar",
  ]

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto p-8 bg-card text-card-foreground">
          <h2 className="text-2xl font-bold text-center mb-8">{t.search.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t.search.country} />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country.toLowerCase()}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t.search.program} />
              </SelectTrigger>
              <SelectContent>
                {programs.map((program) => (
                  <SelectItem key={program} value={program.toLowerCase()}>
                    {program}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button className="w-full">
              <Search className="w-4 h-4 mr-2" />
              {t.search.search}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
