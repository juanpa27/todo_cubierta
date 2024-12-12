"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría obtener más información sobre sus servicios de cubiertas."
  );
  const whatsappLink = `https://api.whatsapp.com/send?phone=595985469000&text=${whatsappMessage}`;

  return (
    <section className="relative bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-base-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-oswald font-extrabold text-base-content sm:text-5xl md:text-6xl">
                  <span className="block xl:inline text-shadow-glow">
                    Todo Cubierta
                  </span>{" "}
                </h1>
                <h2 className="text-3xl font-roboto font-bold text-primary sm:text-5xl md:text-6xl">
                  <span className="block text-primary xl:inline">
                    Líderes en cubiertas para todo tipo de vehículos.
                  </span>
                </h2>
                <p className="mt-3 text-base font-roboto text-base-content/70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Te ofrecemos las mejores marcas, calidad garantizada y un
                  servicio que se adapta a tus necesidades.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/marcas" className="btn btn-primary hover:shadow-secondary/80 transition-all duration-300">
                      Ver Marcas
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-secondary flex items-center gap-2"
                    >
                      <FaWhatsapp className="w-6 h-6" />
                      Contáctanos por WhatsApp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/images/header/header-large.webp"
          alt="Cubiertas de alta calidad"
          layout="fill"
          objectFit="cover"
          priority
          sizes="(max-width: 768px) 768px, 
               (max-width: 1024px) 1024px, 
               1920px"
          srcSet=" 
          /images/header/header-small.webp 768w,
          /images/header/header-medium.webp 1024w,
          /images/header/header-large.webp 1920w"
        />
      </div>
    </section>
  );
}
