import { allBlogs } from "@/contentlayer/generated";
import Link from "next/link";

export default function RecentPosts() {
  return (
    <>
      <h1 className=" mb-6 text-2xl font-semibold">최근 게시물</h1>
      {allBlogs
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
        .slice(0, 5)
        .map((blog) => (
          <Link
            className=" hover:bg-hoverSubText  flex flex-1 flex-col gap-1 rounded-lg py-4 "
            href={`/blog/${blog.slug}`}
            key={blog.slug}
          >
            <span className=" break-keep text-lg  font-semibold">
              {blog.title}
            </span>
            <span className=" font-light">{blog.description}</span>
            <time className="text-subText text-xs font-light">{blog.date}</time>
          </Link>
        ))}
    </>
  );
}
