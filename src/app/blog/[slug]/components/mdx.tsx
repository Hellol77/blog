import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";
import { cn } from "@/utils/cn";

const mdxComponents = {
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      target="_blank"
      rel="noopener"
      {...props}
      className={cn([className, "text-blue-700 dark:text-sky-500"])}
    />
  ),
};

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose prose-slate dark:prose-invert flex-1">
      <Component components={mdxComponents} />
    </div>
  );
}
