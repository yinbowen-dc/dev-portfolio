"use client";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { useLanguage } from "@/components/providers";

const platforms = [
  {
    key: "bilibili" as const,
    href: "https://space.bilibili.com/162867295",
    icon: Icons.bilibili,
    color: "text-[#00AEEC]",
    bg: "hover:bg-[#00AEEC]/10",
  },
  {
    key: "juejin" as const,
    href: "https://juejin.cn/user/3892711776064952",
    icon: Icons.juejin,
    color: "text-[#1E80FF]",
    bg: "hover:bg-[#1E80FF]/10",
  },
  {
    key: "medium" as const,
    href: "https://medium.com/@gaiyuluo",
    icon: Icons.medium,
    color: "text-foreground",
    bg: "hover:bg-foreground/10",
  },
];

export function ContentPlatforms() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <p className="text-xs text-muted-foreground mb-3 uppercase tracking-widest">
        {t.blog.platformsHeading}
      </p>
      <div className="grid grid-cols-3 gap-3">
        {platforms.map(({ key, href, icon: Icon, color, bg }) => (
          <Link
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center gap-2 rounded-xl border border-border p-4 transition-colors ${bg}`}
          >
            <Icon className={`size-7 ${color}`} />
            <div className="text-center">
              <p className="text-xs font-semibold leading-tight">
                {t.blog.platforms[key].name}
              </p>
              <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                {t.blog.platforms[key].desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
