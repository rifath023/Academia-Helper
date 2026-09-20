import config from './blog-config.json';

export const BLOG_PAGE_SIZE = config.pageSize;
export const SITE_URL = config.siteUrl;

export function getBlogPagePath(page: number): string {
  return page === 1 ? '/blog/' : `/blog/page/${page}/`;
}
