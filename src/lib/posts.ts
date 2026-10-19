import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPosts() {
  return (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

export function getPostSlug(post: CollectionEntry<'blog'>) {
  return post.id.replace(/\.[^.]+$/, '');
}

export function getPostUrl(post: CollectionEntry<'blog'>) {
  return `/notes/${getPostSlug(post)}/`;
}
