import { site } from "../site.mjs";
import { faqHtml, faqJsonLd, ctaBand, serviceJsonLd } from "../layout.mjs";

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
    <div class="page-hero"><div class="wrap">
      ${crumbs}
      <span class="eyebrow">Evenimente de companie</span>
      <h1>Catering pentru evenimente corporate</h1>
      <p class="lead">Cateringul pentru un eveniment corporate costă între 95 și 180 de lei de persoană fără TVA, în funcție de format, și include meniul, personalul de servire, vesela și debarasarea — tu te ocupi doar de invitați.</p>
      <div class="hero-actions"><a class="btn" href="${p}contact/?serviciu=eveniment">Cere ofertă pentru eveniment</a></div>
    </div></div>

    <section class="section-alt"><div class="wrap">
      <div class="section-head"><h2>Formate de servire</h2></div>
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
      <p class="hint" style="margin-top:12px">Prețuri pe persoană, fără TVA, cu personal, veselă și transport în București incluse.</p>
    </div></section>

    <section><div class="wrap">
      <h2>Cum organizăm un eveniment</h2>
      <ol class="steps grid grid-2">
        <li><h3>Brief de 15 minute</h3><p>Data, locația, numărul de invitați, bugetul și tonul evenimentului.</p></li>
        <li><h3>Propunere de meniu</h3><p>În 24 de ore, cu două variante de buget și planul de servire.</p></li>
        <li><h3>Degustare</h3><p>Gratuită pentru evenimentele de peste 50 de persoane.</p></li>
        <li><h3>Ziua evenimentului</h3><p>Coordonatorul nostru ajunge cu 2 ore înainte și rămâne până la debarasare.</p></li>
      </ol>
    </div></section>

    <section class="section-alt"><div class="wrap">
      <div class="section-head"><h2>Întrebări despre cateringul pentru evenimente</h2></div>
      ${faqHtml(faq)}
    </div></section>
${ctaBand(p, "Ai o dată în minte?", "Verificăm disponibilitatea în aceeași zi. În lunile noiembrie–decembrie, rezervă cu cel puțin 3 săptămâni înainte.")}`,
};
