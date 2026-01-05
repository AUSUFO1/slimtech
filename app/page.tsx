'use client'
import { useState, useEffect } from 'react'
import Header from './component/splash/Header'
import Hero from './component/splash/Hero'
import SearchBar from './component/splash/SearchBar'
import VisualSection from './component/splash/VisualSection'
import BottomSection from './component/splash/BottomSection'

export default function SplashPage() {
  const [countdown, setCountdown] = useState({ hours: 12, minutes: 25, seconds: 4 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev
        if (seconds > 0) seconds--
        else if (minutes > 0) { minutes--; seconds = 59 }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59 }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    // OPTION 1: Remove min-h-screen entirely - content determines height
    <div className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0 bg-overlay-cyan z-0"></div>
      <Header />

      {/* REDUCED PADDING - Changed py-2 sm:py-6 lg:py-6 xl:py-4 to smaller values */}
      <main className="relative z-10 w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 xl:py-6">
        <Hero />
        <SearchBar />
        <VisualSection />
        <BottomSection countdown={countdown} />
      </main>
    </div>
  )
}