import { site } from "../site.mjs";
import { faqHtml, faqJsonLd, ctaBand } from "../layout.mjs";

const icon = (d) => `<span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg></span>`;
const icons = {
  lunch: '<path d="M3 13h18a9 9 0 0 1-18 0Z"/><path d="M12 4v4M8 6v2M16 6v2"/>',
  coffee: '<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z"/><path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17M8 3v3M12 3v3"/>',
  event: '<path d="M8 21h8M12 15v6M6 3h12l-1 7a5 5 0 0 1-10 0Z"/>',
  finger: '<circle cx="7" cy="12" r="3"/><circle cx="17" cy="12" r="3"/><path d="M3 18h18"/>',
  invoice: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2Z"/><path d="M9 8h6M9 12h6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  leaf: '<path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15Z"/><path d="M5 19 13 11"/>',
  box: '<path d="M3 8l9-5 9 5v8l-9 5-9-5Z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
};

const faq = [
  { q: "Care este comanda minimă?", a: "Pentru prânzul zilnic livrăm de la 10 porții pe zi, iar pentru coffee break și evenimente de la 15 persoane. Sub aceste cantități îți facem o ofertă separată, cu taxa de livrare inclusă." },
  { q: "Emiteți factură pe firmă?", a: "Da. Lucrăm doar cu persoane juridice și emitem factură fiscală pentru fiecare livrare sau o factură centralizată lunară pentru abonamentele de prânz. Plata se face prin transfer bancar, cu termen de 15 zile pentru clienții cu contract." },
  { q: "Cu cât timp înainte trebuie să comand?", a: "Pentru prânz zilnic, până la ora 16:00 în ziua lucrătoare anterioară. Pentru coffee break, cu 48 de ore înainte. Pentru evenimente corporate de peste 50 de persoane, ideal cu 7–10 zile înainte, ca să putem programa degustarea și personalul." },
  { q: "Aveți meniuri vegetariene, vegane sau fără gluten?", a: "Da. Fiecare meniu zilnic are cel puțin o variantă vegetariană, iar la cerere pregătim porții vegane, fără gluten sau fără lactoză. Toate porțiile sunt etichetate cu alergenii principali, conform Regulamentului UE 1169/2011." },
  { q: "În ce zone livrați?", a: `Livrăm în tot ${site.city} și în ${site.areaServed.slice(1).join(", ")}. Livrarea este gratuită în București pentru comenzi de peste 500 lei fără TVA.` },
  { q: "Pot schimba numărul de porții după ce am comandat?", a: "Da, până la ora 10:00 în ziua livrării pentru prânz și cu 24 de ore înainte pentru coffee break și evenimente. Plătești doar porțiile livrate." },
];

export default {
  path: "",
  title: `Catering pentru firme în București — prânz, coffee break, evenimente | ${site.name}`,
  description: "Catering pentru firme în București: prânz pentru angajați de la 35 lei, coffee break și evenimente corporate. Factură pe firmă, livrare la oră fixă.",
  jsonLd: [faqJsonLd(faq)],
  body: (p) => `
    <section class="hero"><div class="wrap">
      <div>
        <span class="eyebrow">Catering B2B · ${site.city} și Ilfov</span>
        <h1>Catering pentru firme în ${site.city}</h1>
        <p class="lead">Platou livrează prânz zilnic pentru angajați, coffee break pentru ședințe și meniuri pentru evenimente corporate — gătite în aceeași dimineață, livrate la oră fixă, cu factură pe firmă.</p>
        <div class="hero-actions">
          <a class="btn" href="${p}contact/">Cere ofertă în 2 minute</a>
          <a class="btn btn-ghost" href="${p}meniu/">Vezi meniul și prețurile</a>
        </div>
        <ul class="trust">
          <li>Factură pe firmă</li>
          <li>De la 10 porții</li>
          <li>Livrare gratuită peste 500 lei</li>
          <li>Alergeni etichetați</li>
        </ul>
      </div>
      <div class="hero-art" aria-hidden="true">
        <svg viewBox="0 0 400 320">
          <rect x="20" y="40" width="360" height="240" rx="24" fill="#faf6ef" stroke="#1f4a34" stroke-width="3"/>
          <circle cx="130" cy="130" r="62" fill="#fff" stroke="#1f4a34" stroke-width="3"/>
          <circle cx="130" cy="130" r="40" fill="#e3ece5"/>
          <path d="M108 128c10-16 34-16 44 0" stroke="#c2562b" stroke-width="6" stroke-linecap="round" fill="none"/>
          <circle cx="118" cy="142" r="7" fill="#1f4a34"/><circle cx="142" cy="144" r="6" fill="#c2562b"/>
          <rect x="220" y="76" width="130" height="58" rx="12" fill="#fff" stroke="#1f4a34" stroke-width="3"/>
          <path d="M236 96h98M236 114h70" stroke="#1f4a34" stroke-width="3" stroke-linecap="round"/>
          <rect x="220" y="150" width="62" height="80" rx="12" fill="#f6e3d8" stroke="#1f4a34" stroke-width="3"/>
          <rect x="290" y="150" width="60" height="80" rx="12" fill="#e3ece5" stroke="#1f4a34" stroke-width="3"/>
          <path d="M60 230h150" stroke="#c2562b" stroke-width="6" stroke-linecap="round"/>
          <path d="M60 250h100" stroke="#1f4a34" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
    </div></section>

    <section class="section-alt" aria-labelledby="servicii"><div class="wrap">
      <div class="section-head">
        <h2 id="servicii">Ce livrăm pentru companii</h2>
        <p>Patru servicii, aceeași bucătărie. Alegi formatul potrivit pentru echipă, ședință sau eveniment, iar noi ne ocupăm de meniu, ambalaje, livrare și factură.</p>
      </div>
      <div class="grid grid-4">
        <article class="card">${icon(icons.lunch)}<h3><a href="${p}pranz-angajati/">Prânz pentru angajați</a></h3><p>Meniu zilnic cu 3 variante, comandă până la 16:00 în ziua anterioară, livrare între 12:00 și 13:00.</p><p class="price">de la 35 lei / porție</p></article>
        <article class="card">${icon(icons.coffee)}<h3><a href="${p}coffee-break/">Coffee break</a></h3><p>Pentru ședințe, training-uri și conferințe: cafea, ceai, patiserie, fructe și mini-sandvișuri.</p><p class="price">de la 28 lei / persoană</p></article>
        <article class="card">${icon(icons.event)}<h3><a href="${p}catering-evenimente-corporate/">Evenimente corporate</a></h3><p>Lansări, petreceri de echipă și cine festive, cu bufet sau servire la masă și personal inclus.</p><p class="price">de la 95 lei / persoană</p></article>
        <article class="card">${icon(icons.finger)}<h3><a href="${p}meniu/#finger-food">Finger food</a></h3><p>Platouri reci și calde pentru recepții și networking, livrate gata de servit pe tăvi.</p><p class="price">de la 55 lei / persoană</p></article>
      </div>
    </div></section>

    <section aria-labelledby="cum-functioneaza"><div class="wrap">
      <div class="grid grid-2" style="gap:48px;align-items:start">
        <div class="section-head" style="margin:0">
          <h2 id="cum-functioneaza">Cum funcționează</h2>
          <p>De la prima cerere până la prima livrare trec, de obicei, 2 zile lucrătoare. Pentru prânzul zilnic primești o degustare gratuită pentru 5 colegi înainte să semnezi.</p>
          <a class="btn" href="${p}contact/">Programează o degustare</a>
        </div>
        <ol class="steps">
          <li><h3>Ne spui de ce ai nevoie</h3><p>Număr de persoane, zile, buget și restricții alimentare. Formularul durează două minute.</p></li>
          <li><h3>Primești meniul și prețul final</h3><p>În aceeași zi lucrătoare, cu preț pe porție fără TVA, livrare inclusă și condiții de plată.</p></li>
          <li><h3>Livrăm la oră fixă</h3><p>Mâncarea ajunge caldă, în ambalaje etichetate, cu tacâmuri și șervețele incluse.</p></li>
          <li><h3>Factură și ajustări</h3><p>Factură per livrare sau lunară. Ajustezi numărul de porții până la 10:00 în ziua livrării.</p></li>
        </ol>
      </div>
    </div></section>

    <section class="section-alt" aria-labelledby="de-ce"><div class="wrap">
      <div class="section-head"><h2 id="de-ce">De ce aleg companiile Platou</h2></div>
      <div class="grid grid-4">
        <div class="card">${icon(icons.clock)}<h3>Livrare la oră fixă</h3><p>Intervale de 30 de minute, confirmate în dimineața livrării. Dacă întârziem peste 20 de minute, livrarea respectivă nu se plătește.</p></div>
        <div class="card">${icon(icons.invoice)}<h3>Factură simplă</h3><p>Un singur furnizor, o factură lunară centralizată, raport de consum pe departamente la cerere.</p></div>
        <div class="card">${icon(icons.leaf)}<h3>Meniuri pentru toți</h3><p>Variante vegetariene zilnic, vegan și fără gluten la cerere, alergeni etichetați pe fiecare porție.</p></div>
        <div class="card">${icon(icons.box)}<h3>Ambalaje reciclabile</h3><p>Caserole din carton și bagasse, fără plastic de unică folosință; la evenimente servim pe veselă.</p></div>
      </div>
    </div></section>

    <section aria-label="Cifre"><div class="wrap">
      <div class="stats">
        <div><strong>1.200+</strong><span>porții livrate pe zi</span></div>
        <div><strong>60+</strong><span>companii client</span></div>
        <div><strong>98%</strong><span>livrări la timp</span></div>
        <div><strong>4 ore</strong><span>timp mediu de răspuns</span></div>
      </div>
    </div></section>

    <section class="section-alt" aria-labelledby="intrebari"><div class="wrap">
      <div class="section-head"><h2 id="intrebari">Întrebări frecvente despre cateringul pentru firme</h2></div>
      ${faqHtml(faq)}
      <p style="margin-top:20px">Vrei să afli în detaliu cum se formează prețul? Citește <a href="${p}ghid/cat-costa-catering-pentru-firme/">cât costă cateringul pentru firme în 2026</a>.</p>
    </div></section>
${ctaBand(p)}`,
};
