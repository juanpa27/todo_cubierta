'use client'

import Image from 'next/image'
import { MapPin, Clock, Phone, Ship, AlertTriangle, ExternalLink, Navigation } from 'lucide-react'

export default function ArgentinaInfo() {
  return (
    <section className="py-24 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título con SEO optimizado */}
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Si venís desde Argentina
          </h2>

          {/* Mapa y información principal */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Mapa */}
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/desde_argentina.webp"
                alt="Mapa del trayecto en balsa desde Puerto Pilcomayo (Argentina) a Puerto Ita Enramada (Paraguay)"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Información del trayecto */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Navigation className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trayecto en Balsa</h3>
                  <p className="text-base-content/80">
                    Desde Argentina a Paraguay: Puerto Pilcomayo (AR) - Puerto Ita Enramada (PY)
                  </p>
                </div>
              </div>

              {/* Alerta de No Servicio Domingos */}
              <div className="alert alert-warning shadow-lg">
                <AlertTriangle className="w-6 h-6" />
                <span className="font-semibold">DOMINGOS NO HAY SERVICIO DE BALSA</span>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Horarios de atención:</h4>
                  <ul className="space-y-1 text-base-content/80">
                    <li>Lunes a Viernes: 07:00 a 19:00 hs</li>
                    <li>Sábado: 07:00 a 15:00 hs</li>
                  </ul>
                </div>
              </div>

              {/* Link a horarios */}
              <a 
                href="https://www.formosa.gob.ar/puertos/horariospilcomayo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gap-2"
              >
                Consultar horarios actualizados
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Información adicional */}
          <div className="grid md:grid-cols-2 gap-6 bg-base-200 p-6 rounded-xl">
            {/* Contacto */}
            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Contacto</h4>
                <p className="text-base-content/80">Teléfono: (3718) 425244</p>
              </div>
            </div>

            {/* Información del cruce */}
            <div className="flex items-start gap-3">
              <Ship className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Información del cruce</h4>
                <ul className="space-y-1 text-base-content/80">
                  <li>Tipo de paso: Río</li>
                  <li>Medios utilizados: Balsa-Remolcador</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

