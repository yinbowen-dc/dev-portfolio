"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Language, translations, Translations } from "@/lib/i18n/translations";

interface LangCtx {
  lang: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LangCtx>({
  lang: "en",
  t: translations.en,
  toggleLanguage: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Language | null;
    if (saved === "zh" || saved === "en") setLang(saved);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next: Language = prev === "en" ? "zh" : "en";
      localStorage.setItem("portfolio-lang", next);
      document.cookie = `portfolio-lang=${next};path=/;max-age=31536000`;
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLanguage }}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <TooltipProvider delayDuration={0}>
          {children}
        </TooltipProvider>
      </ThemeProvider>
    </LanguageContext.Provider>
  );
}
