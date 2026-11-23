import { site } from "../site.mjs";
import { pageHero } from "../layout.mjs";

const path = "contact/";

export default {
  path,
  title: `Cere ofertă de catering pentru firmă | ${site.name}`,
  description: "Cere o ofertă de catering pentru firmă: prânz pentru angajați, coffee break sau eveniment corporate în București. Răspundem în aceeași zi lucrătoare.",
  ogImage: "garnish",
  breadcrumbs: [{ name: "Cere ofertă", path }],
  jsonLd: [{ "@type": "ContactPage", name: "Cere ofertă", url: site.url + path, about: { "@id": site.url + "#business" } }],
  // Formularul trimite prin e-mail (mailto), ca să funcționeze fără server. La lansare se poate lega de un endpoint propriu.
  body: (p, crumbs) => `
${pageHero({
  crumbs,
  image: "garnish",
  alt: "Bucătar care ornează o porție cu verdețuri",
  eyebrow: "Răspuns în aceeași zi lucrătoare",
  title: "Cere ofertă de catering <em>pentru firmă</em>",
  lead: "Două minute pentru formular, iar în aceeași zi lucrătoare primești meniul propus și prețul final, cu livrarea inclusă. Pentru prânzul zilnic, prima degustare pentru 5 colegi este gratuită.",
})}

    <section><div class="wrap contact-grid">
        <form class="form" action="mailto:${site.email}" method="post" enctype="text/plain">
          <div class="row">
            <div><label for="firma">Companie</label><input id="firma" name="Companie" required autocomplete="organization"></div>
            <div><label for="nume">Persoană de contact</label><input id="nume" name="Persoana de contact" autocomplete="name"></div>
          </div>
          <div class="row">
            <div><label for="email">E-mail</label><input id="email" name="Email" type="email" required autocomplete="email"></div>
            <div><label for="tel">Telefon (te sunăm doar dacă ne ceri)</label><input id="tel" name="Telefon" type="tel" autocomplete="tel"></div>
          </div>
          <div class="row">
            <div><label for="serviciu">Serviciu</label>
              <select id="serviciu" name="Serviciu">
                <option>Prânz pentru angajați</option>
                <option>Coffee break</option>
                <option>Eveniment corporate</option>
                <option>Finger food</option>
              </select></div>
            <div><label for="persoane">Număr de persoane</label><input id="persoane" name="Persoane" type="number" min="1" inputmode="numeric"></div>
          </div>
          <div class="row">
            <div><label for="data">Data (sau data de început)</label><input id="data" name="Data" type="date"></div>
            <div><label for="buget">Buget pe persoană (opțional)</label><input id="buget" name="Buget" placeholder="ex. 45 lei"></div>
          </div>
          <div><label for="detalii">Detalii</label><textarea id="detalii" name="Detalii" rows="4" placeholder="Adresa de livrare, ora, restricții alimentare…"></textarea></div>
          <p class="hint">Obligatorii sunt doar compania și e-mailul. Folosim datele doar ca să îți trimitem oferta și nu le transmitem terților.</p>
          <div><button class="btn" type="submit">Trimite și primește oferta</button></div>
        </form>
        <aside class="contact-aside">
          <h2>Ce urmează</h2>
          <ol class="next-steps">
            <li>Citim cererea și, dacă lipsește ceva, te întrebăm pe e-mail.</li>
            <li>În aceeași zi lucrătoare primești meniul și prețul final.</li>
            <li>Pentru prânz, programăm degustarea gratuită pentru 5 colegi.</li>
          </ol>
          <h2>Contact direct</h2>
          <p><strong>Telefon</strong><a href="tel:${site.phoneHref}">${site.phone}</a></p>
          <p><strong>E-mail</strong><a href="mailto:${site.email}">${site.email}</a></p>
          <p><strong>Program</strong>${site.hours}</p>
          <p><strong>Zonă de livrare</strong>${site.areaServed.join(", ")}</p>
        </aside>
    </div></section>
    <script>
(function(){var q=new URLSearchParams(location.search);["serviciu","persoane","detalii"].forEach(function(k){var v=q.get(k),el=document.getElementById(k);if(v&&el)el.value=v});})();
    </script>`,
};
