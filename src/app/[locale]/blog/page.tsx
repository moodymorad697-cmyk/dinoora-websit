import { blogArticles } from "@/lib/blog-content";
import BlogIndexClient from "./BlogIndexClient";

const posts = blogArticles.map((article) => ({
  id: article.id,
  type: article.type,
  image: article.image,
  ar: [article.ar.title, article.ar.description] as const,
  en: [article.en.title, article.en.description] as const,
}));

export default function BlogPage() {
  return <BlogIndexClient posts={posts} />;
}