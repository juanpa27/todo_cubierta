'use client'

import Link from 'next/link'
import { Wrench, Gauge, Battery, FuelIcon as Oil, Filter, BracketsIcon as Brake, ShipWheelIcon as SteeringWheel, Hammer } from 'lucide-react'

const serviceCategories = [
  {
    title: "Servicios de Neumáticos",
    icon: <Wrench className="w-6 h-6" />,
    services: [
      "Desarmado y armado de cubiertas (por cubierta)",
      "Balanceo automóvil (por rueda)",
      "Balanceo camioneta (por rueda)",
      "Alineación auto",
      "Alineación camioneta",
      "Rotación de cubiertas"
    ]
  },
  {
    title: "Mantenimiento General",
    icon: <Gauge className="w-6 h-6" />,
    services: [
      "Batería",
      "Cambio de aceite",
      "Cambio de filtros de A/A y ventilación de autos"
    ]
  },
  {
    title: "Sistema de Frenos y Suspensión",
    icon: <Brake className="w-6 h-6" />,
    services: [
      "Frenos",
      "Reparación de dirección y suspensión",
      "Cambio de amortiguadores"
    ]
  }
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="card bg-base-100 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300">
              <div className="card-body">
                <h3 className="card-title gap-2 text-primary">
                  {category.icon}
                  {category.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li 
                      key={serviceIndex}
                      className="flex items-center gap-2 hover:bg-base-200 p-2 rounded-lg transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link 
            href="/servicios" 
            className="btn btn-primary"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  )
}

