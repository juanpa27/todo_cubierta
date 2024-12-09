import BrandCard from '../components/BrandCard'

export const metadata = {
  title: 'Nuestras Marcas | Todo Cubierta',
  description: 'Descubre las mejores marcas de neumáticos y servicios automotrices en Todo Cubierta. Calidad y rendimiento garantizados.',
  openGraph: {
    title: 'Marcas de Calidad en Todo Cubierta',
    description: 'Explora nuestra selección de marcas líderes en neumáticos y servicios automotrices. Encuentra la mejor opción para tu vehículo.',
    images: [
      {
        url: 'https://todocubierta.com/images/marcas-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Marcas en Todo Cubierta',
      },
    ],
  },
}

const brands = [
  {
    name: 'GT Radial',
    image: '/marcas/gtradial.webp',
    description: 'Neumáticos de alta calidad con tecnología avanzada para todo tipo de vehículos.',
    history: 'GT Radial, fundada en 1951, se ha convertido en una de las marcas de neumáticos de más rápido crecimiento en el mundo. Con un enfoque en la innovación y la calidad, GT Radial ofrece una amplia gama de neumáticos para automóviles, camionetas y vehículos comerciales.',
    slug: 'gt-radial',
  },
  {
    name: 'Nexen Tire',
    image: '/marcas/nexed.webp',
    description: 'Innovación y rendimiento superior en cada neumático.',
    history: 'Nexen Tire, establecida en 1942 en Corea del Sur, ha crecido hasta convertirse en un líder global en la industria de neumáticos. Con un fuerte enfoque en la investigación y desarrollo, Nexen Tire es conocida por sus neumáticos de alto rendimiento y su compromiso con la sostenibilidad.',
    slug: 'nexen',
  },
  {
    name: 'Goodyear',
    image: '/marcas/goodyear.webp',
    description: 'Más de 100 años de excelencia en la fabricación de neumáticos.',
    history: 'Goodyear, fundada en 1898 en Akron, Ohio, es una de las marcas de neumáticos más reconocidas del mundo. Con una rica historia de innovación, incluyendo el desarrollo de neumáticos para la NASA, Goodyear continúa siendo líder en tecnología y rendimiento de neumáticos.',
    slug: 'goodyear',
  },
  {
    name: 'Kumho Tire',
    image: '/marcas/kumo.webp',
    description: 'Tecnología coreana de vanguardia en neumáticos.',
    history: 'Kumho Tire, fundada en 1960 en Corea del Sur, se ha convertido en un importante jugador en la industria global de neumáticos. Conocida por su innovación tecnológica y diseños únicos, Kumho ofrece neumáticos de alta calidad para una amplia gama de vehículos.',
    slug: 'kumho',
  },
  {
    name: 'Giti',
    image: '/marcas/giti.webp',
    description: 'Calidad confiable y rendimiento excepcional.',
    history: 'Giti Tire, con raíces que se remontan a 1951, se ha convertido en uno de los mayores fabricantes de neumáticos del mundo. Con sede en Singapur, Giti es conocida por su compromiso con la calidad, la innovación y la sostenibilidad en la producción de neumáticos.',
    slug: 'giti',
  },
  {
    name: 'Pirelli',
    image: '/marcas/pirelli.webp',
    description: 'Prestigio italiano en neumáticos de alto rendimiento.',
    history: 'Pirelli, fundada en 1872 en Milán, Italia, es sinónimo de neumáticos de alta gama y rendimiento. Con una fuerte presencia en el automovilismo, incluyendo la Fórmula 1, Pirelli es conocida por su tecnología de punta y su compromiso con la excelencia.',
    slug: 'pirelli',
  },
  {
    name: 'Michelin',
    image: '/marcas/michelin.webp',
    description: 'El estándar global en calidad y seguridad de neumáticos.',
    history: 'Michelin, fundada en 1889 en Francia, es una de las marcas de neumáticos más reconocidas del mundo. Pionera en numerosas innovaciones, incluyendo el neumático radial, Michelin es conocida por su compromiso con la seguridad, la eficiencia y la sostenibilidad.',
    slug: 'michelin',
  }
]

export default function MarcasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": brands.map((brand, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Brand",
                "name": brand.name,
                "image": `https://todocubierta.com${brand.image}`,
                "description": brand.description
              }
            }))
          })
        }}
      />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Nuestras Marcas</h1>
        <p className="text-lg text-center mb-12">
          Descubre nuestra selección de marcas líderes en la industria de neumáticos. 
          Cada marca ofrece calidad, innovación y rendimiento excepcionales para satisfacer las necesidades de tu vehículo.
        </p>
        
        <div className="space-y-12">
          {brands.map((brand) => (
            <BrandCard key={brand.slug} brand={brand} />
          ))}
        </div>
      </main>
    </>
  )
}

