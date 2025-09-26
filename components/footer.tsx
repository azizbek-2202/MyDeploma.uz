"use client"

import { Language, useTranslation } from "@/lib/i18n"
import Link from "next/link"

interface FooterProps {
  currentLang: Language
}

export function Footer({ currentLang }: FooterProps) {
  const { t } = useTranslation(currentLang)

  return (
    <footer className="py-10 mt-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container-base grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-gray-700 dark:text-gray-300">

        {/* Logo + Contact */}
        <div className="space-y-3 font-semibold">
          <img src="/" alt="MyDeploma.uz" className="h-14 mb-3" />
          <p className="text-base md:text-lg">{t.footer.phone}</p>
          <Link
            href="mailto:javazbek87@gmail.com"
            className="text-base md:text-lg"
          >
            {t.footer.email}
          </Link>
          <p className="text-base md:text-lg">{t.footer.address}</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4 text-xl md:text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow">
            {t.footer.navigationTitle}
          </h4>
          <ul className="space-y-2 text-base md:text-lg">
            <li>
              <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition font-semibold">
                {t.footer.navigation.about}
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-blue-600 dark:hover:text-blue-400 transition font-semibold">
                {t.footer.navigation.programs}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition font-semibold">
                {t.footer.navigation.blog}
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-blue-600 dark:hover:text-blue-400 transition font-semibold">
                {t.footer.navigation.gallery}
              </Link>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold mb-4 text-xl md:text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow">
            {t.footer.programsTitle}
          </h4>
          <ul className="space-y-2 text-base md:text-lg">
            {t.footer.programsList.map((program: string, idx: number) => (
              <li key={idx}>
                <Link
                  href={`/programs/${program.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition font-semibold"
                >
                  {program}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Directions */}
        <div>
          <h4 className="font-semibold mb-4 text-xl md:text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow">
            {t.footer.directionsTitle}
          </h4>
          <ul className="space-y-2 text-base md:text-lg">
            {t.footer.directionsList.map((dir: string, idx: number) => (
              <li key={idx}>
                <Link
                  href={`/directions/${dir.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition font-semibold"
                >
                  {dir}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-8 text-center space-x-6">
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition text-xl">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition text-xl">
          <i className="fab fa-telegram"></i>
        </a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition text-xl">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Bottom copyright */}
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 font-semibold">
        © {new Date().getFullYear()} MyDeploma.uz — All rights reserved.
      </div>
    </footer>
  )
}
