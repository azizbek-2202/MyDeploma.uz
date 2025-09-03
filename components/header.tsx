"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslation, type Language } from "@/lib/i18n"
import { ChevronDown, ChevronUp, Menu, Search, X } from "lucide-react"
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


  return (
    <header
      className="sticky top-0 z-50 w-full transition-colors duration-300 bg-white/95 backdrop-blur dark:bg-gray-900">
      <div className="container-base px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href='/' className="font-work-sans font-bold text-xl text-foreground">MyDeploma.uz</Link>
          </div>

          <nav>
            <ul className="hidden md:flex items-center space-x-6 font-medium text-gray-500">
              <li>
                <Link
                  href="/about"
                  className="py-3.5 border-b-[3px] border-transparent hover:text-blue-900 hover:border-blue-900 transition-all duration-150 linear">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="py-3.5 flex items-center gap-2 group border-b-[3px] rounded-[2px] border-transparent hover:text-blue-900 hover:border-blue-900 transition-all duration-150 linear">
                    {t.nav.programs}
                    <div className="transition">
                      <ChevronDown className="group-data-[state=open]:hidden" />
                      <ChevronUp className="hidden group-data-[state=open]:block" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="flex flex-col items-start">
                    <DropdownMenuItem className="text-[#808d9c] text-lg font-semibold">{t.nav.dropdown1.title1}</DropdownMenuItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        className="
                        px-5 py-2 w-full text-left text-[#808d9c] flex items-center gap-3 group hover:bg-[#f8fbff] hover:text-blue-900 cursor-pointer"
                      >{t.nav.dropdown1.item1.title}
                        <div className="transition">
                          <ChevronDown className="group-data-[state=open]:hidden" />
                          <ChevronUp className="hidden group-data-[state=open]:block" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start" className="ml-1" >
                        {
                          t.nav.dropdown1.item1.MDH.length > 0 && t.nav.dropdown1.item1.MDH.map((v, i) => {
                            return <DropdownMenuItem key={i}>{v.name}</DropdownMenuItem>
                          })
                        }
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu >
                      <DropdownMenuTrigger
                        className="
                        px-5 py-2 w-full text-left text-[#808d9c] flex items-center gap-3 group hover:bg-[#f8fbff] hover:text-blue-900 cursor-pointer"
                      >{t.nav.dropdown1.item2.title}
                        <div className="transition">
                          <ChevronDown className="group-data-[state=open]:hidden" />
                          <ChevronUp className="hidden group-data-[state=open]:block" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start" className="ml-1">
                        {
                          t.nav.dropdown1.item2.Asia.length > 0 && t.nav.dropdown1.item2.Asia.map((v, i) => {
                            return <DropdownMenuItem key={i}>{v.name}</DropdownMenuItem>
                          })
                        }
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu >
                      <DropdownMenuTrigger
                        className="
                        px-5 py-2 w-full text-left text-[#808d9c] flex items-center gap-3 group hover:bg-[#f8fbff] hover:text-blue-900 cursor-pointer"
                      >{t.nav.dropdown1.item3.title}
                        <div className="transition">
                          <ChevronDown className="group-data-[state=open]:hidden" />
                          <ChevronUp className="hidden group-data-[state=open]:block" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start" className="ml-1">
                        {
                          t.nav.dropdown1.item3.Yevropa.length > 0 && t.nav.dropdown1.item3.Yevropa.map((v, i) => {
                            return <DropdownMenuItem key={i}>{v.name}</DropdownMenuItem>
                          })
                        }
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu >
                      <DropdownMenuTrigger
                        className="
                        px-5 py-2 w-full text-left text-[#808d9c] flex items-center gap-3 group hover:bg-[#f8fbff] hover:text-blue-900 cursor-pointer"
                      >{t.nav.dropdown1.item4.title}
                        <div className="transition">
                          <ChevronDown className="group-data-[state=open]:hidden" />
                          <ChevronUp className="hidden group-data-[state=open]:block" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start" className="ml-1">
                        {
                          t.nav.dropdown1.item4.Amerika.length > 0 && t.nav.dropdown1.item4.Amerika.map((v, i) => {
                            return <DropdownMenuItem key={i}>{v.name}</DropdownMenuItem>
                          })
                        }
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu >
                      <DropdownMenuTrigger
                        className="
                        px-5 py-2 w-full text-left text-[#808d9c] flex items-center gap-3 group hover:bg-[#f8fbff] hover:text-blue-900 cursor-pointer"
                      >{t.nav.dropdown1.item5.title}
                        <div className="transition">
                          <ChevronDown className="group-data-[state=open]:hidden" />
                          <ChevronUp className="hidden group-data-[state=open]:block" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start" className="ml-1">
                        {
                          t.nav.dropdown1.item5.Avstraliya.length > 0 && t.nav.dropdown1.item5.Avstraliya.map((v, i) => {
                            return <DropdownMenuItem key={i}>{v.name}</DropdownMenuItem>
                          })
                        }
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenuItem className="text-[#808d9c] text-lg font-semibold">{t.nav.dropdown1.title2}</DropdownMenuItem>
                    {
                      t.nav.dropdown1.daraja.length > 0 && t.nav.dropdown1.daraja.map((v, i) => {
                        return <DropdownMenuItem className="text-[#808d9c] px-3 py-2" key={i}>{v}</DropdownMenuItem>
                      })
                    }
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="py-3.5 flex items-center gap-2 group border-b-[3px] rounded-[2px] border-transparent hover:text-blue-900 hover:border-blue-900 transition-all duration-150 linear">
                    {t.nav.directions}
                    <div className="transition">
                      <ChevronDown className="group-data-[state=open]:hidden" />
                      <ChevronUp className="hidden group-data-[state=open]:block" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {
                      t.nav.dropdown2.length > 0 && t.nav.dropdown1.daraja.map((v, i) => {
                        return <DropdownMenuItem className="text-[#808d9c] px-3 py-2" key={i}>{v}</DropdownMenuItem>
                      })
                    }
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="py-3.5 border-b-[3px] border-transparent hover:text-blue-900 hover:border-blue-900 transition-all duration-150 linear">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="py-3.5 border-b-[3px] border-transparent hover:text-blue-900 hover:border-blue-900 transition-all duration-150 linear">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="py-3.5 border-b-[3px] border-transparent hover:text-blue-900 hover:border-blue-900 transition-all duration-150 linear">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-2 ">
            <form className="hidden xl:flex items-center border-2 border-[#eef5ff] rounded-2xl w-[238px] h-9 px-2">
              <Search size={20} color="#808d9c" />
              <input
                type="text"
                placeholder={t.nav.search}
                className="px-3 py-1 w-full h-full outline-none"
              />
            </form>

            <div className="rounded-xl">
              <LanguageSwitcher
                currentLang={currentLang}
                onLanguageChange={onLanguageChange}
              />
            </div>

            <Button
              variant="outline"
              size="sm"
              className="md:hidden cursor-pointer border-gray-400 text-gray-700 hover:bg-gray-200 hover:text-black transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/90 rounded-md">
            <nav className="py-4 space-y-2 max-w-[100px] mx-auto flex flex-col items-start justify-center">
              <ul className="flex flex-col items-start font-medium text-gray-500">
                <li>
                  <Link
                    href="/about"
                    className="py-3.5 border-b-[3px] border-transparent hover:text-blue-900 hover:border-blue-900 transition-all duration-150 linear">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="py-3.5 flex items-center gap-2 group border-b-[3px] rounded-[2px] border-transparent hover:text-blue-900 hover:border-blue-900 transition-all duration-150 linear">
                      {t.nav.programs}
                      <div className="transition">
                        <ChevronDown className="group-data-[state=open]:hidden" />
                        <ChevronUp className="hidden group-data-[state=open]:block" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col items-start">
                      <DropdownMenuItem className="text-[#808d9c] text-lg font-semibold">{t.nav.dropdown1.title1}</DropdownMenuItem>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          className="
                        px-5 py-2 w-full text-left text-[#808d9c] flex items-center gap-3 group hover:bg-[#f8fbff] hover:text-blue-900 cursor-pointer"
                        >{t.nav.dropdown1.item1.title}
                          <div className="transition">
                            <ChevronDown className="group-data-[state=open]:hidden" />
                            <ChevronUp className="hidden group-data-[state=open]:block" />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="start" className="ml-1" >
                          {
                            t.nav.dropdown1.item1.MDH.length > 0 && t.nav.dropdown1.item1.MDH.map((v, i) => {
                              return <DropdownMenuItem key={i}>{v.name}</DropdownMenuItem>
                            })
                          }
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <DropdownMenu >
                        <DropdownMenuTrigger
                          className="
                        px-5 py-2 w-full text-left text-[#808d9c] flex items-center gap-3 group hover:bg-[#f8fbff] hover:text-blue-900 cursor-pointer"
                        >{t.nav.dropdown1.item2.title}
                          <div className="transition">
                            <ChevronDown className="group-data-[state=open]:hidden" />
                            <ChevronUp className="hidden group-data-[state=open]:block" />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="start" className="ml-1">
                          {
                            t.nav.dropdown1.item2.Asia.length > 0 && t.nav.dropdown1.item2.Asia.map((v, i) => {
                              return <DropdownMenuItem key={i}>{v.name}</DropdownMenuItem>
                            })
                          }
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <DropdownMenu >
                        <DropdownMenuTrigger
                          className="
                        px-5 py-2 w-full text-left text-[#808d9c] flex items-center gap-3 group hover:bg-[#f8fbff] hover:text-blue-900 cursor-pointer"
                        >{t.nav.dropdown1.item3.title}
                          <div className="transition">
                            <ChevronDown className="group-data-[state=open]:hidden" />
                            <ChevronUp className="hidden group-data-[state=open]:block" />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="start" className="ml-1">
                          {
                            t.nav.dropdown1.item3.Yevropa.length > 0 && t.nav.dropdown1.item3.Yevropa.map((v, i) => {
                              return <DropdownMenuItem key={i}>{v.name}</DropdownMenuItem>
                            })
                          }
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <DropdownMenu >
                        <DropdownMenuTrigger
                          className="
                        px-5 py-2 w-full text-left text-[#808d9c] flex items-center gap-3 group hover:bg-[#f8fbff] hover:text-blue-900 cursor-pointer"
                        >{t.nav.dropdown1.item4.title}
                          <div className="transition">
                            <ChevronDown className="group-data-[state=open]:hidden" />
                            <ChevronUp className="hidden group-data-[state=open]:block" />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="start" className="ml-1">
                          {
                            t.nav.dropdown1.item4.Amerika.length > 0 && t.nav.dropdown1.item4.Amerika.map((v, i) => {
                              return <DropdownMenuItem key={i}>{v.name}</DropdownMenuItem>
                            })
                          }
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <DropdownMenu >
                        <DropdownMenuTrigger
                          className="
                        px-5 py-2 w-full text-left text-[#808d9c] flex items-center gap-3 group hover:bg-[#f8fbff] hover:text-blue-900 cursor-pointer"
                        >{t.nav.dropdown1.item5.title}
                          <div className="transition">
                            <ChevronDown className="group-data-[state=open]:hidden" />
                            <ChevronUp className="hidden group-data-[state=open]:block" />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="start" className="ml-1">
                          {
                            t.nav.dropdown1.item5.Avstraliya.length > 0 && t.nav.dropdown1.item5.Avstraliya.map((v, i) => {
                              return <DropdownMenuItem key={i}>{v.name}</DropdownMenuItem>
                            })
                          }
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <DropdownMenuItem className="text-[#808d9c] text-lg font-semibold">{t.nav.dropdown1.title2}</DropdownMenuItem>
                      {
                        t.nav.dropdown1.daraja.length > 0 && t.nav.dropdown1.daraja.map((v, i) => {
                          return <DropdownMenuItem className="text-[#808d9c] px-3 py-2" key={i}>{v}</DropdownMenuItem>
                        })
                      }
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="py-3.5 flex items-center gap-2 group border-b-[3px] rounded-[2px] border-transparent hover:text-blue-900 hover:border-blue-900 transition-all duration-150 linear">
                      {t.nav.directions}
                      <div className="transition">
                        <ChevronDown className="group-data-[state=open]:hidden" />
                        <ChevronUp className="hidden group-data-[state=open]:block" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {
                        t.nav.dropdown2.length > 0 && t.nav.dropdown1.daraja.map((v, i) => {
                          return <DropdownMenuItem className="text-[#808d9c] px-3 py-2" key={i}>{v}</DropdownMenuItem>
                        })
                      }
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li className="mb-6">
                  <Link
                    href="/blog"
                    className="py-3.5 border-b-[3px] border-transparent hover:text-blue-900 hover:border-blue-900 transition-all duration-150 linear">
                    {t.nav.blog}
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="/gallery"
                    className="py-3.5 border-b-[3px] border-transparent hover:text-blue-900 hover:border-blue-900 transition-all duration-150 linear">
                    {t.nav.gallery}
                  </Link>
                </li>
                <li className="mb-6">
                  <Link
                    href="/contact"
                    className="py-3.5 border-b-[3px] border-transparent hover:text-blue-900 hover:border-blue-900 transition-all duration-150 linear">
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