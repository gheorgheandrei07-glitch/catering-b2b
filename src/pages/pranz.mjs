import { site } from "../site.mjs";
import { faqHtml, faqJsonLd, ctaBand, serviceJsonLd } from "../layout.mjs";

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
    <div class="page-hero"><div class="wrap">
      ${crumbs}
      <span class="eyebrow">Abonament de prânz</span>
      <h1>Prânz pentru angajați, livrat zilnic la birou</h1>
      <p class="lead">Prânzul pentru angajați costă de la 35 lei pe porție fără TVA și ajunge la birou între 12:00 și 13:00, cu trei variante în fiecare zi și o singură factură lunară pentru firmă.</p>
      <div class="hero-actions"><a class="btn" href="${p}contact/?serviciu=pranz">Cere degustare gratuită</a><a class="btn btn-ghost" href="${p}meniu/#pranz">Vezi meniul săptămânii</a></div>
    </div></div>

    <section class="section-alt"><div class="wrap">
      <div class="section-head"><h2>Două formule, preț fix pe porție</h2><p>Prețurile includ ambalajul, tacâmurile și livrarea în București pentru minimum 10 porții pe zi.</p></div>
      <div class="grid grid-2">
        <div class="card"><h3>Meniu standard</h3><p>Fel principal cu garnitură sau salată consistentă. Alegi zilnic între carne, pește/pasăre și vegetarian.</p><p class="price">35 lei / porție fără TVA</p></div>
        <div class="card"><h3>Meniu complet</h3><p>Supă sau ciorbă, fel principal cu garnitură și desert sau fruct. Cel mai ales de echipele de peste 30 de persoane.</p><p class="price">45 lei / porție fără TVA</p></div>
      </div>
    </div></section>

    <section><div class="wrap">
      <div class="grid grid-2" style="gap:48px">
        <div>
          <h2>Ce primești</h2>
          <ul>
            <li>Meniu nou în fiecare săptămână, trimis vinerea pentru săptămâna următoare</li>
            <li>Gramaj fix: 400–450 g fel principal, 300 ml supă</li>
            <li>Etichetă pe fiecare caserolă cu numele colegului, varianta și alergenii</li>
            <li>Valori nutriționale disponibile pentru fiecare preparat</li>
            <li>Factură lunară centralizată și raport de consum pe departamente</li>
          </ul>
        </div>
        <div>
          <h2>Program</h2>
          <table>
            <tr><th>Comandă</th><td>până la 16:00, în ziua lucrătoare anterioară</td></tr>
            <tr><th>Modificări</th><td>până la 10:00, în ziua livrării</td></tr>
            <tr><th>Livrare</th><td>12:00–13:00, interval de 30 min ales de tine</td></tr>
            <tr><th>Minim</th><td>10 porții pe zi, pe aceeași adresă</td></tr>
          </table>
        </div>
      </div>
    </div></section>

    <section class="section-alt"><div class="wrap">
      <div class="section-head"><h2>Întrebări despre prânzul pentru angajați</h2></div>
      ${faqHtml(faq)}
    </div></section>
${ctaBand(p, "Testează prânzul cu echipa ta", "Trimitem gratuit 5 porții din meniul zilei, ca să știi exact ce primesc colegii înainte să semnezi.")}`,
};
