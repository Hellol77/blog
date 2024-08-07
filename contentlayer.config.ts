import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkParse from "remark-parse";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    thumbnailUrl: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (blog) => blog._raw.sourceFileName.replace(".mdx", ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Blog],
  mdx: {
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeSlug,
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: "github-dark",
          defaultLang: "plaintext",
        },
      ],
    ],
  },
});
