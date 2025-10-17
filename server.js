import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import compression from 'compression';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Enable compression
app.use(compression());

// Set proper headers for SEO
app.use((req, res, next) => {
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('X-Frame-Options', 'SAMEORIGIN');
  res.header('X-XSS-Protection', '1; mode=block');
  next();
});

// Serve static files with cache headers
app.use(express.static(join(__dirname, 'dist'), {
  maxAge: '1d',
  etag: false
}));

// Serve index.html for all routes (SPA routing)
app.get('*', (req, res) => {
  res.set('Cache-Control', 'public, max-age=0, must-revalidate');
  res.sendFile(join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      res.status(500).send('Server error');
      console.error('Error serving index.html:', err);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});