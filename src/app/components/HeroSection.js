"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
  const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios de cubiertas.");
  const whatsappLink = `https://api.whatsapp.com/send?phone=595985469000&text=${whatsappMessage}`;

  return (
    <div className="hero min-h-screen relative">
      <Image
        src="/images/header/header-large.webp"
        alt="Cubiertas de alta calidad"
        layout="fill"
        objectFit="cover"
        priority
        sizes="100vw"
        className="hero-background"
      />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content z-10">
        <div className="max-w-3xl">
          <h1 className="mb-2 text-5xl font-oswald font-extrabold text-white sm:text-6xl md:text-8xl">
            <span className="block xl:inline text-shadow-glow">Todo Cubierta</span>
          </h1>
          <h2 className="mb-5 text-3xl font-roboto font-bold text-primary sm:text-4xl md:text-5xl">
            <span className="block xl:inline">
              Líderes en cubiertas para todo tipo de vehículos.
            </span>
          </h2>
          <p className="mb-5 text-lg font-roboto text-white sm:text-xl md:text-2xl">
            Te ofrecemos las mejores marcas, calidad garantizada y un servicio 
            que se adapta a tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/marcas" className="btn btn-primary btn-lg">
              Ver Marcas
            </Link>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-secondary btn-lg flex items-center gap-2"
            >
              <FaWhatsapp className="w-6 h-6" />
              Contáctanos por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

