import { site } from "../site.mjs";
import { faqJsonLd, faqSection, ctaBand, serviceJsonLd, pageHero, photo } from "../layout.mjs";

const path = "catering-evenimente-corporate/";
const faq = [
  { q: "Includeți ospătari și veselă?", a: "Da. Pentru evenimentele cu bufet sau servire la masă trimitem un ospătar la fiecare 20–25 de invitați, plus un coordonator. Vesela, paharele, fețele de masă și debarasarea sunt incluse în preț." },
  { q: "Putem face o degustare înainte?", a: "Da, pentru evenimentele de peste 50 de persoane degustarea pentru 2–4 persoane este gratuită și o programăm în bucătăria noastră sau la biroul vostru." },
  { q: "Asigurați și băuturile?", a: "Asigurăm băuturi răcoritoare, apă, cafea și vin la pachet. Pentru bar complet colaborăm cu parteneri și includem costul în aceeași ofertă și aceeași factură." },
];

export default {
  path,
  title: `Catering pentru evenimente corporate în București | ${site.name}`,
  description: "Catering pentru evenimente corporate în București: bufet, finger food sau cină servită, cu personal și veselă incluse, de la 95 lei/persoană fără TVA.",
  ogImage: "table",
  breadcrumbs: [{ name: "Evenimente corporate", path }],
  jsonLd: [
    serviceJsonLd({
      name: "Catering pentru evenimente corporate",
      description: "Catering cu personal, veselă și logistică pentru evenimente de companie în București și Ilfov.",
      path,
      offers: [
        { name: "Bufet cald", price: "95", unit: "persoană" },
        { name: "Cină servită la masă", price: "180", unit: "persoană" },
      ],
    }),
    faqJsonLd(faq),
  ],
  body: (p, crumbs) => `
${pageHero({
  crumbs,
  image: "table",
  alt: "Masă lungă pregătită pentru o cină corporate, cu lumânări",
  eyebrow: "Evenimente de companie",
  title: "Catering pentru <em>evenimente corporate</em>",
  lead: "Cateringul pentru un eveniment corporate costă între 95 și 180 de lei de persoană fără TVA, în funcție de format, și include meniul, personalul de servire, vesela și debarasarea — tu te ocupi doar de invitați.",
  actions: `<a class="btn btn-light" href="${p}contact/">Cere ofertă pentru eveniment</a>`,
})}

    <section><div class="wrap">
      <div class="section-head split">
        <div><span class="eyebrow">Formate</span><h2>Alegi formatul, <em>noi îl punem în scenă</em></h2></div>
        <p>Prețuri pe persoană, fără TVA, cu personal, veselă și transport în București incluse.</p>
      </div>
      <div class="table-scroll">
        <table>
          <thead><tr><th>Format</th><th>Potrivit pentru</th><th>Persoane</th><th>Preț orientativ</th></tr></thead>
          <tbody>
            <tr><td><strong>Finger food & cocktail</strong></td><td>Lansări, networking, vernisaje</td><td>30–500</td><td>55–85 lei</td></tr>
            <tr><td><strong>Bufet cald</strong></td><td>Petreceri de echipă, conferințe, team building</td><td>30–400</td><td>95–130 lei</td></tr>
            <tr><td><strong>Cină servită la masă</strong></td><td>Cine festive, gale, clienți VIP</td><td>20–200</td><td>140–180 lei</td></tr>
            <tr><td><strong>Grătar & street food</strong></td><td>Evenimente în aer liber, family day</td><td>50–600</td><td>85–120 lei</td></tr>
          </tbody>
        </table>
      </div>
    </div></section>

    <section style="padding-top:0"><div class="wrap">
      <div class="gallery">
        <figure>${photo("sauce", "Bucătar care toarnă sos peste o porție servită la masă", { sizes: "(max-width: 760px) 100vw, 45vw", max: 1600 })}</figure>
        <figure>${photo("canapes", "Aperitive pentru cocktail corporate", { sizes: "(max-width: 760px) 50vw, 28vw", max: 800 })}</figure>
        <figure>${photo("buffet", "Bufet cald cu vase de servire din inox", { sizes: "(max-width: 760px) 50vw, 28vw", max: 800 })}</figure>
        <figure>${photo("candles", "Masă festivă cu lumânări și pahare", { sizes: "(max-width: 760px) 50vw, 28vw", max: 800 })}</figure>
        <figure>${photo("bruschetta", "Bruschete pe platou de marmură", { sizes: "(max-width: 760px) 50vw, 28vw", max: 800 })}</figure>
      </div>
    </div></section>

    <section class="section-dark"><div class="wrap">
      <div class="section-head"><span class="eyebrow">Proces</span><h2>Cum organizăm <em>un eveniment</em></h2></div>
      <ol class="steps">
        <li><h3>Brief de 15 minute</h3><p>Data, locația, numărul de invitați, bugetul și tonul evenimentului.</p></li>
        <li><h3>Propunere de meniu</h3><p>În 24 de ore, cu două variante de buget și planul de servire.</p></li>
        <li><h3>Degustare</h3><p>Gratuită pentru evenimentele de peste 50 de persoane.</p></li>
        <li><h3>Ziua evenimentului</h3><p>Coordonatorul nostru ajunge cu 2 ore înainte și rămâne până la debarasare.</p></li>
      </ol>
    </div></section>
${faqSection(faq, "Despre cateringul pentru evenimente")}
${ctaBand(p, "Ai deja <em>o dată</em> în minte?", "Verificăm disponibilitatea în aceeași zi. În noiembrie și decembrie, rezervă cu cel puțin trei săptămâni înainte.", "candles")}`,
};
