// Schema BreadcrumbList condiviso dalle pagine SEO (Fase 3): evita di riscrivere la stessa
// struttura JSON-LD in ogni route.
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
