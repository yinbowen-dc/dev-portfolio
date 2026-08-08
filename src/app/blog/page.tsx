import { getBlogPosts } from "@/data/blog";
import { BlogPageClient } from "@/components/blog-page-client";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const validPosts = posts.filter(Boolean).map((p) => ({
    slug: p!.slug,
    metadata: {
      title: p!.metadata.title,
      titleZh: p!.metadata.titleZh,
      summary: p!.metadata.summary,
      summaryZh: p!.metadata.summaryZh,
      publishedAt: p!.metadata.publishedAt,
      icon: p!.metadata.icon,
      readTime: p!.metadata.readTime,
    },
  }));

  return <BlogPageClient posts={validPosts} />;
}
