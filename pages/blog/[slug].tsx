import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Script from 'next/script';
import type { GetStaticProps, GetStaticPaths } from 'next';
import postsData from '../../blog-posts/index.json';

interface HtmlAttributes {
  [key: string]: string;
}

interface Props {
  title: string;
  metaTags: HtmlAttributes[];
  linkTags: HtmlAttributes[];
  styles: string[];
  jsonLdScripts: string[];
  bodyContent: string;
  bodyScripts: string[];
  slug: string;
}

function parseAttributes(tag: string): HtmlAttributes {
  const attrs: HtmlAttributes = {};

  const regex = /([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;

  let match;

  while ((match = regex.exec(tag)) !== null) {
    attrs[match[1]] = match[2] ?? match[3] ?? '';
  }

  return attrs;
}

function reactAttributes(attrs: HtmlAttributes) {
  const result: Record<string, string> = {};

  Object.entries(attrs).forEach(([key, value]) => {
    if (key.toLowerCase() === 'charset') {
      result.charSet = value;
    } else if (key.toLowerCase() === 'crossorigin') {
      result.crossOrigin = value;
    } else {
      result[key] = value;
    }
  });

  return result;
}

export default function BlogPost({
  title,
  metaTags,
  linkTags,
  styles,
  jsonLdScripts,
  bodyContent,
  bodyScripts,
  slug,
}: Props) {
  const canonicalUrl =
    `https://www.academiahelper.com/blog/${slug}/`;

  return (
    <>
      <Head>
        <title>{title}</title>

        {metaTags.map((attrs, index) => (
          <meta
            key={`meta-${index}`}
            {...(reactAttributes(attrs) as any)}
          />
        ))}

        {linkTags
          .filter(
            (attrs) =>
              attrs.rel?.toLowerCase() !== 'canonical'
          )
          .map((attrs, index) => (
            <link
              key={`link-${index}`}
              {...(reactAttributes(attrs) as any)}
            />
          ))}

        {/* One clean self-referencing canonical */}
        <link
          rel="canonical"
          href={canonicalUrl}
        />

        {styles.map((css, index) => (
          <style
            key={`style-${index}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}

        {jsonLdScripts.map((json, index) => (
          <script
            key={`jsonld-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: json }}
          />
        ))}
      </Head>

      <div
        dangerouslySetInnerHTML={{
          __html: bodyContent,
        }}
      />

      {bodyScripts.map((script, index) => (
        <Script
          key={`script-${index}`}
          id={`blog-script-${slug}-${index}`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: script,
          }}
        />
      ))}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postsData.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}) => {
  const slug = params?.slug as string;

  const filePath = path.join(
    process.cwd(),
    'blog-posts',
    `${slug}.html`
  );

  const htmlContent = fs.readFileSync(
    filePath,
    'utf-8'
  );

  /* -------------------------
     Extract HEAD
  ------------------------- */

  const headMatch = htmlContent.match(
    /<head[^>]*>([\s\S]*?)<\/head>/i
  );

  if (!headMatch) {
    throw new Error(
      `No <head> found in ${slug}.html`
    );
  }

  const headContent = headMatch[1];

  /* Title */

  const titleMatch = headContent.match(
    /<title[^>]*>([\s\S]*?)<\/title>/i
  );

  const title = titleMatch
    ? titleMatch[1].trim()
    : 'Academia Helper';

  /* Meta tags */

  const metaMatches =
    headContent.match(/<meta\b[^>]*>/gi) || [];

  const metaTags = metaMatches
    .map(parseAttributes)

    // Next.js already supplies charset/viewport.
    // Avoid duplicate versions.
    .filter((attrs) => {
      if (attrs.charset) {
        return false;
      }

      if (
        attrs.name?.toLowerCase() ===
        'viewport'
      ) {
        return false;
      }

      return true;
    });

  /* Link tags */

  const linkMatches =
    headContent.match(/<link\b[^>]*>/gi) || [];

  const linkTags =
    linkMatches.map(parseAttributes);

  /* CSS */

  const styles = Array.from(
    headContent.matchAll(
      /<style\b[^>]*>([\s\S]*?)<\/style>/gi
    )
  ).map((match) => match[1]);

  /* JSON-LD */

  const jsonLdScripts = Array.from(
    headContent.matchAll(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
    )
  ).map((match) => match[1].trim());

  /* -------------------------
     Extract BODY
  ------------------------- */

  const bodyMatch = htmlContent.match(
    /<body[^>]*>([\s\S]*?)<\/body>/i
  );

  if (!bodyMatch) {
    throw new Error(
      `No <body> found in ${slug}.html`
    );
  }

  const rawBody = bodyMatch[1];

  /* Extract scripts from body */

  const bodyScripts = Array.from(
    rawBody.matchAll(
      /<script\b[^>]*>([\s\S]*?)<\/script>/gi
    )
  ).map((match) => match[1].trim());

  /* Remove scripts from raw HTML,
     because Next Script will execute them */
  const bodyContent = rawBody.replace(
    /<script\b[^>]*>[\s\S]*?<\/script>/gi,
    ''
  );

  return {
    props: {
      title,
      metaTags,
      linkTags,
      styles,
      jsonLdScripts,
      bodyContent,
      bodyScripts,
      slug,
    },
  };
};