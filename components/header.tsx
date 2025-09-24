"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslation, type Language } from "@/lib/i18n"
import { ChevronDown, ChevronUp, Menu, Search, X, Sun, Moon } from "lucide-react"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface HeaderProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
}

export function Header({ currentLang, onLanguageChange }: HeaderProps) {
  const { t } = useTranslation(currentLang)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // 🌙 Toggle dark/light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode)
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", !darkMode)
    }
  }

  // 📌 Dropdown itemlar massiv qilib chiqarildi
  const regions = [
    { title: t.nav.dropdown1.item1.title, list: t.nav.dropdown1.item1.MDH },
    { title: t.nav.dropdown1.item2.title, list: t.nav.dropdown1.item2.Asia },
    { title: t.nav.dropdown1.item3.title, list: t.nav.dropdown1.item3.Yevropa },
    { title: t.nav.dropdown1.item4.title, list: t.nav.dropdown1.item4.Amerika },
    { title: t.nav.dropdown1.item5.title, list: t.nav.dropdown1.item5.Avstraliya },
  ]

  return (
    <header
      className="sticky top-0 z-50 w-full transition-colors duration-300 bg-white/95 backdrop-blur dark:bg-gray-900"
    >
      <div className="container-base px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-work-sans font-bold text-xl text-foreground">
              MyDeploma.uz
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav>
            <ul className="hidden lg:flex items-center space-x-6 font-medium text-gray-500 dark:text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="py-3.5 border-b-[3px] border-transparent hover:text-blue-900 dark:hover:text-blue-400 hover:border-blue-900 dark:hover:border-blue-400 transition-all duration-150"
                >
                  {t.nav.about}
                </Link>
              </li>

              {/* Programs Dropdown */}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="py-3.5 flex items-center gap-2 group border-b-[3px] rounded-[2px] border-transparent hover:text-blue-900 dark:hover:text-blue-400 hover:border-blue-900 dark:hover:border-blue-400 transition-all duration-150">
                    {t.nav.programs}
                    <div className="transition">
                      <ChevronDown className="group-data-[state=open]:hidden" />
                      <ChevronUp className="hidden group-data-[state=open]:block" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="flex flex-col items-start">
                    <DropdownMenuItem className="text-[#808d9c] text-lg font-semibold">
                      {t.nav.dropdown1.title1}
                    </DropdownMenuItem>

                    {regions.map((region, idx) => (
                      <DropdownMenu key={idx}>
                        <DropdownMenuTrigger
                          className="px-5 py-2 w-full text-left text-[#808d9c] flex items-center gap-3 group hover:bg-[#f8fbff] dark:hover:bg-gray-800 hover:text-blue-900 dark:hover:text-blue-400 cursor-pointer"
                        >
                          {region.title}
                          <div className="transition">
                            <ChevronDown className="group-data-[state=open]:hidden" />
                            <ChevronUp className="hidden group-data-[state=open]:block" />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="start" className="ml-1">
                          {region.list.map((v, i) => (
                            <DropdownMenuItem key={i}>{v.name}</DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ))}

                    <DropdownMenuItem className="text-[#808d9c] text-lg font-semibold">
                      {t.nav.dropdown1.title2}
                    </DropdownMenuItem>
                    {t.nav.dropdown1.daraja.map((v, i) => (
                      <DropdownMenuItem className="text-[#808d9c] px-3 py-2" key={i}>
                        {v}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              {/* Directions Dropdown */}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="py-3.5 flex items-center gap-2 group border-b-[3px] rounded-[2px] border-transparent hover:text-blue-900 dark:hover:text-blue-400 hover:border-blue-900 dark:hover:border-blue-400 transition-all duration-150">
                    {t.nav.directions}
                    <div className="transition">
                      <ChevronDown className="group-data-[state=open]:hidden" />
                      <ChevronUp className="hidden group-data-[state=open]:block" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {t.nav.dropdown2.map((v, i) => (
                      <DropdownMenuItem className="text-[#808d9c] px-3 py-2" key={i}>
                        {v.title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li><Link href="/blog" className="hover-link">{t.nav.blog}</Link></li>
              <li><Link href="/gallery" className="hover-link">{t.nav.gallery}</Link></li>
              <li><Link href="/contact" className="hover-link">{t.nav.contact}</Link></li>
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <form className="hidden xl:flex items-center border-2 border-gray-300 rounded-2xl w-[238px] h-9 px-2 dark:border-gray-600">
              <Search size={20} color="#808d9c" />
              <input
                type="text"
                placeholder={t.nav.search}
                className="px-3 py-1 w-full h-full outline-none text-black dark:text-white bg-transparent"
              />
            </form>

            {/* Language Switcher */}
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />

            {/* Dark/Light Mode Button */}
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer border-gray-400 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={toggleTheme}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden cursor-pointer border-gray-400 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="block lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800 rounded-md">
            <nav className="py-4 space-y-2 max-w-[150px] mx-auto flex flex-col items-start justify-center">
              <ul className="flex flex-col items-start font-medium text-gray-500 dark:text-gray-300">
                <li><Link href="/about" className="hover-link">{t.nav.about}</Link></li>
                <li><Link href="/blog" className="hover-link">{t.nav.blog}</Link></li>
                <li><Link href="/gallery" className="hover-link">{t.nav.gallery}</Link></li>
                <li><Link href="/contact" className="hover-link">{t.nav.contact}</Link></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
