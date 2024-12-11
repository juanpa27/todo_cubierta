'use client'

import { useState, useEffect } from 'react'
import { ArrowUpCircle } from 'lucide-react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 btn btn-circle btn-primary"
      aria-label="Volver arriba"
    >
      <ArrowUpCircle className="w-6 h-6" />
    </button>
  )
}

