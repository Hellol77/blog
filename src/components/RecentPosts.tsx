import { allBlogs } from "@/contentlayer/generated";
import Link from "next/link";

export default function RecentPosts() {
  return (
    <>
      <h1 className=" mb-6 text-2xl font-semibold">최근 게시물</h1>
      {allBlogs
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
        .map((blog) => (
          <Link
            className="flex flex-1 flex-col gap-1 rounded-lg py-4 hover:bg-gray hover:bg-opacity-5"
            href={`/blog/${blog.slug}`}
            key={blog.slug}
          >
            <span className=" break-keep text-lg  font-semibold">
              {blog.title}
            </span>
            <span className=" font-light">{blog.description}</span>
            <time className="text-xs font-light text-gray">{blog.date}</time>
          </Link>
        ))}
    </>
  );
}
