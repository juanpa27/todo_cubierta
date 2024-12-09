'use client'

import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

export default function ServiceCard({ service }) {
  const whatsappNumber = "+595985469000"

  const sendWhatsAppMessage = (service) => {
    const message = encodeURIComponent(`Hola, me gustaría solicitar información sobre el servicio de ${service.name}.`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <article className="card bg-base-100 shadow-xl">
      {service.image && (
        <figure className="px-4 pt-4">
          <Image
            src={service.image}
            alt={service.name}
            width={300}
            height={200}
            className="rounded-xl"
          />
        </figure>
      )}
      <div className="card-body">
        <h3 className="card-title text-xl mb-2">{service.name}</h3>
        <p className="text-base-content/80 mb-4">{service.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">{service.price}</span>
          <button 
            onClick={() => sendWhatsAppMessage(service)}
            className="btn btn-primary btn-sm gap-2"
          >
            <FaWhatsapp className="w-4 h-4" />
            Solicitar
          </button>
        </div>
      </div>
    </article>
  )
}

