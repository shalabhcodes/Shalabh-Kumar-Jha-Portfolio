export function portfolioHead(title: string, description: string) {
  return { meta: [
    { title: `${title} — Your Name | CSE Student` },
    { name: 'description', content: description },
    { property: 'og:title', content: `${title} — Your Name | CSE Student` },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] };
}
