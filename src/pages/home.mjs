import { site } from "../site.mjs";
import { faqJsonLd, faqSection, ctaBand, photo } from "../layout.mjs";

const faq = [
  { q: "Care este comanda minimă?", a: "Pentru prânzul zilnic livrăm de la 10 porții pe zi, iar pentru coffee break și evenimente de la 15 persoane. Sub aceste cantități îți facem o ofertă separată, cu taxa de livrare inclusă." },
  { q: "Emiteți factură pe firmă?", a: "Da. Lucrăm doar cu persoane juridice și emitem factură fiscală pentru fiecare livrare sau o factură centralizată lunară pentru abonamentele de prânz. Plata se face prin transfer bancar, cu termen de 15 zile pentru clienții cu contract." },
  { q: "Cu cât timp înainte trebuie să comand?", a: "Pentru prânz zilnic, până la ora 16:00 în ziua lucrătoare anterioară. Pentru coffee break, cu 48 de ore înainte. Pentru evenimente corporate de peste 50 de persoane, ideal cu 7–10 zile înainte, ca să putem programa degustarea și personalul." },
  { q: "Aveți meniuri vegetariene, vegane sau fără gluten?", a: "Da. Fiecare meniu zilnic are cel puțin o variantă vegetariană, iar la cerere pregătim porții vegane, fără gluten sau fără lactoză. Toate porțiile sunt etichetate cu alergenii principali, conform Regulamentului UE 1169/2011." },
  { q: "În ce zone livrați?", a: `Livrăm în tot ${site.city} și în ${site.areaServed.slice(1).join(", ")}. Livrarea este gratuită în București pentru comenzi de peste 500 lei fără TVA.` },
  { q: "Pot schimba numărul de porții după ce am comandat?", a: "Da, până la ora 10:00 în ziua livrării pentru prânz și cu 24 de ore înainte pentru coffee break și evenimente. Plătești doar porțiile livrate." },
];

const services = [
  { href: "pranz-angajati/", img: "bowl", alt: "Bol cu legume proaspete, ou și somon pentru prânzul de birou", title: "Prânz pentru angajați", text: "Meniu zilnic cu trei variante, gătit în aceeași dimineață și livrat între 12:00 și 13:00. O singură factură lunară, ajustări până la 10:00.", from: "35 lei", unit: "pe porție", min: "10 porții" },
  { href: "coffee-break/", img: "coffee", alt: "Cafea cu latte art și croissante proaspete", title: "Coffee break", text: "Pentru ședințe, training-uri și conferințe: cafea de specialitate, patiserie, fructe și mini-sandvișuri, aranjate cu 30 de minute înainte de pauză.", from: "28 lei", unit: "de persoană", min: "15 persoane" },
  { href: "catering-evenimente-corporate/", img: "table", alt: "Masă lungă pregătită pentru o cină corporate, cu lumânări și flori", title: "Evenimente corporate", text: "Lansări, petreceri de echipă și cine festive — bufet, finger food sau servire la masă, cu ospătari, veselă și coordonator incluși.", from: "95 lei", unit: "de persoană", min: "20 persoane" },
];

export default {
  path: "",
  title: `Catering pentru firme în București — prânz, coffee break, evenimente | ${site.name}`,
  description: "Catering pentru firme în București: prânz pentru angajați de la 35 lei, coffee break și evenimente corporate. Factură pe firmă, livrare la oră fixă.",
  jsonLd: [faqJsonLd(faq)],
  body: (p) => `
    <header class="photo-hero hero-home">
      ${photo("chef", "Bucătar care aranjează porții individuale pe o masă de catering", { eager: true })}
      <div class="wrap">
        <span class="eyebrow">Catering B2B · ${site.city} și Ilfov</span>
        <h1>Catering pentru firme în <em>${site.city}</em></h1>
        <p class="lead">Mâncărescu livrează prânz zilnic pentru angajați, coffee break pentru ședințe și meniuri pentru evenimente corporate — gătite în aceeași dimineață, livrate la oră fixă, cu factură pe firmă.</p>
        <div class="hero-actions">
          <a class="btn btn-light" href="${p}contact/">Cere ofertă</a>
          <a class="btn btn-ghost" href="${p}meniu/">Meniu și prețuri</a>
        </div>
        <ul class="trust">
          <li><strong>35 lei</strong>prânz, de la, pe porție</li>
          <li><strong>12–13</strong>interval de livrare</li>
          <li><strong>10+</strong>porții, comanda minimă</li>
          <li><strong>1</strong>factură lunară pe firmă</li>
        </ul>
      </div>
    </header>

    <section><div class="wrap">
      <div class="section-head split">
        <div><span class="eyebrow">Ce livrăm</span><h2>Trei servicii, <em>o singură bucătărie</em></h2></div>
        <p>Alegi formatul potrivit pentru echipă, ședință sau eveniment. Noi ne ocupăm de meniu, ambalaje, livrare, servire și factură — tu primești un singur interlocutor.</p>
      </div>
${services
  .map(
    (s, i) => `
      <article class="feature${i % 2 ? " reverse" : ""}">
        <div class="feature-media">${photo(s.img, s.alt, { sizes: "(max-width: 860px) 100vw, 50vw", max: 1600 })}</div>
        <div class="feature-body">
          <span class="num">0${i + 1}</span>
          <h3><a href="${p}${s.href}">${s.title}</a></h3>
          <p>${s.text}</p>
          <div class="feature-meta">
            <span>De la<strong>${s.from}</strong>${s.unit}</span>
            <span>Minim<strong>${s.min}</strong>pe comandă</span>
          </div>
          <a class="link-arrow" href="${p}${s.href}">Detalii și pachete →</a>
        </div>
      </article>`
  )
  .join("")}
    </div></section>

    <section class="section-dark"><div class="wrap">
      <div class="section-head split">
        <div><span class="eyebrow">Standardul Mâncărescu</span><h2>De ce ne aleg <em>companiile</em></h2></div>
        <p>Cateringul de birou se judecă în detalii: ora la care ajunge mâncarea, cum arată pe masă și cât de simplă e factura.</p>
      </div>
      <div class="values">
        <div><span class="num">i.</span><h3>Livrare la oră fixă</h3><p>Intervale de 30 de minute, confirmate în dimineața livrării. Dacă întârziem peste 20 de minute, livrarea nu se plătește.</p></div>
        <div><span class="num">ii.</span><h3>Factură simplă</h3><p>Un singur furnizor, o factură lunară centralizată și raport de consum pe departamente, la cerere.</p></div>
        <div><span class="num">iii.</span><h3>Meniuri pentru toți</h3><p>Variantă vegetariană zilnic, vegan și fără gluten la cerere, alergeni etichetați pe fiecare porție.</p></div>
        <div><span class="num">iv.</span><h3>Fără plastic</h3><p>Caserole din carton și bagasse; la evenimente servim pe porțelan, cu veselă și pahare incluse.</p></div>
      </div>
    </div></section>

    <section><div class="wrap">
      <p class="statement">Gătim dimineața, livrăm la prânz. <em>Nimic nu stă peste noapte</em> în frigider și nimic nu ajunge la birou încălzit la microunde.</p>
    </div></section>

    <section style="padding-top:0"><div class="wrap">
      <div class="gallery">
        <figure>${photo("garnish", "Bucătar care ornează o farfurie cu verdețuri", { sizes: "(max-width: 760px) 100vw, 45vw", max: 1600 })}</figure>
        <figure>${photo("bruschetta", "Bruschete asortate pe un platou de marmură", { sizes: "(max-width: 760px) 50vw, 28vw", max: 800 })}</figure>
        <figure>${photo("pastry", "Patiserie și cafea pentru coffee break", { sizes: "(max-width: 760px) 50vw, 28vw", max: 800 })}</figure>
        <figure>${photo("salmon", "File de somon cu salsa de legume", { sizes: "(max-width: 760px) 50vw, 28vw", max: 800 })}</figure>
        <figure>${photo("canapes", "Platou cu aperitive pentru recepție", { sizes: "(max-width: 760px) 50vw, 28vw", max: 800 })}</figure>
      </div>
    </div></section>

    <section class="section-alt"><div class="wrap">
      <div class="section-head split">
        <div><span class="eyebrow">Cum funcționează</span><h2>De la cerere la prima livrare, <em>în două zile</em></h2></div>
        <p>Pentru prânzul zilnic primești o degustare gratuită pentru cinci colegi înainte să semnezi.</p>
      </div>
      <ol class="steps">
        <li><h3>Ne spui de ce ai nevoie</h3><p>Număr de persoane, zile, buget și restricții alimentare. Formularul durează două minute.</p></li>
        <li><h3>Primești meniul și prețul</h3><p>În aceeași zi lucrătoare, cu preț final pe porție, livrare inclusă și condiții de plată.</p></li>
        <li><h3>Livrăm la oră fixă</h3><p>Mâncarea ajunge caldă, în ambalaje etichetate, cu tacâmuri și șervețele incluse.</p></li>
        <li><h3>Factură și ajustări</h3><p>Factură per livrare sau lunară. Ajustezi numărul de porții până la 10:00 în ziua livrării.</p></li>
      </ol>
    </div></section>

    <section><div class="wrap">
      <div class="stats">
        <div><strong>1.200+</strong><span>porții livrate pe zi</span></div>
        <div><strong>60+</strong><span>companii client</span></div>
        <div><strong>98%</strong><span>livrări la timp</span></div>
        <div><strong>4 ore</strong><span>timp mediu de răspuns</span></div>
      </div>
    </div></section>
${faqSection(faq, "Despre cateringul pentru firme")}
    <section style="padding-top:0" class="section-alt"><div class="wrap faq-layout"><div></div>
      <p>Vrei să afli cum se formează prețul? Citește <a href="${p}ghid/cat-costa-catering-pentru-firme/">cât costă cateringul pentru firme în 2026</a>.</p>
    </div></section>
${ctaBand(p)}`,
};
