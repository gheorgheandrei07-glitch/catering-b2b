import { site, nav } from "./site.mjs";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const logoSvg = `<svg class="logo-mark" viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="17" fill="#1f4a34"/><path d="M8 21h20a10 10 0 0 0-20 0Z" fill="#faf6ef"/><rect x="6" y="22.5" width="24" height="2.4" rx="1.2" fill="#c2562b"/><circle cx="18" cy="10" r="1.6" fill="#faf6ef"/></svg>`;

// prefix = drumul relativ către rădăcina site-ului ("", "../", "../../") ca linkurile să meargă și pe subfolderul GitHub Pages.
export function layout(page) {
  const p = page.absolute ? site.url : "../".repeat(page.path.split("/").filter(Boolean).length);
  const canonical = site.url + page.path;
  const crumbs = [{ name: "Acasă", path: "" }, ...(page.breadcrumbs || [])];

  const graph = [];
  if (crumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: site.url + c.path })),
    });
  }
  if (page.jsonLd) graph.push(...page.jsonLd);
  if (page.path === "") graph.unshift(businessJsonLd());

  const navLinks = nav
    .map((n) => `<a href="${p}${n.href}"${n.href === page.path ? ' aria-current="page"' : ""}>${n.label}</a>`)
    .join("\n          ");

  const crumbsHtml =
    crumbs.length > 1
      ? `<nav class="crumbs" aria-label="Breadcrumb">${crumbs
          .map((c, i) => (i === crumbs.length - 1 ? `<span aria-current="page">${c.name}</span>` : `<a href="${p}${c.path}">${c.name}</a>`))
          .join(" / ")}</nav>`
      : "";

  return `<!doctype html>
<html lang="ro">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  ${page.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">`}
  <meta property="og:type" content="${page.ogType || "website"}">
  <meta property="og:locale" content="ro_RO">
  <meta property="og:site_name" content="${site.name} — ${site.tagline}">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta name="theme-color" content="#1f4a34">
  <link rel="icon" href="${p}assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${p}assets/style.css">
${graph.length ? `  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>\n` : ""}</head>
<body>
  <a class="skip" href="#continut">Sari la conținut</a>
  <header class="site-header">
    <div class="wrap">
      <a class="logo" href="${p || "./"}">${logoSvg}<span>${site.name}<small>${site.tagline}</small></span></a>
      <nav class="nav" aria-label="Principal">
          ${navLinks}
          <a class="btn" href="${p}contact/">Cere ofertă</a>
      </nav>
      <details class="nav-mobile">
        <summary>Meniu</summary>
        <nav class="nav" aria-label="Principal (mobil)">
          ${navLinks}
          <a class="btn" href="${p}contact/">Cere ofertă</a>
        </nav>
      </details>
    </div>
  </header>

  <main id="continut">
${page.body(p, crumbsHtml)}
  </main>

  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <h2>${site.name} — ${site.tagline}</h2>
          <p>${site.description}</p>
        </div>
        <div>
          <h2>Servicii</h2>
          <ul>
            <li><a href="${p}pranz-angajati/">Prânz pentru angajați</a></li>
            <li><a href="${p}coffee-break/">Coffee break</a></li>
            <li><a href="${p}catering-evenimente-corporate/">Evenimente corporate</a></li>
            <li><a href="${p}meniu/">Meniu și prețuri</a></li>
          </ul>
        </div>
        <div>
          <h2>Resurse</h2>
          <ul>
            <li><a href="${p}ghid/cat-costa-catering-pentru-firme/">Cât costă cateringul pentru firme</a></li>
            <li><a href="${p}contact/">Cere ofertă</a></li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li><a href="tel:${site.phoneHref}">${site.phone}</a></li>
            <li><a href="mailto:${site.email}">${site.email}</a></li>
            <li>${site.hours}</li>
            <li>Livrăm în ${site.areaServed.join(", ")}</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">© ${new Date().getFullYear()} ${site.legalName}. Toate prețurile sunt fără TVA, pentru persoane juridice.</div>
    </div>
  </footer>
</body>
</html>
`;
}

export function businessJsonLd() {
  return {
    "@type": "FoodEstablishment",
    "@id": site.url + "#business",
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "35–180 lei / persoană",
    servesCuisine: ["Românească", "Mediteraneană", "Vegetariană"],
    address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.region, addressCountry: "RO" },
    areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
    openingHours: site.hoursSchema,
    paymentAccepted: "Transfer bancar, factură",
    knowsLanguage: ["ro", "en"],
  };
}

export function serviceJsonLd({ name, description, path, offers }) {
  return {
    "@type": "Service",
    name,
    description,
    serviceType: "Catering",
    url: site.url + path,
    provider: { "@id": site.url + "#business" },
    areaServed: site.areaServed.map((n) => ({ "@type": "City", name: n })),
    audience: { "@type": "BusinessAudience", name: "Companii" },
    ...(offers ? { offers: offers.map((o) => ({ "@type": "Offer", name: o.name, priceCurrency: "RON", price: o.price, priceSpecification: { "@type": "UnitPriceSpecification", price: o.price, priceCurrency: "RON", unitText: o.unit, valueAddedTaxIncluded: false } })) } : {}),
  };
}

// FAQ: același conținut alimentează HTML-ul și JSON-LD-ul, ca să nu difere.
export function faqHtml(items) {
  return `<div class="faq">${items
    .map((f) => `<details><summary>${f.q}</summary><div><p>${f.a}</p></div></details>`)
    .join("")}</div>`;
}
export function faqJsonLd(items) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") } })),
  };
}

export const ctaBand = (p, title = "Primești oferta în aceeași zi lucrătoare", text = "Spune-ne câte persoane, ce dată și ce buget ai. Răspundem cu un meniu și un preț final, fără costuri ascunse.") => `
    <section><div class="wrap">
      <div class="cta-band">
        <div><h2>${title}</h2><p>${text}</p></div>
        <a class="btn" href="${p}contact/">Cere ofertă</a>
      </div>
    </div></section>`;
