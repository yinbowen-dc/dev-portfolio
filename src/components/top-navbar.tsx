"use client";
import React from "react";
import { FloatingNav } from "./acternityui/floating-nav";
import { navItems } from "@/data/config/nav.config";
import { useLanguage } from "@/components/providers";

export function TopNavbar() {
  const { t } = useLanguage();

  const navNames: Record<string, string> = {
    "/about": t.nav.about,
    "/projects": t.nav.projects,
    "/blog": t.nav.blog,
    "/#newsletter": t.nav.reach,
  };

  const translatedItems = navItems.map((item) => ({
    ...item,
    name: navNames[item.link] ?? item.name,
  }));

  return (
    <div className="flex h-full w-full">
      <FloatingNav navItems={translatedItems} />
    </div>
  );
}
