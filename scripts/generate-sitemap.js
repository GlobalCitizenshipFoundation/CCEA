import fs from 'fs/promises';
import path from 'path';

async function readJSON(filePath) {
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

async function getSlugs(dir) {
  const entries = await fs.readdir(dir);
  const slugs = [];
  for (const entry of entries) {
    if (!entry.endsWith('.json')) continue;
    const fullPath = path.join(dir, entry);
    const json = await readJSON(fullPath).catch(() => ({}));
    const slug = json.slug || path.basename(entry, '.json');
    slugs.push(slug);
  }
  return slugs;
}

async function main() {
  const config = await readJSON(path.join('content', 'config.json'));
  const baseUrl = config.site?.baseUrl?.replace(/\/$/, '') || '';

  const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/articles',
    '/events',
    '/resources',
    '/members',
    '/team',
    '/membership',
    '/membership/individual',
    '/membership/institutional',
    '/governance',
    '/governance-charter',
    '/brand-guidelines',
    '/impressum'
  ];

  const routes = [...staticRoutes];

  const articleSlugs = await getSlugs(path.join('content', 'articles'));
  routes.push(...articleSlugs.map((s) => `/articles/${s}`));

  const eventSlugs = await getSlugs(path.join('content', 'events'));
  routes.push(...eventSlugs.flatMap((s) => [`/events/${s}`, `/event-registration/${s}`]));

  const resourceSlugs = await getSlugs(path.join('content', 'resources'));
  routes.push(...resourceSlugs.map((s) => `/resources/${s}`));

  const memberSlugs = await getSlugs(path.join('content', 'members'));
  routes.push(...memberSlugs.map((s) => `/members/${s}`));

  const teamSlugs = await getSlugs(path.join('content', 'team'));
  routes.push(...teamSlugs.map((s) => `/team/${s}`));

  const governanceSlugs = await getSlugs(path.join('content', 'governance'));
  routes.push(...governanceSlugs.map((s) => `/governance/${s}`));

  const xmlEntries = routes
    .map((route) => `  <url><loc>${baseUrl}${route}</loc></url>`) 
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlEntries}\n</urlset>\n`;

  await fs.mkdir('public', { recursive: true });
  await fs.writeFile(path.join('public', 'sitemap.xml'), xml);

  // update robots.txt
  const robotsPath = path.join('public', 'robots.txt');
  let robots = '';
  try {
    robots = await fs.readFile(robotsPath, 'utf8');
  } catch {
    // ignore
  }
  const sitemapLine = `Sitemap: ${baseUrl}/sitemap.xml`;
  if (!robots.includes('Sitemap:')) {
    robots = robots.trim() + '\n' + sitemapLine + '\n';
  } else if (!robots.includes(sitemapLine)) {
    robots = robots.trim() + '\n' + sitemapLine + '\n';
  }
  await fs.writeFile(robotsPath, robots);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
