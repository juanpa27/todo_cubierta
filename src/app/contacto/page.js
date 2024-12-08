'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server or a third-party service
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    // You could also show a success message to the user here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contáctanos</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-4">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text">Nombre</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label" htmlFor="message">
                  <span className="label-text">Mensaje</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje"
                  className="textarea textarea-bordered h-24"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <div className="card bg-base-100 shadow-xl mb-8">
            <div className="card-body">
              <h2 className="card-title mb-4">Información de Contacto</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaPhone className="text-primary mr-2" />
                  <span>+595 985 469 000</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-primary mr-2" />
                  <a href="mailto:todocubierta@gmail.com" className="link link-hover">
                    todocubierta@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-primary mr-2" />
                  <span>Avenida Fernando de la Mora 3177, Asunción, Paraguay</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Nuestra Ubicación</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14424.37593617062!2d-57.5892791!3d-25.3346271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da90368f340cd%3A0xfd23f1cbae783751!2sTODO%20CUBIERTA%20S.R.L.!5e0!3m2!1ses-419!2spy!4v1733694874008!5m2!1ses-419!2spy"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

