import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface AmazonProduct {
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: string;
  affiliateLink: string;
  pros: string[];
  cons: string[];
  description: string;
  badge?: string;
  specifications?: { label: string; value: string }[];
  discussion?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  type?: 'informational' | 'transactional';
  products?: AmazonProduct[];
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      id: data.id || slug,
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content,
      author: data.author || 'Academia Helper',
      date: data.date || '',
      readTime: data.readTime || '5 min read',
      category: data.category || 'General',
      tags: data.tags || [],
      image: data.image || '',
      type: data.type || 'informational',
      products: data.products || [],
    } as BlogPost;
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      id: data.id || slug,
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content,
      author: data.author || 'Academia Helper',
      date: data.date || '',
      readTime: data.readTime || '5 min read',
      category: data.category || 'General',
      tags: data.tags || [],
      image: data.image || '',
      type: data.type || 'informational',
      products: data.products || [],
    } as BlogPost;
  } catch { return null; }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''));
}

export function getRelatedPosts(slug: string, category: string, limit = 3): BlogPost[] {
  return getAllPosts().filter(p => p.slug !== slug && p.category === category).slice(0, limit);
}
