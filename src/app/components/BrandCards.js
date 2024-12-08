'use client'

import Image from 'next/image'
import Link from 'next/link'

const brands = [
  {
    name: 'GT Radial',
    image: '/marcas/gtradial.webp',
    description: 'Neumáticos de alta calidad con tecnología avanzada para todo tipo de vehículos.',
    slug: 'gt-radial',
    colors: {
      bg: 'bg-gradient-to-br from-[#003399] to-[#002277]',
      text: 'text-white',
      shadow: 'shadow-[#003399]/20',
    },
  },
  {
    name: 'Nexen Tire',
    image: '/marcas/nexed.webp',
    description: 'Innovación y rendimiento superior en cada neumático.',
    slug: 'nexen',
    colors: {
      bg: 'bg-gradient-to-br from-[#4B0082] to-[#380062]',
      text: 'text-white',
      shadow: 'shadow-purple-500/20',
    },
  },
  {
    name: 'Goodyear',
    image: '/marcas/goodyear.webp',
    description: 'Más de 100 años de excelencia en la fabricación de neumáticos.',
    slug: 'goodyear',
    colors: {
      bg: 'bg-gradient-to-br from-[#0046AD] to-[#003380]',
      text: 'text-[#FFDB00]',
      shadow: 'shadow-[#FFDB00]/20',
    },
  },
  {
    name: 'Kumho Tire',
    image: '/marcas/kumo.webp',
    description: 'Tecnología coreana de vanguardia en neumáticos.',
    slug: 'kumho',
    colors: {
      bg: 'bg-gradient-to-br from-black to-zinc-900',
      text: 'text-white',
      shadow: 'shadow-red-500/20',
    },
  },
  {
    name: 'Giti',
    image: '/marcas/giti.webp',
    description: 'Calidad confiable y rendimiento excepcional.',
    slug: 'giti',
    colors: {
      bg: 'bg-gradient-to-br from-[#FFD700] to-[#FFC700]',
      text: 'text-black',
      shadow: 'shadow-yellow-500/20',
    },
  },
  {
    name: 'Pirelli',
    image: '/marcas/pirelli.webp',
    description: 'Prestigio italiano en neumáticos de alto rendimiento.',
    slug: 'pirelli',
    colors: {
      bg: 'bg-gradient-to-br from-[#FF0000] to-[#CC0000]',
      text: 'text-yellow',
      shadow: 'shadow-red-500/20',
    },
  },
  {
    name: 'Michelin',
    image: '/marcas/michelin.webp',
    description: 'El estándar global en calidad y seguridad de neumáticos.',
    slug: 'michelin',
    colors: {
      bg: 'bg-gradient-to-br from-[#005BBB] to-[#004799]',
      text: 'text-white',
      shadow: 'shadow-blue-500/20',
    },
  },
]

export default function BrandCards() {
  return (
    <section className="py-24 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestras Marcas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {brands.map((brand) => (
            <Link
              href={`/marcas/${brand.slug}`}
              key={brand.slug}
              className={`card w-full bg-base-100 shadow-xl hover:scale-105 transform transition-all duration-300 ${brand.colors.shadow}`}
            >
              {/* Fondo blanco detrás de la imagen y agrandarla */}
              <figure className="relative bg-white p-6 h-64 flex items-center justify-center">
                <Image
                  src={brand.image}
                  alt={`Logo de ${brand.name}`}
                  width={250} // Agrandamos el logo
                  height={200} // Ajustamos el tamaño
                  style={{ objectFit: 'contain' }}
                  className="mx-auto"
                />
              </figure>
              <div
                className={`card-body ${brand.colors.bg} text-center rounded-b-lg`}
              >
                <h3 className={`card-title ${brand.colors.text} justify-center text-2xl`}>
                  {brand.name}
                </h3>
                <p className={`${brand.colors.text} opacity-90 text-left mt-4`}>
                  {brand.description}
                </p>
                <div className="card-actions justify-center mt-6">
                  <button
                    className="btn btn-outline text-white border border-white"
                  >
                    Ver Más
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
