import { site } from "../site.mjs";
import { pageHero } from "../layout.mjs";

// GitHub Pages servește 404.html de la rădăcină pentru orice URL inexistent, deci linkurile sunt absolute față de site.url.
export default {
  path: "404.html",
  output: "404.html",
  noindex: true,
  title: `Pagina nu există | ${site.name}`,
  description: "Pagina căutată nu există.",
  absolute: true,
  body: () =>
    pageHero({
      crumbs: "",
      image: "plate",
      alt: "",
      eyebrow: "Eroare 404",
      title: "Pagina <em>nu există</em>",
      lead: "Poate a fost mutată. Încearcă de pe prima pagină sau cere direct o ofertă.",
      actions: `<a class="btn btn-light" href="${site.url}">Prima pagină</a><a class="btn btn-ghost" href="${site.url}contact/">Cere ofertă</a>`,
    }),
};
