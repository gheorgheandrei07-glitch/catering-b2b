import { site } from "../site.mjs";

const path = "contact/";

export default {
  path,
  title: `Cere ofertă de catering pentru firmă | ${site.name}`,
  description: "Cere o ofertă de catering pentru firmă: prânz pentru angajați, coffee break sau eveniment corporate în București. Răspundem în aceeași zi lucrătoare.",
  breadcrumbs: [{ name: "Cere ofertă", path }],
  jsonLd: [{ "@type": "ContactPage", name: "Cere ofertă", url: site.url + path, about: { "@id": site.url + "#business" } }],
  // Formularul trimite prin e-mail (mailto), ca să funcționeze fără server. La lansare se poate lega de un endpoint propriu.
  body: (p, crumbs) => `
    <div class="page-hero"><div class="wrap">
      ${crumbs}
      <h1>Cere ofertă de catering pentru firmă</h1>
      <p class="lead">Completează formularul și primești meniul și prețul final în aceeași zi lucrătoare. Dacă preferi, sună-ne la <a href="tel:${site.phoneHref}">${site.phone}</a>.</p>
    </div></div>

    <section style="padding-top:16px"><div class="wrap">
      <div class="grid grid-2" style="grid-template-columns:1.4fr .6fr;gap:40px">
        <form class="form card" action="mailto:${site.email}" method="post" enctype="text/plain">
          <div class="row">
            <div><label for="firma">Companie</label><input id="firma" name="Companie" required autocomplete="organization"></div>
            <div><label for="nume">Persoană de contact</label><input id="nume" name="Persoana de contact" required autocomplete="name"></div>
          </div>
          <div class="row">
            <div><label for="email">E-mail</label><input id="email" name="Email" type="email" required autocomplete="email"></div>
            <div><label for="tel">Telefon</label><input id="tel" name="Telefon" type="tel" autocomplete="tel"></div>
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
          <div><label for="detalii">Detalii</label><textarea id="detalii" name="Detalii" rows="5" placeholder="Adresa de livrare, ora, restricții alimentare…"></textarea></div>
          <p class="hint">Folosim datele doar ca să îți trimitem oferta. Nu le transmitem terților.</p>
          <div><button class="btn" type="submit">Trimite cererea</button></div>
        </form>
        <aside>
          <h2 style="font-size:1.4rem">Contact direct</h2>
          <p><strong>Telefon</strong><br><a href="tel:${site.phoneHref}">${site.phone}</a></p>
          <p><strong>E-mail</strong><br><a href="mailto:${site.email}">${site.email}</a></p>
          <p><strong>Program</strong><br>${site.hours}</p>
          <p><strong>Zonă de livrare</strong><br>${site.areaServed.join(", ")}</p>
        </aside>
      </div>
    </div></section>
    <style>@media (max-width:820px){main .grid-2[style]{grid-template-columns:1fr!important}}</style>`,
};
