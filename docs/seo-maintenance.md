# SEO maintenance

`npm run build` regenerates the article index and sitemap, validates the source,
exports the site, and checks every exported page and internal article link.
It fails if an article is missing from the sitemap or cannot be reached from
the homepage through HTML links.

## Adding an article

1. Add its HTML file to `blog-posts/`, using a lowercase, hyphenated filename.
2. Set a truthful `datePublished` on the Article or BlogPosting JSON-LD object.
   Set `dateModified` only when the article is actually updated.
3. Link to existing articles using `/blog/slug/` URLs. Replace template links
   before committing. The build rejects missing destinations.
4. Run `npm run build` and commit the source plus the regenerated
   `blog-posts/index.json` and `public/sitemap.xml`.

An article with no reliable publication date is displayed without a date.
The generator never substitutes the build date. Existing sitemap modification
dates are preserved unless the article supplies a later recorded date.

The blog renders twelve articles per page. Pagination uses exported routes
(`/blog/`, `/blog/page/2/`, etc.), with a self-referencing canonical on each page.
Search and category filters still cover all articles.

## Hosting and redirects

The production deployment is a Next.js static export. All internal article
links, sitemap entries, and canonical tags use the HTTPS www URL with a trailing
slash. The application does not claim to send HTTP redirects on a static host.

Render can serve the same exported resource at both slash and slashless URLs,
and at its explicit `index.html` path. Canonical tags consolidate those aliases.
Next.js `redirects()` and changes to `server.js` do not run on Render Static Sites.
Render's documented redirect rules also do not override an existing resource.

If HTTP 301 redirects for these aliases are required, configure them at a
hosting/proxy layer that can run redirects before static-file resolution, then
verify the actual responses and check for redirect loops. Do not add a broad
rewrite to `/index.html`, which would turn missing articles into soft 404s.

References:

- https://render.com/docs/redirects-rewrites
- https://nextjs.org/docs/pages/guides/static-exports
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

## After deployment

- Confirm `/robots.txt` names `https://www.academiahelper.com/sitemap.xml`.
- Confirm `/blog/` and a later index page contain article links in their HTML.
- Check representative new and old articles and a genuinely missing URL.
- Use Search Console URL Inspection to check Google's selected canonical and
  indexing status. A successful deployment or sitemap submission does not
  guarantee immediate indexing.
