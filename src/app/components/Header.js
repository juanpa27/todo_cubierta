'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import ThemeToggle from './ThemeToggle'
import { Menu } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
      ${isScrolled ? "bg-base-100/80 dark:bg-base-300/80 backdrop-blur-md shadow-lg" : "bg-base-100 dark:bg-base-300 shadow-md"}`}>
      <div className={`navbar container mx-auto transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <Menu className={`${isScrolled ? 'h-5 w-5' : 'h-6 w-6'} text-base-content`} />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-base-300 rounded-box w-52">
              <li><Link href="/marcas">Marcas</Link></li>
              <li><Link href="/servicios">Servicios</Link></li>
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <Link href="/" className="flex items-center">
            <Image
              src={resolvedTheme === 'dark' ? "/logo_todo_cubierta_dark.webp" : "/logo_todo_cubierta.webp"}
              alt="Todo Cubierta Logo"
              width={isScrolled ? 150 : 180}
              height={isScrolled ? 150 : 180}
              className="mr-3 transition-all duration-300"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/marcas" className={`btn btn-ghost text-base-content ${isScrolled ? 'btn-sm' : ''}`}>Marcas</Link></li>
            <li><Link href="/servicios" className={`btn btn-ghost text-base-content ${isScrolled ? 'btn-sm' : ''}`}>Servicios</Link></li>
            <li><Link href="/nosotros" className={`btn btn-ghost text-base-content ${isScrolled ? 'btn-sm' : ''}`}>Nosotros</Link></li>
            <li><Link href="/contacto" className={`btn btn-ghost text-base-content ${isScrolled ? 'btn-sm' : ''}`}>Contacto</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

