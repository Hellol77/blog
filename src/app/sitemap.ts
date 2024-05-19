import { MetadataRoute } from "next";
import { allBlogs } from "@/contentlayer/generated";
import { webUrl } from "@/constants/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  const blogPosts =
    posts?.map((post) => ({
      url: `${webUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString().split("T")[0],
    })) ?? [];

  const routes = ["", "/blog"].map((route) => ({
    url: `${webUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...blogPosts, ...routes];
}
