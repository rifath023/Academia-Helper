import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Academia Helper" />
        <meta property="og:type" content="website" />
        {/* Netlify Identity Widget */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Netlify Identity redirect script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `
        }} />
      </body>
    </Html>
  );
}
