import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-base-100 shadow-lg">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <Menu className="h-6 w-6" />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/about">Nosotros</Link></li>
              <li><Link href="/marcas">Marcas</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <Link href="/" className="flex items-center">
            <Image src="/tc_logo.svg" alt="Todo Cubierta Logo" width={120} height={120} className="mr-3" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/about" className="btn btn-ghost">Nosotros</Link></li>
            <li><Link href="/marcas" className="btn btn-ghost">Marcas</Link></li>
            <li><Link href="/contacto" className="btn btn-ghost">Contacto</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

