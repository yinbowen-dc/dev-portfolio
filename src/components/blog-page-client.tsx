"use client";
import { BlogCard } from "@/components/blog-card";
import BlurFade from "@/components/magicui/blur-fade";
import { useLanguage } from "@/components/providers";
import { ContentPlatforms } from "@/components/content-platforms";

const BLUR_FADE_DELAY = 0.04;

interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    titleZh?: string;
    summary: string;
    summaryZh?: string;
    publishedAt: string;
    icon: string;
    readTime: string;
  };
}

export function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col min-h-[100dvh] space-y-10 pt-0 md:pt-10">
      <section id="blogs">
        <div className="space-y-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t.blog.pageHeading}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.blog.pageDesc}
                </p>
              </div>
            </div>
            <ContentPlatforms />
          </BlurFade>
          <div className="flex flex-col gap-3 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="divide-y divide-dashed">
                {posts
                  .sort(
                    (a, b) =>
                      new Date(b.metadata.publishedAt).getTime() -
                      new Date(a.metadata.publishedAt).getTime()
                  )
                  .map((post, id) => (
                    <BlurFade
                      key={post.slug}
                      delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    >
                      <BlogCard
                        href={`/blog/${post.slug}`}
                        title={post.metadata.title}
                        titleZh={post.metadata.titleZh}
                        description={post.metadata.summary}
                        descriptionZh={post.metadata.summaryZh}
                        publishedAt={post.metadata.publishedAt}
                        iconUrl={post.metadata.icon}
                        readTime={post.metadata.readTime}
                      />
                    </BlurFade>
                  ))}
              </ul>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
}
