import type { GetStaticPaths, GetStaticProps } from 'next';
import BlogIndex, { type BlogIndexProps } from '../../../components/BlogIndex';
import { getAllPosts } from '../../../lib/posts';
import { BLOG_PAGE_SIZE } from '../../../lib/blog-pagination';

export default BlogIndex;

export const getStaticPaths: GetStaticPaths = async () => {
  const pageCount = Math.ceil(getAllPosts().length / BLOG_PAGE_SIZE);
  return {
    paths: Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => ({
      params: { page: String(index + 2) },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogIndexProps> = async ({ params }) => {
  const posts = getAllPosts();
  const page = Number(params?.page);
  if (!Number.isInteger(page) || page < 2 || page > Math.ceil(posts.length / BLOG_PAGE_SIZE)) {
    return { notFound: true };
  }
  return { props: { posts, page } };
};
