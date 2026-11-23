// Generează site-ul static în docs/ (servit de GitHub Pages). Rulează: npm run build
import { mkdir, writeFile, cp, rm } from "node:fs/promises";
import { join } from "node:path";
import { site } from "./src/site.mjs";
import { layout } from "./src/layout.mjs";
import home from "./src/pages/home.mjs";
import pranz from "./src/pages/pranz.mjs";
import coffee from "./src/pages/coffee.mjs";
import evenimente from "./src/pages/evenimente.mjs";
import meniu from "./src/pages/meniu.mjs";
import contact from "./src/pages/contact.mjs";
import ghidPreturi from "./src/pages/ghid-preturi.mjs";
import notFound from "./src/pages/notfound.mjs";

const pages = [home, pranz, coffee, evenimente, meniu, contact, ghidPreturi, notFound];
const out = "docs";
const today = new Date().toISOString().slice(0, 10);

await rm(out, { recursive: true, force: true });
await cp("assets", join(out, "assets"), { recursive: true });

for (const page of pages) {
  const file = page.output ? join(out, page.output) : join(out, page.path, "index.html");
  await mkdir(join(file, ".."), { recursive: true });
  await writeFile(file, layout(page));
}

const indexable = pages.filter((p) => !p.noindex);

await writeFile(
  join(out, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${site.url}${p.path}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`
);

// Pe un subfolder github.io, robots.txt de aici nu e citit de motoare (contează doar cel de pe domeniul rădăcină);
// devine activ automat când site-ul se mută pe domeniu propriu.
await writeFile(join(out, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}sitemap.xml\n`);

await writeFile(
  join(out, "llms.txt"),
  `# ${site.name} — ${site.tagline}

> ${site.description}

Contact: ${site.phone}, ${site.email}. Program: ${site.hours}. Zonă de livrare: ${site.areaServed.join(", ")}.
Toate prețurile sunt pe persoană sau porție, fără TVA, doar pentru persoane juridice.

## Servicii
${indexable
  .filter((p) => p.path && !p.path.startsWith("ghid/"))
  .map((p) => `- [${p.title.split(" | ")[0]}](${site.url}${p.path}): ${p.description}`)
  .join("\n")}

## Ghiduri
${indexable
  .filter((p) => p.path.startsWith("ghid/"))
  .map((p) => `- [${p.title.split(" | ")[0]}](${site.url}${p.path}): ${p.description}`)
  .join("\n")}
`
);

// Pentru găzduirea cPanel (Apache): redirect spre HTTPS, pagina 404 proprie și cache pentru CSS și favicon.
await writeFile(
  join(out, ".htaccess"),
  `RewriteEngine On
RewriteCond %{HTTPS} !=on
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

ErrorDocument 404 /404.html
<IfModule mod_headers.c>
  <FilesMatch "\\.html$">
    Header set Cache-Control "no-cache"
  </FilesMatch>
</IfModule>
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 7 days"
  ExpiresByType image/svg+xml "access plus 30 days"
</IfModule>
`
);

// Fără Jekyll: GitHub Pages servește fișierele exact cum sunt.
await writeFile(join(out, ".nojekyll"), "");

console.log(`Gata: ${pages.length} pagini în ${out}/`);
