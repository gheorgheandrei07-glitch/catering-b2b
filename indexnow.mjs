// Anunță Bing, Yandex, Seznam etc. (prin IndexNow) că paginile din sitemap s-au schimbat. Rulează după fiecare publicare:
// npm run indexnow
import { readFile } from "node:fs/promises";
import { site } from "./src/site.mjs";

const sitemap = await readFile("docs/sitemap.xml", "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const host = new URL(site.url).host;

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: site.indexNowKey, keyLocation: `${site.url}${site.indexNowKey}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} pentru ${urlList.length} adrese`);
