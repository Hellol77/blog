import ProgressBar from "@/app/blog/[slug]/components/ProgressBar";
import TOC from "@/app/blog/[slug]/components/Toc";
import Mdx from "@/app/blog/[slug]/components/mdx";
import PageLayout from "@/components/PageLayout";
import { allBlogs } from "@/contentlayer/generated";
import metadata from "@/utils/metadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogPage({ params }: Props) {
  const blog = await getDocFromParams({ params });

  if (!blog) {
    notFound();
  }
  return (
    <>
      <ProgressBar />
      <PageLayout>
        <TOC content={blog.body.raw} />
        <div className="mt-5 flex flex-col gap-1">
          <Mdx code={blog.body.code} />
        </div>
      </PageLayout>
    </>
  );
}

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return metadata({
    title: doc.title,
    description: doc.description,
    path: `/blog/${doc.slug}`,
    image: `/${doc.thumbnailUrl}`,
  });
}

async function getDocFromParams({ params }: Props) {
  const doc = allBlogs.find((doc) => doc.slug === params.slug);

  return doc ?? null;
}
