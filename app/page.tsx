'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Hero from './component/splash/Hero'
import SearchBar from './component/splash/SearchBar'
import VisualSection from './component/splash/VisualSection'
import BottomSection from './component/splash/BottomSection'

export default function SplashPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isCountdownFinished, setIsCountdownFinished] = useState(false)

  useEffect(() => {
    // Target date: January 12, 2026 at 12:00 AM (midnight)
    const targetDate = new Date('2026-01-14T00:00:00').getTime()

    const calculateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      // If countdown is finished, redirect to home page
      if (distance <= 0) {
        setIsCountdownFinished(true)
        router.push('/home') // Redirect to home page
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }

    calculateCountdown()

    // Update every second
    const timer = setInterval(calculateCountdown, 1000)

    return () => clearInterval(timer)
  }, [router])

  if (isCountdownFinished) {
    return null
  }

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-cyan-500/10">
      <main className="relative z-10 w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8 sm:py-2 lg:py-3">
        <Hero />
        <SearchBar />
        <VisualSection />
        <BottomSection countdown={countdown} />
      </main>
    </div>
  )
}