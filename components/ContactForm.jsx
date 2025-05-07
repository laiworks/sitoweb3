'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    emailjs
      .sendForm(
        'service_5c13f2b',
        'template_uolfuya',
        form.current,
        'FM8Q57LZoX8tKfDpO'
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error('Errore:', error);
          setError('Si è verificato un errore nell\'invio del modulo. Riprova più tardi.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome e Cognome *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Nome e Cognome"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Azienda
            </label>
            <input
              type="text"
              id="company"
              name="company"
              disabled={isSubmitting}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Azienda"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefono
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              disabled={isSubmitting}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Telefono"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Servizio richiesto *
          </label>
          <select
            id="service"
            name="service"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Seleziona un servizio</option>
            <option value="consulenza">Consulenza strategica AI</option>
            <option value="prompt-design">Prompt Engineering & Design</option>
            <option value="chatbot">Chatbot & Assistenti virtuali</option>
            <option value="automazioni">Automazioni & Workflow</option>
            <option value="siti-web">Siti web & Applicazioni AI</option>
            <option value="formazione">Formazione & Workshops</option>
            <option value="altro">Altro</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Budget *
          </label>
          <select
            id="budget"
            name="budget"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Seleziona un budget</option>
            <option value="sotto-1000">Sotto i 1.000€</option>
            <option value="1000-3000">1.000€ - 3.000€</option>
            <option value="3000-5000">3.000€ - 5.000€</option>
            <option value="5000-10000">5.000€ - 10.000€</option>
            <option value="oltre-10000">Oltre 10.000€</option>
            <option value="da-definire">Da definire</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Messaggio *
          </label>
          <textarea
            id="message"
            name="message"
            required
            disabled={isSubmitting}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Descrivici il tuo progetto o la tua richiesta"
          />
        </div>

        {error && (
          <div className="p-4 rounded-lg bg-red-100 text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="p-4 rounded-lg bg-green-100 text-green-700">
            Messaggio inviato con successo! Ti risponderemo al più presto.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
        </button>
      </form>
    </div>
  );
} 