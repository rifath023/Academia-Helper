import type { GetStaticProps } from 'next';
import BlogIndex, { type BlogIndexProps } from '../../components/BlogIndex';
import { getAllPosts } from '../../lib/posts';

export default BlogIndex;

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => ({
  props: { posts: getAllPosts(), page: 1 },
});
