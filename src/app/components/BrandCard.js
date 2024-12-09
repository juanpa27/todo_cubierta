'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function BrandCard({ brand }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card lg:card-side bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <figure className="lg:w-1/3 p-6">
        <div className="relative w-full h-48 lg:h-full">
          <Image
            src={brand.image}
            alt={`Logo de ${brand.name}`}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </figure>
      <div className="card-body lg:w-2/3">
        <h3 className="card-title text-2xl mb-2">{brand.name}</h3>
        <p className="text-base-content/80 mb-4">{brand.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Historia:</h4>
          <p className="text-sm">{brand.history}</p>
        </div>
        <div className="card-actions justify-end">
          <Link href={`/marcas/${brand.slug}`} className="btn btn-primary">
            Ver más <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href={`/productos/${brand.slug}`} className="btn btn-secondary">
            Ver productos <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

