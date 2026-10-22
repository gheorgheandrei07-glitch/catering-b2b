import { site } from "../site.mjs";
import { faqHtml, faqJsonLd, ctaBand, serviceJsonLd } from "../layout.mjs";

const path = "coffee-break/";
const faq = [
  { q: "Aduceți și espressor?", a: "Pentru coffee break-urile de peste 30 de persoane aducem espressor profesional și un barista, contra unei taxe fixe de 450 lei pe zi. Sub 30 de persoane livrăm cafea de specialitate în termosuri de 5 litri." },
  { q: "Cât rămâne coffee break-ul la locație?", a: "Termosurile păstrează cafeaua caldă aproximativ 4 ore. Pentru conferințe de o zi întreagă reîmprospătăm stația de două ori, fără cost suplimentar." },
  { q: "Pot comanda pentru o ședință de dimineață?", a: "Da, livrăm începând cu ora 07:30 dacă comanda este confirmată cu 48 de ore înainte." },
];

export default {
  path,
  title: `Coffee break pentru ședințe, training-uri și conferințe în București | ${site.name}`,
  description: "Coffee break pentru ședințe, training-uri și conferințe în București: cafea, patiserie, fructe și sandvișuri, de la 28 lei/persoană. Setup inclus.",
  breadcrumbs: [{ name: "Coffee break", path }],
  jsonLd: [
    serviceJsonLd({
      name: "Coffee break pentru ședințe și conferințe",
      description: "Coffee break livrat și aranjat pentru ședințe, training-uri și conferințe în București.",
      path,
      offers: [
        { name: "Coffee break Simplu", price: "28", unit: "persoană" },
        { name: "Coffee break Business", price: "42", unit: "persoană" },
        { name: "Coffee break Conferință (2 pauze)", price: "65", unit: "persoană" },
      ],
    }),
    faqJsonLd(faq),
  ],
  body: (p, crumbs) => `
    <div class="page-hero"><div class="wrap">
      ${crumbs}
      <span class="eyebrow">Ședințe · training-uri · conferințe</span>
      <h1>Coffee break pentru ședințe și conferințe</h1>
      <p class="lead">Un coffee break pentru ședință costă de la 28 lei de persoană fără TVA și include cafea de specialitate, ceai, patiserie proaspătă și fructe, aranjate de noi la locație cu 30 de minute înainte de pauză.</p>
      <div class="hero-actions"><a class="btn" href="${p}contact/?serviciu=coffee-break">Cere ofertă pentru coffee break</a></div>
    </div></div>

    <section class="section-alt"><div class="wrap">
      <div class="section-head"><h2>Pachete de coffee break</h2><p>Prețuri pe persoană, fără TVA, pentru minimum 15 persoane. Veselă, fețe de masă și setup incluse.</p></div>
      <div class="grid grid-3">
        <div class="card"><h3>Simplu</h3><ul><li>Cafea și ceai</li><li>Apă plată și minerală</li><li>Mini-croissante și biscuiți</li></ul><p class="price">28 lei / persoană</p></div>
        <div class="card"><h3>Business</h3><ul><li>Tot ce include Simplu</li><li>Mini-sandvișuri (2 / persoană)</li><li>Fructe proaspete tăiate</li><li>Fresh de portocale</li></ul><p class="price">42 lei / persoană</p></div>
        <div class="card"><h3>Conferință</h3><ul><li>Două pauze: dimineață și după-amiază</li><li>Patiserie sărată și dulce</li><li>Iaurt cu granola, fructe</li><li>Reîmprospătare inclusă</li></ul><p class="price">65 lei / persoană</p></div>
      </div>
    </div></section>

    <section><div class="wrap">
      <h2>Pentru ce fel de întâlniri</h2>
      <div class="grid grid-3">
        <div class="card"><h3>Ședințe de board</h3><p>Pentru 8–20 de persoane, servit în sala de ședințe, cu veselă din porțelan.</p></div>
        <div class="card"><h3>Training-uri și workshop-uri</h3><p>Pauze de dimineață și după-amiază, eventual combinate cu <a href="${p}pranz-angajati/">prânz livrat</a>.</p></div>
        <div class="card"><h3>Conferințe</h3><p>Până la 400 de participanți, cu stații multiple ca să evităm cozile.</p></div>
      </div>
    </div></section>

    <section class="section-alt"><div class="wrap">
      <div class="section-head"><h2>Întrebări despre coffee break</h2></div>
      ${faqHtml(faq)}
    </div></section>
${ctaBand(p)}`,
};
