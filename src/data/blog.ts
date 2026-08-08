import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => {
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    // exclude .zh.mdx files from the main listing
    return ext === ".mdx" && !name.endsWith(".zh");
  });
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string, lang?: string) {
  // Try language-specific file first (e.g. life_books.zh.mdx)
  const filePath = lang && lang !== "en"
    ? path.join("content", `${slug}.${lang}.mdx`)
    : path.join("content", `${slug}.mdx`);
  const fallbackPath = path.join("content", `${slug}.mdx`);

  try {
    // Attempt to read the file
    const source = fs.readFileSync(filePath, "utf-8");
    const { content: rawContent, data: metadata } = matter(source);
    const content = await markdownToHTML(rawContent);

    return {
      source: content,
      metadata,
      slug,
    };
  } catch (error: any) {
    // If zh file not found, fall back to English
    if (error.code === "ENOENT" && filePath !== fallbackPath) {
      try {
        const source = fs.readFileSync(fallbackPath, "utf-8");
        const { content: rawContent, data: metadata } = matter(source);
        const content = await markdownToHTML(rawContent);
        return { source: content, metadata, slug };
      } catch {
        return false;
      }
    }
    if (error.code === "ENOENT") {
      return false;
    } else {
      throw false;
    }
  }
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let result = await getPost(slug);
      if (result === false) {
        return null;
      }
      let { metadata, source } = result;
      return {
        metadata,
        slug,
        source,
      };
    }),
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}
