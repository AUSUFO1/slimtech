import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://slimmentorship.online'
  
  // Check if launch date has passed
  const launchDate = new Date('2026-01-12T00:00:00')
  const now = new Date()
  const hasLaunched = now >= launchDate

  return {
    rules: {
      userAgent: '*',
      allow: hasLaunched ? '/' : '/home', // After launch, allow everything
      disallow: hasLaunched 
        ? ['/api/', '/payment/','/_next/'] // After launch: block only internal routes
        : ['/', '/api/', '/payment/', '/_next/'], // Before launch: block countdown page too
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}