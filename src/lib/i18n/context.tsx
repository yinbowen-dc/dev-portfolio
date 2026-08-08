"use client";
import React, { useEffect, useState } from "react";
import { Language, translations, Translations } from "./translations";

function getInitialLang(): Language {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/portfolio-lang=(en|zh)/);
  return (match?.[1] as Language) ?? "en";
}

export function useLanguage() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    // sync on mount
    setLang(getInitialLang());

    // listen for language changes from other components
    const handler = (e: Event) => {
      setLang((e as CustomEvent<Language>).detail);
    };
    window.addEventListener("portfolio-lang-change", handler);
    return () => window.removeEventListener("portfolio-lang-change", handler);
  }, []);

  const toggleLanguage = () => {
    const next: Language = lang === "en" ? "zh" : "en";
    // persist
    document.cookie = `portfolio-lang=${next};path=/;max-age=31536000`;
    localStorage.setItem("portfolio-lang", next);
    // update self
    setLang(next);
    // broadcast to all other useLanguage consumers
    window.dispatchEvent(new CustomEvent("portfolio-lang-change", { detail: next }));
  };

  return {
    lang,
    t: translations[lang] as Translations,
    toggleLanguage,
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
