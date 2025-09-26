"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslation, type Language } from "@/lib/i18n"
import { ChevronDown, ChevronUp, Menu, Search, X, Sun, Moon, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
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

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const regions = [
    { title: t.nav.dropdown1.item1.title, list: t.nav.dropdown1.item1.MDH },
    { title: t.nav.dropdown1.item2.title, list: t.nav.dropdown1.item2.Asia },
    { title: t.nav.dropdown1.item3.title, list: t.nav.dropdown1.item3.Yevropa },
    { title: t.nav.dropdown1.item4.title, list: t.nav.dropdown1.item4.Amerika },
    { title: t.nav.dropdown1.item5.title, list: t.nav.dropdown1.item5.Avstraliya },
  ]

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300 bg-white/80 backdrop-blur-xl dark:bg-gray-900/80 shadow-sm">
      <div className="container-base px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-work-sans font-bold text-xl text-foreground">
              Mydiploma.uz
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav>
            <ul className="hidden lg:flex items-center space-x-6 font-medium text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="py-3.5 border-b-[3px] border-transparent hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-700 dark:hover:border-blue-400 transition-all duration-150"
                >
                  {t.nav.about}
                </Link>
              </li>

              {/* Programs Dropdown */}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="py-3.5 flex items-center gap-2 group border-b-[3px] rounded-[2px] border-transparent hover:text-blue-900 dark:hover:text-blue-400 hover:border-blue-900 dark:hover:border-blue-400 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {t.nav.programs}
                    <div className="transition">
                      <ChevronDown className="group-data-[state=open]:hidden" />
                      <ChevronUp className="hidden group-data-[state=open]:block" />
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="flex flex-col items-start rounded-lg shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2">
                    <DropdownMenuItem className="text-[#808d9c] text-lg font-semibold select-none">
                      {t.nav.dropdown1.title1}
                    </DropdownMenuItem>

                    {regions.map((region, idx) => (
                      <DropdownMenu key={idx}>
                        <DropdownMenuTrigger className="px-5 py-2 w-full text-left text-[#808d9c] flex items-center gap-3 group hover:bg-[#f8fbff] dark:hover:bg-gray-800 hover:text-blue-900 dark:hover:text-blue-400 focus:outline-none focus:bg-[#eef6ff] dark:focus:bg-gray-700 transition-colors duration-150 rounded-md">
                          {region.title}
                          <div className="transition">
                            <ChevronDown className="group-data-[state=open]:hidden" />
                            <ChevronUp className="hidden group-data-[state=open]:block" />
                          </div>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          side="right"
                          align="start"
                          className="ml-1 rounded-lg shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2"
                        >
                          {region.list.map((v, i) => (
                            <DropdownMenuItem
                              key={i}
                              asChild
                              className="w-full px-3 py-2 text-[#808d9c] hover:bg-[#f8fbff] dark:hover:bg-gray-800 hover:text-blue-900 dark:hover:text-blue-400 focus:outline-none focus:bg-[#eef6ff] dark:focus:bg-gray-700 transition-colors duration-150 rounded-md"
                            >
                              <Link href={`/programs/${v.name}`}>{v.name}</Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ))}

                    <DropdownMenuItem className="text-[#808d9c] text-lg font-semibold select-none">
                      {t.nav.dropdown1.title2}
                    </DropdownMenuItem>

                    {t.nav.dropdown1.daraja.map((v, i) => (
                      <DropdownMenuItem
                        key={i}
                        asChild
                        className="w-full px-3 py-2 text-[#808d9c] hover:bg-[#f8fbff] dark:hover:bg-gray-800 hover:text-blue-900 dark:hover:text-blue-400 focus:outline-none focus:bg-[#eef6ff] dark:focus:bg-gray-700 transition-colors duration-150 rounded-md"
                      >
                        <Link href={`/programs/${v}`}>{v}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              {/* Directions Dropdown */}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="py-3.5 flex items-center gap-2 group border-b-[3px] rounded-[2px] border-transparent hover:text-purple-700 dark:hover:text-pink-400 hover:border-purple-700 dark:hover:border-pink-400 transition-all duration-150">
                    {t.nav.directions}
                    <div className="transition">
                      <ChevronDown className="group-data-[state=open]:hidden" />
                      <ChevronUp className="hidden group-data-[state=open]:block" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="relative min-w-[220px] rounded-xl border border-white/20 dark:border-white/10 
                               bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] 
                               overflow-hidden p-2"
                  >
                    {t.nav.dropdown2.map((v: any, i: number) => (
                      <DropdownMenuItem
                        key={i}
                        className="px-3 py-2 text-gray-600 dark:text-gray-300 rounded-md
                                   hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-orange-400/20 
                                   dark:hover:from-pink-500/30 dark:hover:to-orange-400/30
                                   hover:text-pink-700 dark:hover:text-orange-300
                                   transition-all duration-300"
                      >
                        {v.title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              <li>
                <Link href="/blog" className="hover-link">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover-link">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover-link">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />

            {/* Theme Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="cursor-pointer border-gray-400 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {!mounted ? (
                    <div className="h-5 w-5" />
                  ) : theme === "light" ? (
                    <Sun className="h-5 w-5" />
                  ) : theme === "dark" ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Laptop className="h-5 w-5" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="rounded-lg backdrop-blur bg-white/70 dark:bg-gray-800/70 border border-white/20 dark:border-white/10"
              >
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2 h-4 w-4" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2 h-4 w-4" /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Laptop className="mr-2 h-4 w-4" /> System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
          <div className="block lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 rounded-md">
            <nav className="py-4 space-y-2 max-w-[200px] mx-auto flex flex-col items-start justify-center">
              <ul className="flex flex-col items-start font-medium text-gray-600 dark:text-gray-300">
                <li>
                  <Link href="/about" className="hover-link">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover-link">
                    {t.nav.blog}
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover-link">
                    {t.nav.gallery}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover-link">
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
