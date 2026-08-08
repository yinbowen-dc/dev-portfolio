"use client";

import { useLanguage } from "@/components/providers";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-neutral-200 dark:border-white/[0.2] overflow-hidden text-xs font-medium">
      <button
        onClick={() => lang !== "en" && toggleLanguage()}
        className={cn(
          "px-2 py-1 transition-colors",
          lang === "en"
            ? "bg-foreground text-background"
            : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300"
        )}
      >
        EN
      </button>
      <button
        onClick={() => lang !== "zh" && toggleLanguage()}
        className={cn(
          "px-2 py-1 transition-colors",
          lang === "zh"
            ? "bg-foreground text-background"
            : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300"
        )}
      >
        中
      </button>
    </div>
  );
}
