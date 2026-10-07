export function portfolioHead(title: string, description: string) {
  return { meta: [
    { title: `${title} — Shalabh Kumar Jha | CSE Student` },
    { name: 'description', content: description },
    { property: 'og:title', content: `${title} — Shalabh Kumar Jha | CSE Student` },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] };
}
