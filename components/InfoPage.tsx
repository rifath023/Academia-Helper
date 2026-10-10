import Head from 'next/head';
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

const SITE = 'https://www.academiahelper.com';

interface Props {
  path: string; // e.g. '/about/'
  title: string;
  description: string;
  h1: string;
  intro?: string;
  jsonLd?: object[];
  children: React.ReactNode;
}

export function InfoPage({ path, title, description, h1, intro, jsonLd = [], children }: Props) {
  const canonical = `${SITE}${path}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        {jsonLd.map((o, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />
        ))}
      </Head>
      <div className="min-h-screen bg-white text-stone-900">
        <Header />
        <main className="pt-28 pb-16 px-6 bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">{h1}</h1>
            {intro && <p className="text-lg text-stone-700 mb-8">{intro}</p>}
            <div className="site-content space-y-4 text-stone-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-stone-900 [&_h2]:mt-10 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-amber-800 [&_a]:underline [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:p-2 [&_th]:bg-stone-100 [&_td]:p-2 [&_td]:border-t [&_td]:border-stone-200 [&_input]:border [&_input]:border-stone-300 [&_input]:rounded-lg [&_input]:px-3 [&_input]:py-2 [&_select]:border [&_select]:border-stone-300 [&_select]:rounded-lg [&_select]:px-3 [&_select]:py-2 [&_button]:bg-stone-800 [&_button]:text-white [&_button]:rounded-lg [&_button]:px-4 [&_button]:py-2">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Academia Helper',
  url: `${SITE}/`,
  logo: `${SITE}/logo.png`,
  email: 'academiahelp0@gmail.com',
};
