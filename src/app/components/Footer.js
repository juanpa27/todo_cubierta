import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <p className="flex items-center gap-2">
              <MdEmail className="text-primary" />
              <a href="mailto:todocubierta@gmail.com" className="hover:text-primary transition-colors">
                todocubierta@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MdLocationOn className="text-primary" />
              Avenida Fernando de la Mora 3177
            </p>
            <p className="flex items-center gap-2">
              <MdPhone className="text-primary" />
              <a href="tel:+595985469000" className="hover:text-primary transition-colors">
                +595 985 469 000
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/todo.cubierta" target="_blank" className="text-2xl hover:text-primary transition-colors" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/todocubierta/?hl=es-la" target="_blank" className="text-2xl hover:text-primary transition-colors" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://api.whatsapp.com/send?phone=595985469000" target='_blank' className="text-2xl hover:text-primary transition-colors" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="col-span-full lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Ubicación</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5721120211387!2d-57.59185882374034!3d-25.334631777700804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da90368f340cd%3A0xfd23f1cbae783751!2sTODO%20CUBIERTA%20S.R.L.!5e0!3m2!1sen!2sus!4v1701896358099!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-base-300 text-center">
          <p>&copy; {new Date().getFullYear()} Todo Cubierta S.R.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

