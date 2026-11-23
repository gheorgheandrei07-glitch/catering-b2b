import { site } from "../site.mjs";
import { faqJsonLd, faqSection, ctaBand, serviceJsonLd, pageHero, photo } from "../layout.mjs";

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
  ogImage: "coffee",
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
${pageHero({
  crumbs,
  image: "coffee",
  alt: "Cafea cu latte art și croissante pe o masă de lemn",
  eyebrow: "Ședințe · training-uri · conferințe",
  title: "Coffee break pentru <em>ședințe și conferințe</em>",
  lead: "Un coffee break pentru ședință costă de la 28 lei de persoană fără TVA și include cafea de specialitate, ceai, patiserie proaspătă și fructe, aranjate de noi la locație cu 30 de minute înainte de pauză.",
  actions: `<a class="btn btn-light" href="${p}contact/?serviciu=Coffee%20break">Cere ofertă</a><a class="btn btn-ghost" href="${p}#calculator">Calculează prețul</a>`,
})}

    <section><div class="wrap">
      <div class="section-head split">
        <div><span class="eyebrow">Pachete</span><h2>Trei pachete, <em>setup inclus</em></h2></div>
        <p>Prețuri pe persoană, fără TVA, pentru minimum 15 persoane. Veselă, fețe de masă și aranjarea stației sunt incluse.</p>
      </div>
      <div class="grid grid-3">
        <div class="package"><h3>Simplu</h3><p class="price">28 lei <small>/ persoană</small></p><ul><li>Cafea și ceai</li><li>Apă plată și minerală</li><li>Mini-croissante și biscuiți</li></ul><a class="btn btn-ghost" href="${p}contact/">Cere ofertă</a></div>
        <div class="package featured"><span class="badge">Recomandat</span><h3>Business</h3><p class="price">42 lei <small>/ persoană</small></p><ul><li>Tot ce include Simplu</li><li>Mini-sandvișuri, 2 de persoană</li><li>Fructe proaspete tăiate</li><li>Fresh de portocale</li></ul><a class="btn" href="${p}contact/">Cere ofertă</a></div>
        <div class="package"><h3>Conferință</h3><p class="price">65 lei <small>/ persoană</small></p><ul><li>Două pauze: dimineață și după-amiază</li><li>Patiserie sărată și dulce</li><li>Iaurt cu granola, fructe</li><li>Reîmprospătare inclusă</li></ul><a class="btn btn-ghost" href="${p}contact/">Cere ofertă</a></div>
      </div>
    </div></section>

    <section class="section-dark"><div class="wrap">
      <div class="feature reverse">
        <div class="feature-media">${photo("pastry", "Patiserie, cafea și suc pentru o pauză de ședință", { sizes: "(max-width: 860px) 100vw, 50vw", max: 1600 })}</div>
        <div class="feature-body">
          <span class="eyebrow">Pentru ce întâlniri</span>
          <h3>De la board de opt persoane la conferință de patru sute</h3>
          <div class="grid" style="gap:24px;margin-top:28px">
            <div class="card"><h3>Ședințe de board</h3><p>Pentru 8–20 de persoane, servit în sala de ședințe, pe porțelan.</p></div>
            <div class="card"><h3>Training-uri și workshop-uri</h3><p>Pauze de dimineață și după-amiază, eventual combinate cu <a href="${p}pranz-angajati/">prânz livrat</a>.</p></div>
            <div class="card"><h3>Conferințe</h3><p>Până la 400 de participanți, cu stații multiple ca să nu se formeze cozi.</p></div>
          </div>
        </div>
      </div>
    </div></section>
${faqSection(faq, "Despre coffee break")}
${ctaBand(p, undefined, undefined, "pastry")}`,
};
