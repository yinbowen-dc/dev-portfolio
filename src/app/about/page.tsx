import { AnimeCards } from "@/components/anime-cards";
import { BookCards } from "@/components/book-cards";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { TimeLineCard } from "@/components/timeline-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/config/site.config";
import { SKILLS } from "@/data/config/skills.config";
import { WORK } from "@/data/config/work.config";
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";
import { WeChatHover } from "@/components/we_chat_hover";

const BLUR_FADE_DELAY = 0.04;

export default function About() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 pt-0 md:pt-10 pb-10 md:pb-0">
      <section id="quote">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none"
          yOffset={8}
          text={`Bro, I'm ${DATA.name} 🍾`}
        />
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-lg text-muted-foreground mb-6">
            In this Web2 domain, I will demonstrate my path of development.
          </p>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <Image
            src="/quote.gif"
            alt="quote"
            width={1920}
            height={1080}
            className="rounded-xl w-full h-auto object-cover max-h-[300px]"
          />
        </BlurFade>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Educational Background</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                location={education.location}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Expierence</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {WORK.map((work, id) => (
                <BlurFade
                  key={work.title + work.dates}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <TimeLineCard
                    title={work.title}
                    role={work.role}
                    description={work.description}
                    location={work.location}
                    dates={work.dates}
                    image={work.image}
                    links={work.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="anime">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-xl font-bold">Life Movie</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <AnimeCards/>
        </BlurFade>
      </section>

    <section id="book">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-xl font-bold">Reconmend Books</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <BookCards/>
        </BlurFade>
      </section>

      <section id="connect">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <h2 className="text-xl font-bold">Call me</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert text-justify">
            {DATA.connect}
          </Markdown>
        </BlurFade>
      </section>
    </main>
  );
}
