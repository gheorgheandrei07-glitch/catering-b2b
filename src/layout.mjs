import { site, nav } from "./site.mjs";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const logoSvg = `<svg class="logo-mark" viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="17" fill="none" stroke="#b48f58" stroke-width="1"/><path d="M9 21.5h18a9 9 0 0 0-18 0Z" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M7 24.5h22" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="18" cy="11" r="1.4" fill="#b48f58"/></svg>`;

// Fotografii Unsplash (licență gratuită, uz comercial permis), servite de CDN-ul lor în AVIF/WebP la dimensiunea potrivită.
export const photos = {
  chef: "1763376360111-3597e5877517",
  garnish: "1775497950071-965cf9e20b2f",
  sauce: "1663530761401-15eefb544889",
  bowl: "1626711934535-9749ea30dba8",
  salad: "1667499823726-f2c6fc321b66",
  coffee: "1515823662972-da6a2e4d3002",
  pastry: "1528699633788-424224dc89b5",
  table: "1536392706976-e486e2ba97af",
  candles: "1562050344-f7ad946cee35",
  bruschetta: "1761315414017-04c3906359d1",
  canapes: "1771154136172-0633db70b7dc",
  buffet: "1555244162-803834f70033",
  boxes: "1672826979217-7156a305acf5",
  salmon: "1467003909585-2f8a72700288",
  plate: "1414235077428-338989a2e8c0",
};

export function photo(key, alt, { sizes = "100vw", eager = false, max = 2000 } = {}) {
  const base = `https://images.unsplash.com/photo-${photos[key]}?auto=format&fit=crop&q=72`;
  const widths = [480, 800, 1200, 1600, 2000].filter((w) => w <= max);
  return `<img src="${base}&w=${widths.at(-1) >= 1200 ? 1200 : widths.at(-1)}" srcset="${widths.map((w) => `${base}&w=${w} ${w}w`).join(", ")}" sizes="${sizes}" alt="${esc(alt)}" width="1200" height="800" decoding="async"${eager ? ' fetchpriority="high"' : ' loading="lazy"'}>`;
}

// Antet cu fotografie pe fundal, folosit de toate paginile interioare.
export function pageHero({ crumbs, eyebrow, title, lead, actions = "", image, alt }) {
  return `
    <header class="photo-hero">
      ${photo(image, alt, { eager: true })}
      <div class="wrap">
        ${crumbs}
        ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ""}
        <h1>${title}</h1>
        ${lead ? `<p class="lead">${lead}</p>` : ""}
        ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
      </div>
    </header>`;
}

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
  if (page.path === "") {
    graph.unshift(businessJsonLd(), {
      "@type": "WebSite",
      "@id": site.url + "#website",
      url: site.url,
      name: site.name,
      inLanguage: "ro",
      publisher: { "@id": site.url + "#business" },
    });
  }

  const navLinks = nav
    .map((n) => `<a href="${p}${n.href}"${n.href === page.path ? ' aria-current="page"' : ""}>${n.label}</a>`)
    .join("\n          ");

  const crumbsHtml =
    crumbs.length > 1
      ? `<nav class="crumbs" aria-label="Breadcrumb">${crumbs
          .map((c, i) => (i === crumbs.length - 1 ? `<span aria-current="page">${c.name}</span>` : `<a href="${p}${c.path}">${c.name}</a>`))
          .join(" &nbsp;/&nbsp; ")}</nav>`
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
  <meta property="og:image" content="https://images.unsplash.com/photo-${photos[page.ogImage || "chef"]}?auto=format&fit=crop&w=1200&h=630&q=75">
  <meta name="theme-color" content="#13110e">
  <link rel="icon" href="${p}assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600;700&display=swap"></noscript>
  <link rel="stylesheet" href="${p}assets/style.css">
${graph.length ? `  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>\n` : ""}</head>
<body>
  <a class="skip" href="#continut">Sari la conținut</a>
  <div class="site-header">
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
  </div>

  <main id="continut">
${page.body(p, crumbsHtml)}
  </main>

  <footer class="site-footer">
    <div class="wrap">
      <p class="footer-brand">Mâncare bună, la ora stabilită, <em>pentru echipa ta.</em></p>
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
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} ${site.legalName}</span><span>Prețuri fără TVA, pentru persoane juridice.</span></div>
    </div>
  </footer>
${page.path === "contact/" ? "" : stickyCta(p)}
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
    logo: site.url + "assets/favicon.svg",
    image: `https://images.unsplash.com/photo-${photos.chef}?auto=format&fit=crop&w=1200&q=75`,
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

export function faqSection(items, title = "Întrebări frecvente") {
  return `
    <section class="section-alt"><div class="wrap faq-layout">
      <div><span class="eyebrow">Întrebări</span><h2>${title}</h2></div>
      ${faqHtml(items)}
    </div></section>`;
}

export const ctaBand = (p, title = "Primești oferta în <em>aceeași zi</em> lucrătoare", text = "Spune-ne câte persoane, ce dată și ce buget ai. Răspundem cu un meniu și un preț final, fără costuri ascunse.", image = "candles") => `
    <section class="cta-photo">
      ${photo(image, "")}
      <div class="wrap">
        <span class="eyebrow">Cere ofertă</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <div class="hero-actions" style="justify-content:center">
          <a class="btn btn-light" href="${p}contact/">Cere ofertă</a>
          <a class="btn btn-ghost" href="${p}#calculator">Calculează prețul</a>
        </div>
      </div>
    </section>`;

// Calculator de preț: estimare instantă din prețurile de listă, cu link spre formular precompletat.
const calcOptions = [
  ["Prânz pentru angajați", [["Prânz — meniu standard", 35, 10, true], ["Prânz — meniu complet", 45, 10, true]]],
  ["Coffee break", [["Coffee break Simplu", 28, 15], ["Coffee break Business", 42, 15], ["Coffee break Conferință", 65, 15]]],
  ["Finger food", [["Platou rece clasic", 55, 15], ["Platou mixt cald-rece", 72, 15], ["Platou vegetarian", 58, 15]]],
  ["Eveniment corporate", [["Bufet cald", 95, 20, false, true], ["Grătar & street food", 85, 20, false, true], ["Cină servită la masă", 140, 20, false, true]]],
];
const lei = (n) => `${n.toLocaleString("ro-RO")} lei`;

export function calculator(p) {
  const options = calcOptions
    .map(([service, items]) => `<optgroup label="${service}">${items
      .map(([name, price, min, daily, from]) => `<option value="${price}" data-s="${service}" data-name="${name}" data-min="${min}"${daily ? " data-daily" : ""}${from ? " data-from" : ""}>${name} · ${from ? "de la " : ""}${price} lei</option>`)
      .join("")}</optgroup>`)
    .join("");
  const base = `${p}contact/`;
  return `
    <section id="calculator" class="section-dark"><div class="wrap calc">
      <div>
        <span class="eyebrow">Calculator</span>
        <h2>Cât te costă, <em>în zece secunde</em></h2>
        <p>Alege formatul și numărul de persoane. Estimarea folosește prețurile de listă, fără TVA; oferta finală, cu meniul propus, o primești în aceeași zi lucrătoare.</p>
        <ul class="calc-points">
          <li>Livrare gratuită în București peste 500 lei fără TVA</li>
          <li>Plătești doar porțiile livrate</li>
          <li>Factură pe firmă, per livrare sau lunară</li>
        </ul>
      </div>
      <form class="calc-form" data-calc onsubmit="return false">
        <div><label for="calc-pachet">Ce comanzi</label><select id="calc-pachet" name="pachet">${options}</select></div>
        <div class="row">
          <div><label for="calc-pers">Persoane</label><input id="calc-pers" name="pers" type="number" min="1" max="2000" value="20" inputmode="numeric"></div>
          <div data-days><label for="calc-zile">Zile pe lună</label><input id="calc-zile" name="zile" type="number" min="1" max="23" value="21" inputmode="numeric"></div>
        </div>
        <output class="calc-result" for="calc-pachet calc-pers calc-zile" aria-live="polite"><span class="calc-total">${lei(35 * 20 * 21)}</span><span class="calc-note">pe lună, 21 de zile · 35 lei de persoană, fără TVA</span></output>
        <a class="btn btn-light" data-base="${base}" href="${base}">Cere oferta pentru această estimare</a>
      </form>
    </div></section>
    <script>
document.querySelectorAll("[data-calc]").forEach(function(f){var s=f.querySelector("select"),pe=f.elements.pers,z=f.elements.zile,dw=f.querySelector("[data-days]"),t=f.querySelector(".calc-total"),n=f.querySelector(".calc-note"),a=f.querySelector("a"),fmt=function(x){return x.toLocaleString("ro-RO")+" lei"};
function run(){var o=s.selectedOptions[0],d=o.dataset,pr=+o.value,P=Math.max(1,Math.round(+pe.value||1)),D=Math.min(23,Math.max(1,Math.round(+z.value||1))),daily="daily" in d,tot=pr*P*(daily?D:1),min=+d.min;dw.hidden=!daily;
t.textContent=("from" in d?"de la ":"")+fmt(tot);n.textContent=(daily?"pe lună, "+D+(D>19?" de":"")+" zile · ":"pe comandă · ")+pr+" lei de persoană, fără TVA"+(P<min?" · comanda minimă: "+min+" persoane":"");
a.href=a.dataset.base+"?"+new URLSearchParams({serviciu:d.s,persoane:P,detalii:"Estimare din calculator: "+d.name+", "+P+" persoane"+(daily?", "+D+" zile pe lună":"")+", "+("from" in d?"":"aproximativ ")+t.textContent+" fără TVA."})}
f.addEventListener("input",run);run()});
    </script>`;
}

export const stickyCta = (p) => `
  <div class="sticky-cta" aria-label="Acțiuni rapide">
    <a href="${p}#calculator">Calculează prețul</a>
    <a class="primary" href="${p}contact/">Cere ofertă</a>
  </div>`;
