import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-base-300 text-base-content">
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
              <a href="#" className="text-2xl hover:text-primary transition-colors" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-primary transition-colors" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-primary transition-colors" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="col-span-full lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Ubicación</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14424.37593617062!2d-57.5892791!3d-25.3346271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da90368f340cd%3A0xfd23f1cbae783751!2sTODO%20CUBIERTA%20S.R.L.!5e0!3m2!1ses-419!2spy!4v1733694874008!5m2!1ses-419!2spy" 
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

