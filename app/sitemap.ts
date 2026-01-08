import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://slimmentorship.online'
  
  // Check if launch date has passed
  const launchDate = new Date('2026-01-12T00:00:00')
  const now = new Date()
  const hasLaunched = now >= launchDate

  // Before launch: only show /home in sitemap
  // After launch: show / (which redirects to /home anyway)
  return [
    {
      url: hasLaunched ? baseUrl : `${baseUrl}/home`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add more pages after build:
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}