import { site } from "../site.mjs";
import { faqJsonLd, ctaBand } from "../layout.mjs";

const path = "ghid/cat-costa-catering-pentru-firme/";
const published = "2026-10-22";
const faq = [
  { q: "Cât costă cateringul pentru firme în 2026?", a: "În București, cateringul pentru firme costă între 30 și 50 de lei pe porție pentru prânzul zilnic, între 25 și 70 de lei de persoană pentru coffee break și între 90 și 200 de lei de persoană pentru evenimente corporate, fără TVA." },
  { q: "Ce TVA se aplică la catering?", a: "Serviciile de catering se facturează cu cota redusă de TVA pentru servicii de restaurant și catering, nu cu cota standard. Verifică întotdeauna cu contabilul cota în vigoare la data facturării, pentru că legislația fiscală s-a modificat de mai multe ori în ultimii ani." },
  { q: "Este prânzul pentru angajați cheltuială deductibilă?", a: "Depinde de forma în care îl acorzi. Tratamentul fiscal diferă între masa oferită ca avantaj, tichetele de masă și cheltuielile sociale, așa că stabilește modelul împreună cu contabilul înainte de a semna contractul." },
];

export default {
  path,
  title: `Cât costă cateringul pentru firme în 2026? Prețuri reale pe porție | ${site.name}`,
  description: "Prețuri catering firme 2026 în București: prânz 30–50 lei/porție, coffee break 25–70 lei, evenimente 90–200 lei/persoană. Ce influențează costul.",
  ogType: "article",
  breadcrumbs: [{ name: "Cât costă cateringul pentru firme", path }],
  jsonLd: [
    {
      "@type": "Article",
      headline: "Cât costă cateringul pentru firme în 2026?",
      description: "Prețuri orientative pe porție pentru prânz, coffee break și evenimente corporate în București și ce influențează costul final.",
      inLanguage: "ro",
      datePublished: published,
      dateModified: published,
      mainEntityOfPage: site.url + path,
      author: { "@id": site.url + "#business" },
      publisher: { "@id": site.url + "#business" },
    },
    faqJsonLd(faq),
  ],
  body: (p, crumbs) => `
    <div class="page-hero"><div class="wrap prose">
      ${crumbs}
      <h1>Cât costă cateringul pentru firme în 2026?</h1>
      <p class="meta">Actualizat la ${new Date(published).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })} · 5 minute de citit</p>
    </div></div>

    <section style="padding-top:0"><div class="wrap prose">
      <p class="answer">${faq[0].a}</p>

      <h2>Cât costă prânzul zilnic pentru angajați?</h2>
      <p>Un prânz livrat la birou costă între 30 și 50 de lei pe porție, fără TVA. Diferența vine din trei lucruri: câte feluri include (doar fel principal sau supă + fel principal + desert), gramajul și volumul comenzii. Firmele care comandă peste 50 de porții pe zi negociază de obicei 10–15% reducere.</p>
      <div class="table-scroll"><table>
        <thead><tr><th>Formulă</th><th>Ce include</th><th>Preț / porție (fără TVA)</th></tr></thead>
        <tbody>
          <tr><td>Fel principal</td><td>Fel principal cu garnitură, 400–450 g</td><td>30–38 lei</td></tr>
          <tr><td>Meniu complet</td><td>Supă, fel principal, desert</td><td>40–50 lei</td></tr>
          <tr><td>Salată / bowl</td><td>Bowl consistent, 450 g</td><td>32–42 lei</td></tr>
        </tbody>
      </table></div>

      <h2>Cât costă un coffee break pentru o ședință?</h2>
      <p>Un coffee break costă între 25 și 70 de lei de persoană. Cel mai ieftin include doar cafea, ceai și patiserie; cel mai scump acoperă două pauze pe zi, cu preparate sărate și fructe. La grupuri sub 15 persoane se adaugă de regulă o taxă fixă de livrare și setup.</p>

      <h2>Cât costă cateringul pentru un eveniment corporate?</h2>
      <p>Un eveniment corporate costă între 90 și 200 de lei de persoană pentru mâncare și servire. Finger food-ul este cel mai accesibil format, bufetul cald este la mijloc, iar cina servită la masă este cea mai scumpă, pentru că necesită mai mult personal. Băuturile alcoolice și închirierea locației se calculează separat.</p>

      <h2>Ce influențează prețul final?</h2>
      <ul>
        <li><strong>Numărul de persoane.</strong> Costul fix de transport și personal se împarte la mai mulți invitați.</li>
        <li><strong>Formatul de servire.</strong> Ambalajele individuale costă mai puțin decât servirea pe veselă cu ospătari.</li>
        <li><strong>Ingredientele.</strong> Peștele, vita și meniurile fără gluten cresc costul pe porție.</li>
        <li><strong>Ora și ziua.</strong> Livrările înainte de 08:00, în weekend sau în decembrie au de obicei suprataxă.</li>
        <li><strong>Distanța.</strong> În afara orașului se adaugă o taxă pe kilometru.</li>
      </ul>

      <h2>Cum compari corect două oferte de catering?</h2>
      <p>Compară prețul pe porție cu tot inclus, nu prețul din meniu. Cere în scris dacă oferta conține TVA, livrarea, ambalajele, tacâmurile, personalul și debarasarea, care este comanda minimă și până când poți modifica numărul de porții fără cost. Două oferte cu 5 lei diferență pe porție se pot inversa ușor după ce adaugi taxele separate.</p>

      <h2>Ce TVA se aplică la catering?</h2>
      <p>${faq[1].a}</p>

      <h2>Este prânzul pentru angajați cheltuială deductibilă?</h2>
      <p>${faq[2].a}</p>

      <p>Prețurile Platou pentru fiecare serviciu sunt pe pagina <a href="${p}meniu/">meniu și prețuri</a>.</p>
    </div></section>
${ctaBand(p, "Vrei un preț exact pentru firma ta?", "Trimite numărul de persoane și formatul dorit; primești oferta cu tot inclus în aceeași zi.")}`,
};
