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
    <div className="relative w-full min-h-screen overflow-x-hidden bg-overlay-cyan">
      <Header />

      <main className="relative z-10 w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8 sm:py-2 lg:py-3">
        <Hero />
        <SearchBar />
        <VisualSection />
        <BottomSection countdown={countdown} />
      </main>
    </div>
  )
}