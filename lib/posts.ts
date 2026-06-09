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
  return postsData.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}