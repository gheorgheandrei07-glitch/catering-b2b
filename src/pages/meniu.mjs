import { site } from "../site.mjs";
import { ctaBand, pageHero, photo } from "../layout.mjs";

const path = "meniu/";
const item = (dish, note, price, tag = "") => `<li><span class="dish">${dish}${tag ? `<span class="tag">${tag}</span>` : ""}<span class="note">${note}</span></span><span class="p">${price}</span></li>`;

const sections = [
  {
    id: "pranz", img: "salad", alt: "Boluri de prânz cu legume și orez", name: "Prânz zilnic — exemplu de săptămână", items: [
      ["Luni: Piept de pui la grătar, orez cu legume", "Ciorbă de legume · desert: mere coapte", "35 / 45 lei"],
      ["Marți: Tocăniță de vită cu mămăliguță", "Supă cremă de dovleac · desert: clătite cu brânză", "35 / 45 lei"],
      ["Miercuri: File de somon, cartofi noi cu mărar", "Ciorbă de perișoare · desert: fructe", "39 / 49 lei"],
      ["Joi: Risotto cu ciuperci și parmezan", "Supă cremă de linte · desert: tiramisu", "35 / 45 lei", "vegetarian"],
      ["Vineri: Bowl cu falafel, hummus și legume coapte", "Gazpacho · desert: biscuiți cu ovăz", "35 / 45 lei", "vegan"],
    ],
    note: "Preț meniu standard / meniu complet, pe porție, fără TVA.",
  },
  {
    id: "coffee-break", img: "pastry", alt: "Patiserie și cafea pentru coffee break", name: "Coffee break", items: [
      ["Simplu", "Cafea, ceai, apă, mini-croissante, biscuiți", "28 lei"],
      ["Business", "Simplu + mini-sandvișuri, fructe tăiate, fresh", "42 lei"],
      ["Conferință", "Două pauze, patiserie sărată și dulce, iaurt cu granola", "65 lei"],
    ],
    note: "Pe persoană, fără TVA, minimum 15 persoane.",
  },
  {
    id: "finger-food", img: "canapes", alt: "Platou cu aperitive pentru recepție", name: "Finger food", items: [
      ["Platou rece clasic", "Mini-tartine, rulouri cu somon, frigărui caprese, brânzeturi — 8 bucăți / persoană", "55 lei"],
      ["Platou mixt cald-rece", "Rece clasic + mini-quiche, chiftele, pui crocant — 12 bucăți / persoană", "72 lei"],
      ["Platou vegetarian", "Hummus, falafel, legume la grătar, mini-bruschete — 10 bucăți / persoană", "58 lei", "vegetarian"],
      ["Platou dulce", "Mini-eclere, tarte cu fructe, macarons — 4 bucăți / persoană", "22 lei"],
    ],
    note: "Pe persoană, fără TVA, minimum 15 persoane.",
  },
  {
    id: "evenimente", img: "sauce", alt: "Porție servită la masă la un eveniment corporate", name: "Evenimente corporate", items: [
      ["Bufet cald", "2 aperitive, 3 feluri principale, 2 garnituri, salate, desert", "de la 95 lei"],
      ["Grătar & street food", "Stații live: grătar, burgeri, wrap-uri, deserturi", "de la 85 lei"],
      ["Cină servită la masă", "4 feluri, servire la masă, personal dedicat", "de la 140 lei"],
    ],
    note: "Pe persoană, fără TVA, cu personal și veselă.",
  },
];

export default {
  path,
  title: `Meniu catering pentru firme și prețuri 2026 | ${site.name}`,
  description: "Meniul și prețurile Platou pentru firme: prânz zilnic de la 35 lei, coffee break de la 28 lei, finger food de la 55 lei și evenimente de la 95 lei pe persoană, fără TVA.",
  ogImage: "bruschetta",
  breadcrumbs: [{ name: "Meniu și prețuri", path }],
  jsonLd: [
    {
      "@type": "Menu",
      name: "Meniu catering pentru firme",
      url: site.url + path,
      inLanguage: "ro",
      hasMenuSection: sections.map((s) => ({
        "@type": "MenuSection",
        name: s.name,
        hasMenuItem: s.items.map(([name, description, price]) => ({
          "@type": "MenuItem",
          name,
          description,
          offers: { "@type": "Offer", price: price.match(/\d+/)[0], priceCurrency: "RON" },
        })),
      })),
    },
  ],
  body: (p, crumbs) => `
${pageHero({
  crumbs,
  image: "bruschetta",
  alt: "Bruschete asortate pe un platou de marmură",
  eyebrow: "Meniu 2026",
  title: "Meniu și prețuri <em>pentru firme</em>",
  lead: "Prețurile Platou pornesc de la 35 lei pe porție pentru prânz, 28 lei de persoană pentru coffee break și 95 lei de persoană pentru evenimente, fără TVA. Mai jos găsești exemple de meniu; oferta finală o primești personalizată.",
})}
${sections
  .map(
    (s, i) => `
    <section id="${s.id}"${i % 2 ? ' class="section-alt"' : ""}><div class="wrap menu-block">
      <div class="feature-media">${photo(s.img, s.alt, { sizes: "(max-width: 860px) 100vw, 40vw", max: 1200 })}</div>
      <div>
        <span class="eyebrow">0${i + 1}</span>
        <h2>${s.name}</h2>
        <ul class="menu-list">${s.items.map((it) => item(...it)).join("")}</ul>
        <p class="hint" style="margin-top:16px">${s.note}</p>
      </div>
    </div></section>`
  )
  .join("")}
    <section style="padding-top:0"><div class="wrap">
      <p class="hint">Toate preparatele sunt etichetate cu alergenii principali (Regulamentul UE 1169/2011). Lista completă de alergeni și valori nutriționale o trimitem odată cu oferta.</p>
    </div></section>
${ctaBand(p, "Vrei un meniu <em>adaptat echipei</em> tale?", "Spune-ne bugetul și preferințele; propunem un meniu pe săptămână sau pe eveniment.", "garnish")}`,
};
