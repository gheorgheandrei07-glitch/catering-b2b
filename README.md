# Mâncărescu — site de catering B2B

Site static, fără JavaScript, optimizat SEO, pentru o firmă de catering care vinde către companii (prânz pentru angajați, coffee break, evenimente corporate).

- Conținutul și paginile: `src/pages/*.mjs`; datele firmei (nume, telefon, e-mail, URL, zone): `src/site.mjs`.
- `npm run build` generează HTML-ul final în `docs/` (servit de GitHub Pages), plus `sitemap.xml`, `robots.txt`, `llms.txt` și `404.html`.
- `npm run preview` pornește un server local pe http://localhost:4322.

SEO inclus: un singur H1 și un termen de căutare per pagină, prima propoziție răspunde direct la întrebare, canonical, Open Graph, JSON-LD (`FoodEstablishment`, `Service` cu prețuri, `Menu`, `FAQPage`, `Article`, `BreadcrumbList`), sitemap și llms.txt.

Înainte de lansare: înlocuiește valorile marcate `PLACEHOLDER` în `src/site.mjs`, cifrele din secțiunea de statistici de pe prima pagină și prețurile, apoi schimbă `url` pe domeniul propriu și rulează `npm run build`.
