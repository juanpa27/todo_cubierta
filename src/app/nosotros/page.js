import Image from 'next/image';
import { FaCheckCircle, FaUsers, FaCog, FaTrophy } from 'react-icons/fa';

export default function NosotrosPage() {
  return (
    <div className="bg-base-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Sobre Nosotros</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Más de 30 Años de Experiencia</h2>
            <p className="text-lg mb-6">
              En Todo Cubierta, llevamos más de tres décadas dedicándonos a proporcionar las mejores soluciones en neumáticos para todo tipo de vehículos. Nuestra experiencia nos ha convertido en líderes del sector, ofreciendo un servicio de calidad inigualable.
            </p>
            <ul className="space-y-4">
              {[
                'Amplia gama de marcas premium',
                'Asesoramiento experto personalizado',
                'Servicio técnico de primera calidad',
                'Compromiso con la satisfacción del cliente'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/logo_tc .png"
              alt="Fachada de Todo Cubierta"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: FaUsers, title: 'Equipo Experto', description: 'Nuestro personal altamente capacitado está listo para atender todas tus necesidades.' },
            { icon: FaCog, title: 'Tecnología Avanzada', description: 'Utilizamos las últimas tecnologías para garantizar un servicio de calidad.' },
            { icon: FaTrophy, title: 'Reconocimiento', description: 'Líderes en el mercado con múltiples reconocimientos por nuestra excelencia.' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <item.icon className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-base-200 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
          <p className="text-lg">
            Proporcionar a nuestros clientes las mejores soluciones en neumáticos, garantizando su seguridad y satisfacción a través de productos de calidad y un servicio excepcional.
          </p>
        </div>
      </div>
    </div>
  );
}

