import Post01, { metadata as metadata01 } from "./post-01/index.mdx";
import Post02, { metadata as metadata02 } from "./post-02/index.mdx";
import Post03, { metadata as metadata03 } from "./post-03/index.mdx";
import Post04, { metadata as metadata04 } from "./post-04/index.mdx";
import Post05, { metadata as metadata05 } from "./post-05/index.mdx";
import Post06, { metadata as metadata06 } from "./post-06/index.mdx";
import Post07, { metadata as metadata07 } from "./post-07/index.mdx";
import Post08, { metadata as metadata08 } from "./post-08/index.mdx";
import Post09, { metadata as metadata09 } from "./post-09/index.mdx";

const posts = [
  { Component: Post01, metadata: metadata01 },
  { Component: Post02, metadata: metadata02 },
  { Component: Post03, metadata: metadata03 },
  { Component: Post04, metadata: metadata04 },
  { Component: Post05, metadata: metadata05 },
  { Component: Post06, metadata: metadata06 },
  { Component: Post07, metadata: metadata07 },
  { Component: Post08, metadata: metadata08 },
  { Component: Post09, metadata: metadata09 },
]
  .filter(({ metadata: { draft } }) => !draft)
  .sort(
    ({ metadata: { date: a } }, { metadata: { date: b } }) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

export type PostItem = (typeof posts)[number];

export const postsByYear: Map<number, Array<PostItem>> = posts.reduce((map, post) => {
  const year = new Date(post.metadata.date).getFullYear();
  return map.set(year, (map.get(year) ?? []).concat(post));
}, new Map<number, Array<PostItem>>());

export const postsBySlug: Map<string, PostItem> = posts.reduce(
  (map, post) => map.set(post.metadata.slug, post),
  new Map()
);

export default posts;
