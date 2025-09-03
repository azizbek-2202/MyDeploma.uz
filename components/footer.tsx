"use client"

import { Language, useTranslation } from "@/lib/i18n"
import Link from "next/link"

interface FooterProps {
  currentLang: Language
}

export function Footer({ currentLang }: FooterProps) {
  const { t } = useTranslation(currentLang)

  return (
    <footer className="bg-gray-100 py-10 mt-10 border-t">
      <div className="container-base grid grid-cols-1 md:grid-cols-4 items-start gap-8 px-6 font-medium text-gray-500">

        {/* Logo + Contact */}
        <div>
          <img src="/image.png" alt="MyDeploma.uz" className="h-14 mb-3" />
          <p className="mb-4 text-lg">{t.footer.phone}</p>
          <p className="mb-4 text-lg">{t.footer.email}</p>
          <p className="mb-4 text-lg">{t.footer.address}</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-3 text-[22px] text-blue-900">{t.footer.navigationTitle}</h4>
          <ul className="space-y-2 text-lg">
            <li><Link href="/about">{t.footer.navigation.about}</Link></li>
            <li><Link href="/">{t.footer.navigation.programs}</Link></li>
            <li><Link href="/blog">{t.footer.navigation.blog}</Link></li>
            <li><Link href="/gallery">{t.footer.navigation.gallery}</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold mb-3 text-[22px] text-blue-900">{t.footer.programsTitle}</h4>
          <ul className="space-y-2 text-lg">
            {t.footer.programsList.map((program: string, idx: number) => (
              <li key={idx}>{program}</li>
            ))}
          </ul>
        </div>

        {/* Directions */}
        <div>
          <h4 className="font-semibold mb-3 text-[22px] text-blue-900">{t.footer.directionsTitle}</h4>
          <ul className="space-y-2 text-lg">
            {t.footer.directionsList.map((dir: string, idx: number) => (
              <li key={idx}>{dir}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-6 text-center space-x-4">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-telegram"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  )
}
