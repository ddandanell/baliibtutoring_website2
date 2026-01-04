import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://baliibtutoring.com';

// All static routes in the application
const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/pyp-tutoring', priority: '0.9', changefreq: 'monthly' },
    { path: '/myp-tutoring', priority: '0.9', changefreq: 'monthly' },
    { path: '/diploma-programme-tutoring', priority: '0.9', changefreq: 'monthly' },
    { path: '/locations', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog', priority: '0.7', changefreq: 'weekly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
];

function generateSitemap() {
    const today = new Date().toISOString().split('T')[0];
    
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `    <url>
        <loc>${baseUrl}${route.path}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`).join('\n')}
</urlset>`;

    return sitemapXml;
}

function generateRobotsTxt() {
    return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Disallow API routes if any exist in the future
Disallow: /api/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml
`;
}

// Generate and write files
const sitemap = generateSitemap();
const robots = generateRobotsTxt();

const publicDir = path.join(__dirname, '..', 'public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);

console.log('✅ sitemap.xml generated successfully');
console.log('✅ robots.txt generated successfully');
