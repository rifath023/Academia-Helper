import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import type { GetStaticProps, GetStaticPaths } from 'next';
import postsData from '../../blog-posts/index.json';

interface Props {
  htmlContent: string;
  slug: string;
}

export default function BlogPost({ htmlContent, slug }: Props) {
  const canonicalUrl = `https://www.academiahelper.com/blog/${slug}/`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postsData.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const filePath = path.join(
    process.cwd(),
    'blog-posts',
    `${slug}.html`
  );

  const htmlContent = fs.readFileSync(filePath, 'utf-8');

  return {
    props: {
      htmlContent,
      slug,
    },
  };
};