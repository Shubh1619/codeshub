import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content";

const baseUrl = "https://codeshub.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1, frequency: "weekly" as const },
    { path: "/services", priority: 0.9, frequency: "weekly" as const },
    { path: "/products", priority: 0.8, frequency: "monthly" as const },
    { path: "/portfolio", priority: 0.8, frequency: "monthly" as const },
    { path: "/careers", priority: 0.7, frequency: "weekly" as const },
    { path: "/blog", priority: 0.7, frequency: "weekly" as const },
    { path: "/contact", priority: 0.6, frequency: "yearly" as const },
  ].map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.frequency,
    priority: page.priority,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}