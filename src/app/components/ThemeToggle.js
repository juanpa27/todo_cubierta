'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <label className="swap swap-rotate">
      <input 
        type="checkbox" 
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <Sun className="swap-on fill-current w-6 h-6" />
      <Moon className="swap-off fill-current w-6 h-6" />
    </label>
  )
}

