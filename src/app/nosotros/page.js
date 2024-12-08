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
              Somos una empresa dedicada hace más de 30 años a la venta de cubiertas y baterías. También contamos con el servicio de mantenimiento integral y mecánica ligera de automóviles y camionetas. Nos destacamos en ofrecer un servicio pensado para resolver tus necesidades en un plazo corto de tiempo y con la mejor atención. Si estás buscando neumáticos podés contactarnos así podemos brindarte un asesoramiento personalizado.
            </p>
            <ul className="space-y-4">
              {[
                'Venta de cubiertas y baterías',
                'Mantenimiento integral',
                'Mecánica ligera',
                'Asesoramiento personalizado'
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
              src="/servicios/servicio1.webp"
              alt="Nosotros  Cubierta"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: FaUsers, title: 'Equipo Experto', description: 'Nuestro personal altamente capacitado está listo para atender todas tus necesidades.' },
            { icon: FaCog, title: 'Servicio Rápido', description: 'Nos enfocamos en resolver tus necesidades en un plazo corto de tiempo.' },
            { icon: FaTrophy, title: 'Calidad Garantizada', description: 'Ofrecemos productos de calidad y un servicio excepcional.' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <item.icon className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-base-200 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Nuestro Compromiso</h2>
          <p className="text-lg">
            En Todo Cubierta, nos comprometemos a proporcionar a nuestros clientes las mejores soluciones en neumáticos y servicios automotrices, garantizando su seguridad y satisfacción a través de productos de calidad y una atención personalizada.
          </p>
        </div>
      </div>
    </div>
  );
}

