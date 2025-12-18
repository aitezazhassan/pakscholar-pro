import { MetadataRoute } from 'next';
import { getAllEssays, getAllPastPapers } from '@/lib/keystatic/reader';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pakscholarpro.com';
  
  // Get all essays for dynamic routes
  const essays = await getAllEssays();
  const essayUrls = essays.map((essay) => ({
    url: `${baseUrl}/essays/${essay.slug}`,
    lastModified: essay.entry.publishedDate 
      ? new Date(essay.entry.publishedDate) 
      : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/essays`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/practice`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/past-papers`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  return [...routes, ...essayUrls];
}
