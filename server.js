const express = require('express');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/blog/:slug', (req, res) => {
    const filePath = path.join(__dirname, 'blog-posts', `${req.params.slug}.html`);
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      // not a static post — pass to Next.js (e.g. /blog/ listing page)
      handle(req, res);
    }
  });

  server.all('*', (req, res) => handle(req, res));

  server.listen(process.env.PORT || 3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
});