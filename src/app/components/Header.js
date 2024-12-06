"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { 
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
      ${
        isScrolled
          ? "bg-neutral/80 dark:bg-base-300/80 backdrop-blur-md shadow-lg"
          : "bg-neutral dark:bg-base-300 shadow-md"
      }`}
    >
      <div
        className={`navbar container mx-auto transition-all duration-300
        ${isScrolled ? "h-16" : "h-20"}`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <Menu
                className={`transition-all duration-300 ${
                  isScrolled ? "h-5 w-5" : "h-6 w-6"
                }`}
              />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/marcas">Marcas</Link>
              </li>
              <li>
                <Link href="/about">Servicios</Link>
              </li>
              <li>
                <Link href="/about">Nosotros</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="flex items-center">
            <Image
              src="/tc_logo.svg"
              alt="Todo Cubierta Logo"
              width={isScrolled ? 90 : 120}
              height={isScrolled ? 90 : 120}
              className="mr-3 transition-all duration-300"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/marcas"
                className={`btn btn-ghost ${isScrolled ? "btn-sm" : ""}`}
              >
                Marcas
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className={`btn btn-ghost ${isScrolled ? "btn-sm" : ""}`}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`btn btn-ghost ${isScrolled ? "btn-sm" : ""}`}
              >
                Nosotros
              </Link>
            </li>
           
            <li>
              <Link
                href="/contacto"
                className={`btn btn-ghost ${isScrolled ? "btn-sm" : ""}`}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
