import postsData from '../blog-posts/index.json';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  type: string;
  image: string;
  author: string;
}

export function getAllPosts(): BlogPost[] {
  return [...postsData].sort((a, b) =>
    (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0) ||
    a.slug.localeCompare(b.slug)
  );
}
