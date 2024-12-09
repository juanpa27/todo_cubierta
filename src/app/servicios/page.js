import Link from 'next/link'
import { Wrench, Gauge, Battery, FuelIcon as Oil, Filter, BracketsIcon as Brake, ShipWheelIcon as SteeringWheel, Hammer, ExternalLink } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import ServiceCard from '../components/ServiceCard'

export const metadata = {
  title: 'Nuestros Servicios | Todo Cubierta',
  description: 'Descubre nuestra amplia gama de servicios automotrices, desde neumáticos hasta mantenimiento general y reparaciones. Calidad y experiencia en Todo Cubierta.',
  openGraph: {
    title: 'Servicios Automotrices de Calidad | Todo Cubierta',
    description: 'Ofrecemos servicios completos para tu vehículo: neumáticos, mantenimiento, frenos y más. Confía en los expertos de Todo Cubierta.',
    images: [
      {
        url: 'https://todocubierta.com/images/servicios-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Servicios automotrices en Todo Cubierta',
      },
    ],
  },
};

const serviceCategories = [
  {
    title: "Servicios de Neumáticos",
    icon: <Wrench className="w-8 h-8" />,
    services: [
      {
        name: "Desarmado y armado de cubiertas",
        description: "Servicio profesional de desmontaje y montaje de neumáticos para garantizar un ajuste seguro y preciso.",
        price: "Por cubierta",
        image: "/servicios/servicio1.webp"
      },
      {
        name: "Balanceo automóvil",
        description: "Equilibrado preciso de las ruedas para reducir vibraciones y mejorar el rendimiento del vehículo.",
        price: "Por rueda",
        image: "/servicios/servicio1.webp"
      },
      {
        name: "Balanceo camioneta",
        description: "Servicio especializado de balanceo para camionetas, asegurando un manejo suave y seguro.",
        price: "Por rueda",
        image: "/servicios/servicio1.webp"
      },
      {
        name: "Alineación auto",
        description: "Ajuste preciso de los ángulos de las ruedas para optimizar el manejo y reducir el desgaste de los neumáticos.",
        price: "Servicio completo",
        image: "/servicios/servicio2.webp"
      },
      {
        name: "Alineación camioneta",
        description: "Alineación especializada para camionetas, mejorando la estabilidad y el control del vehículo.",
        price: "Servicio completo",
        image: "/servicios/servicio2.webp"
      },
      {
        name: "Rotación de cubiertas",
        description: "Cambio sistemático de la posición de los neumáticos para asegurar un desgaste uniforme y prolongar su vida útil.",
        price: "Servicio completo",
        image: "/servicios/servicio2.webp"
      }
    ]
  },
  {
    title: "Mantenimiento General",
    icon: <Gauge className="w-8 h-8" />,
    services: [
      {
        name: "Batería",
        description: "Diagnóstico, mantenimiento y reemplazo de baterías para garantizar un arranque confiable del vehículo.",
        price: "Según servicio",
        image: "/servicios/servicio2.webp"
      },
      {
        name: "Cambio de aceite",
        description: "Sustitución del aceite del motor y filtro para mantener el rendimiento y la longevidad del motor.",
        price: "Servicio completo",
        image: "/servicios/servicio2.webp"
      },
      {
        name: "Cambio de filtros de A/A y ventilación",
        description: "Reemplazo de filtros de aire acondicionado y ventilación para mejorar la calidad del aire en el interior del vehículo.",
        price: "Por filtro",
        image: "/servicios/servicio2.webp"
      }
    ]
  },
  {
    title: "Sistema de Frenos y Suspensión",
    icon: <Brake className="w-8 h-8" />,
    services: [
      {
        name: "Frenos",
        description: "Inspección, mantenimiento y reparación del sistema de frenos para garantizar la seguridad del vehículo.",
        price: "Según componente",
        image: "/servicios/servicio3.webp"
      },
      {
        name: "Reparación de dirección y suspensión",
        description: "Diagnóstico y reparación de problemas en el sistema de dirección y suspensión para mejorar el manejo y confort.",
        price: "Según reparación",
        image: "/servicios/servicio3.webp"
      },
      {
        name: "Cambio de amortiguadores",
        description: "Sustitución de amortiguadores desgastados para mejorar la estabilidad y el confort de marcha.",
        price: "Por unidad",
        image: "/servicios/servicio3.webp"
      }
    ]
  }
]

export default function ServiciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Todo Cubierta",
            "image": "https://todocubierta.com/images/logo.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Avenida Fernando de la Mora 3177",
              "addressLocality": "Asunción",
              "addressCountry": "PY"
            },
            "telephone": "+595985469000",
            "openingHours": "Mo-Fr 08:00-18:00",
            "priceRange": "$$",
            "servesCuisine": "Servicios automotrices"
          })
        }}
      />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h1>
        
        {serviceCategories.map((category, index) => (
          <section key={index} className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
              {category.icon}
              {category.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <ServiceCard key={serviceIndex} service={service} />
              ))}
            </div>
          </section>
        ))}

        <div className="mt-16 text-center">
          <Link href="https://api.whatsapp.com/send?phone=595985469000" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg gap-2">
            <FaWhatsapp className="w-6 h-6" />
            Contactar por WhatsApp
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </>
  )
}

