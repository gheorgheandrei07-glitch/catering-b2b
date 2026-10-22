import { site } from "../site.mjs";
import { faqJsonLd, faqSection, ctaBand, serviceJsonLd, pageHero, photo } from "../layout.mjs";

const path = "pranz-angajati/";
const faq = [
  { q: "Cum comandă angajații?", a: "Fie centralizat (office managerul trimite numărul de porții pe variantă până la 16:00), fie individual, printr-un formular comun în care fiecare coleg își alege varianta. Primești o singură listă și o singură factură." },
  { q: "Firma poate subvenționa doar o parte din prânz?", a: "Da. Putem factura către firmă o sumă fixă pe porție, iar diferența o plătește angajatul. Stabilim modelul la semnarea contractului." },
  { q: "Ce se întâmplă în zilele libere legale?", a: "Nu livrăm în zilele libere legale și nu le facturăm. Calendarul de livrări se trimite la începutul fiecărei luni." },
];

export default {
  path,
  title: `Prânz pentru angajați — meniu zilnic livrat la birou, București | ${site.name}`,
  description: "Prânz livrat zilnic la birou în București: 3 variante pe zi, de la 35 lei/porție fără TVA, factură lunară pe firmă. Degustare gratuită pentru echipă.",
  ogImage: "bowl",
  breadcrumbs: [{ name: "Prânz pentru angajați", path }],
  jsonLd: [
    serviceJsonLd({
      name: "Prânz zilnic pentru angajați",
      description: "Livrare zilnică de prânz la birou pentru companii din București, cu 3 variante de meniu și factură lunară.",
      path,
      offers: [
        { name: "Meniu standard (fel principal + garnitură)", price: "35", unit: "porție" },
        { name: "Meniu complet (supă + fel principal + desert)", price: "45", unit: "porție" },
      ],
    }),
    faqJsonLd(faq),
  ],
  body: (p, crumbs) => `
${pageHero({
  crumbs,
  image: "bowl",
  alt: "Bol cu legume proaspete și ou, porție de prânz pentru birou",
  eyebrow: "Abonament de prânz",
  title: "Prânz pentru angajați, <em>livrat zilnic</em> la birou",
  lead: "Prânzul pentru angajați costă de la 35 lei pe porție fără TVA și ajunge la birou între 12:00 și 13:00, cu trei variante în fiecare zi și o singură factură lunară pentru firmă.",
  actions: `<a class="btn btn-light" href="${p}contact/">Cere degustare gratuită</a><a class="btn btn-ghost" href="${p}meniu/#pranz">Meniul săptămânii</a>`,
})}

    <section><div class="wrap">
      <div class="section-head split">
        <div><span class="eyebrow">Formule</span><h2>Două formule, <em>preț fix</em> pe porție</h2></div>
        <p>Prețurile includ ambalajul, tacâmurile și livrarea în București pentru minimum 10 porții pe zi.</p>
      </div>
      <div class="grid grid-2">
        <div class="package"><h3>Meniu standard</h3><p class="price">35 lei <small>/ porție, fără TVA</small></p><ul><li>Fel principal cu garnitură sau salată consistentă</li><li>Trei variante zilnic: carne, pește sau pasăre, vegetarian</li><li>400–450 g pe porție</li></ul><a class="btn btn-ghost" href="${p}contact/">Cere ofertă</a></div>
        <div class="package featured"><span class="badge">Cel mai ales</span><h3>Meniu complet</h3><p class="price">45 lei <small>/ porție, fără TVA</small></p><ul><li>Supă sau ciorbă, 300 ml</li><li>Fel principal cu garnitură</li><li>Desert sau fruct de sezon</li></ul><a class="btn" href="${p}contact/">Cere ofertă</a></div>
      </div>
    </div></section>

    <section class="section-alt"><div class="wrap">
      <div class="feature">
        <div class="feature-media">${photo("salad", "Boluri cu salată, legume coapte și orez", { sizes: "(max-width: 860px) 100vw, 50vw", max: 1600 })}</div>
        <div class="feature-body">
          <span class="eyebrow">Ce primești</span>
          <h3>Gândit pentru birou, nu pentru livrare la domiciliu</h3>
          <ul>
            <li>Meniu nou în fiecare săptămână, trimis vinerea</li>
            <li>Etichetă pe fiecare caserolă: nume, variantă, alergeni</li>
            <li>Valori nutriționale pentru fiecare preparat</li>
            <li>Factură lunară și raport de consum pe departamente</li>
          </ul>
          <table>
            <tr><th>Comandă</th><td>până la 16:00, în ziua lucrătoare anterioară</td></tr>
            <tr><th>Modificări</th><td>până la 10:00, în ziua livrării</td></tr>
            <tr><th>Livrare</th><td>12:00–13:00, interval de 30 min ales de tine</td></tr>
            <tr><th>Minim</th><td>10 porții pe zi, pe aceeași adresă</td></tr>
          </table>
        </div>
      </div>
    </div></section>
${faqSection(faq, "Despre prânzul pentru angajați")}
${ctaBand(p, "Testează prânzul <em>cu echipa ta</em>", "Trimitem gratuit 5 porții din meniul zilei, ca să știi exact ce primesc colegii înainte să semnezi.", "plate")}`,
};
