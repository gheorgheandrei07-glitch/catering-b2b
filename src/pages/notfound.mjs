import { site } from "../site.mjs";

// GitHub Pages servește 404.html de la rădăcină pentru orice URL inexistent, deci linkurile sunt absolute față de site.url.
export default {
  path: "404.html",
  output: "404.html",
  noindex: true,
  title: `Pagina nu există | ${site.name}`,
  description: "Pagina căutată nu există.",
  absolute: true,
  body: () => `
    <section><div class="wrap" style="text-align:center;padding:40px 0">
      <h1>Pagina nu există</h1>
      <p class="lead" style="margin:0 auto 24px">Poate a fost mutată. Încearcă de pe prima pagină sau cere direct o ofertă.</p>
      <p><a class="btn" href="${site.url}">Prima pagină</a> <a class="btn btn-ghost" href="${site.url}contact/">Cere ofertă</a></p>
    </div></section>`,
};
