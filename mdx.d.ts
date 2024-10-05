declare module "*.mdx" {
  import type { Element, MDXProps } from "mdx/types";

  interface PostImageItem {
    src: string;
    alt: string;
  }
  interface Frontmatter {
    slug: string;
    title: string;
    subtitle: string;
    comments: string;
    views: number;
    image: PostImageItem;
    bigImg: PostImageItem;
    authorImg: PostImageItem;
    author: string;
    date: string;
    categories: Array<string>;
    category: string;
    tags: Array<string>;
    quotes: {
      quote: string;
      author: string;
    };
    featured: boolean;
    draft: boolean;
    content: string;

    postDetails: {
      paraOne: string;
      paraTwo: string;
      title: string;
      paraThree: string;
      titleTwo: string;
      paraFour: string;
      paraFive: string;
    };
    publishDate: string;
  }

  function MDXContent(props: MDXProps): Element;
  const metadata: Frontmatter;

  export { metadata, MDXContent as default };
}
