"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { languages, type Language } from "@/lib/i18n"
import { ChevronDown } from "lucide-react"

interface LanguageSwitcherProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
}

export function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:bg-accent"
      >
        <span className="text-sm font-medium">{languages[currentLang]}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-card border border-border rounded-md shadow-lg z-50">
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              onClick={() => {
                onLanguageChange(code as Language)
                setIsOpen(false)
              }}
              className="w-full px-3 py-2 text-accent-foreground text-left text-sm hover:bg-gray-200/80 first:rounded-t-md last:rounded-b-md"
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
