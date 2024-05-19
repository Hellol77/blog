import PageLayout from "@/components/PageLayout";
import { allBlogs } from "@/contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <PageLayout
      title="Blog"
      description="공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다."
    >
      {allBlogs
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
        .map((blog) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog.slug}
            className="flex items-start justify-between gap-2 py-5 hover:bg-hoverSubText"
          >
            <div className="flex flex-1 flex-col gap-1">
              <span className="line-clamp-2 break-all text-lg font-bold">
                {blog.title}
              </span>
              <span className="break-all">{blog.description}</span>
              <time className="mt-1 text-xs text-gray-500">{blog.date}</time>
            </div>
            <Image
              width={150}
              height={150}
              src={blog.thumbnailUrl}
              alt={blog.title}
              className="h-24 w-32 rounded object-cover"
            />
          </Link>
        ))}
    </PageLayout>
  );
}
