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
      bg: 'from-[#003399] to-[#002277]',
      text: 'text-white',
      shadow: 'shadow-[#003399]/20'
    }
  },
  {
    name: 'Nexen Tire',
    image: '/marcas/nexed.webp',
    description: 'Innovación y rendimiento superior en cada neumático.',
    slug: 'nexen',
    colors: {
      bg: 'from-[#4B0082] to-[#380062]',
      text: 'text-white',
      shadow: 'shadow-purple-500/20'
    }
  },
  {
    name: 'Goodyear',
    image: '/marcas/goodyear.webp',
    description: 'Más de 100 años de excelencia en la fabricación de neumáticos.',
    slug: 'goodyear',
    colors: {
      bg: 'from-[#0046AD] to-[#003380]',
      text: 'text-[#FFDB00]',
      shadow: 'shadow-[#FFDB00]/20'
    }
  },
  {
    name: 'Kumho Tire',
    image: '/marcas/kumo.webp',
    description: 'Tecnología coreana de vanguardia en neumáticos.',
    slug: 'kumho',
    colors: {
      bg: 'from-black to-zinc-900',
      text: 'text-white',
      shadow: 'shadow-red-500/20'
    }
  },
  {
    name: 'Giti',
    image: '/marcas/giti.webp',
    description: 'Calidad confiable y rendimiento excepcional.',
    slug: 'giti',
    colors: {
      bg: 'from-[#FFD700] to-[#FFC700]',
      text: 'text-black',
      shadow: 'shadow-yellow-500/20'
    }
  },
  {
    name: 'Pirelli',
    image: '/marcas/pirelli.webp',
    description: 'Prestigio italiano en neumáticos de alto rendimiento.',
    slug: 'pirelli',
    colors: {
      bg: 'from-[#FF0000] to-[#CC0000]',
      text: 'text-white',
      shadow: 'shadow-red-500/20'
    }
  },
  {
    name: 'Michelin',
    image: '/marcas/michelin.webp',
    description: 'El estándar global en calidad y seguridad de neumáticos.',
    slug: 'michelin',
    colors: {
      bg: 'from-[#005BBB] to-[#004799]',
      text: 'text-white',
      shadow: 'shadow-blue-500/20'
    }
  }
]

export default function BrandCards() {
  return (
    <section className="py-24 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestras Marcas Premium</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link 
              href={`/marcas/${brand.slug}`}
              key={brand.slug} 
              className={`
                group 
                relative 
                overflow-hidden 
                rounded-xl
                bg-gradient-to-br 
                ${brand.colors.bg}
                ${brand.colors.shadow} 
                transition-all 
                duration-300 
                hover:scale-105
                hover:shadow-xl
              `}
            >
              <div className="aspect-[16/9] p-6 flex flex-col items-center justify-center">
                <div className="relative w-full h-24 mb-4">
                  <Image
                    src={brand.image}
                    alt={`Logo de ${brand.name}`}
                    layout="fill"
                    objectFit="contain"
                    className="drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className={`text-xl font-bold mb-2 ${brand.colors.text}`}>
                    {brand.name}
                  </h3>
                  <p className={`text-sm ${brand.colors.text} opacity-90`}>
                    {brand.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

