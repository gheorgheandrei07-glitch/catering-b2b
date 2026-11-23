// Datele firmei — o singură sursă pentru header, footer, JSON-LD, sitemap și llms.txt.
// Înlocuiește valorile marcate PLACEHOLDER cu datele reale înainte de lansare.
export const site = {
  name: "Mâncărescu",
  legalName: "Mâncărescu Catering SRL", // PLACEHOLDER
  tagline: "Catering pentru firme",
  // Adresa publică a site-ului. La mutarea pe domeniu propriu, schimbă doar aici și rulează `npm run build`.
  url: "https://mancarescu.ro/",
  indexNowKey: "9e2795c55e2d1733239be4157ea7664f",
  city: "București",
  region: "București",
  phone: "+40 700 000 000", // PLACEHOLDER
  phoneHref: "+40700000000", // PLACEHOLDER
  email: "office@mancarescu.ro",
  hours: "Luni–Vineri, 08:00–18:00",
  hoursSchema: "Mo-Fr 08:00-18:00",
  areaServed: ["București", "Ilfov", "Otopeni", "Voluntari", "Pipera"],
  // Descrierea standard: refolosește-o identic peste tot (Google Business Profile, LinkedIn, directoare).
  description:
    "Mâncărescu este o firmă de catering din București care livrează prânz zilnic pentru angajați, coffee break pentru ședințe și conferințe și meniuri pentru evenimente corporate, cu factură pe firmă și livrare la oră fixă în București și Ilfov.",
};

export const nav = [
  { href: "pranz-angajati/", label: "Prânz pentru angajați" },
  { href: "coffee-break/", label: "Coffee break" },
  { href: "catering-evenimente-corporate/", label: "Evenimente corporate" },
  { href: "meniu/", label: "Meniu și prețuri" },
  { href: "ghid/cat-costa-catering-pentru-firme/", label: "Ghid prețuri" },
];
