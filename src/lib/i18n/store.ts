"use client";
import { useSyncExternalStore } from "react";
import { Language, translations, Translations } from "./translations";

type Listener = () => void;

// Module-level store — survives re-renders and works reliably in Next.js App Router
let _lang: Language = "en";
const _listeners = new Set<Listener>();

function _notify() {
  _listeners.forEach((l) => l());
}

export const languageStore = {
  get: (): Language => _lang,
  set: (lang: Language) => {
    _lang = lang;
    _notify();
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("portfolio-lang", lang);
    }
    if (typeof document !== "undefined") {
      document.cookie = `portfolio-lang=${lang};path=/;max-age=31536000`;
    }
  },
  subscribe: (listener: Listener) => {
    _listeners.add(listener);
    return () => _listeners.delete(listener);
  },
};
