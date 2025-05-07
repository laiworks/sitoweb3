'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

// Componente per metodo di contatto
const ContactMethod = ({
  icon,
  title,
  description,
  link,
  linkText,
  delay = 0
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
  delay?: number;
}) => (
  <motion.div
    className="card p-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a
      href={link}
      className="text-indigo-600 font-medium flex items-center group"
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkText}
      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </motion.div>
);

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: '',
    budget: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [emailjsLoaded, setEmailjsLoaded] = useState(false);
  
  // Carico EmailJS solo lato client
  useEffect(() => {
    import('@emailjs/browser')
      .then(() => {
        setEmailjsLoaded(true);
      })
      .catch(err => {
        console.error('Errore nel caricamento di EmailJS:', err);
      });
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!emailjsLoaded || !formRef.current) {
      setFormStatus({
        success: false,
        message: 'Si è verificato un errore nell\'invio del modulo. Riprova più tardi.'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const emailjs = await import('@emailjs/browser');
      const result = await emailjs.sendForm(
        'service_5c13f2b',
        'template_uolfuya',
        formRef.current,
        'FM8Q57LZoX8tKfDpO'
      );
      
      if (result.status === 200) {
        setFormStatus({
          success: true,
          message: 'Messaggio inviato con successo! Ti risponderemo il prima possibile.'
        });
        
        // Reset del form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          service: '',
          budget: ''
        });
      } else {
        throw new Error('Errore nell\'invio del messaggio');
      }
    } catch (error) {
      console.error('Errore:', error);
      setFormStatus({
        success: false,
        message: 'Si è verificato un errore nell\'invio del modulo. Riprova più tardi.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animazioni uniformi per gli elementi Hero (visibili immediatamente)
  const heroAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  };

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="section-title"
              {...heroAnimation}
            >
              Contatti
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8"
              {...heroAnimation}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Siamo qui per aiutarti. Contattaci per una consulenza gratuita o per saperne di più sui nostri servizi.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contattaci</h2>
              <p className="text-gray-600 mb-8">Compila il modulo sottostante per richiedere informazioni o una consulenza. Ti risponderemo entro 24 ore lavorative.</p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Il tuo nome e cognome"
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="La tua email"
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
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Nome della tua azienda"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Il tuo numero di telefono"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Servizio di interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                      <option disabled value="">Seleziona un servizio</option>
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
                      Budget stimato
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                      <option disabled value="">Seleziona un budget</option>
                      <option value="sotto-1000">Sotto i 1.000€</option>
                      <option value="1000-3000">1.000€ - 3.000€</option>
                      <option value="3000-5000">3.000€ - 5.000€</option>
                      <option value="5000-10000">5.000€ - 10.000€</option>
                      <option value="oltre-10000">Oltre 10.000€</option>
                      <option value="da-definire">Da definire</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Descrivici il tuo progetto o la tua richiesta"
                  ></textarea>
                </div>
                
                {formStatus && (
                  <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <div>
                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
                  </button>
                </div>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:pl-12"
            >
              <h2 className="text-3xl font-bold mb-6">Altri modi per contattarci</h2>
              
              <div className="space-y-6">
                <ContactMethod
                  icon={
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  title="Email"
                  description="Scrivici direttamente per richieste di informazioni o per fissare un appuntamento"
                  link="mailto:info@laiworks.com"
                  linkText="info@laiworks.com"
                  delay={0.1}
                />
                
                <ContactMethod
                  icon={
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                  title="Telefono"
                  description="Chiamaci durante gli orari d'ufficio per un contatto diretto"
                  link="tel:+393519228765"
                  linkText="+39 351 9228765"
                  delay={0.2}
                />
                
                <ContactMethod
                  icon={
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M8.46 14.12L7.88 16.28C7.84 16.44 7.88 16.6 8 16.72C8.12 16.84 8.28 16.88 8.44 16.84L10.6 16.26C10.72 16.22 10.84 16.26 10.92 16.34C11.88 17.14 13.12 17.6 14.5 17.6C17.52 17.6 19.98 15.14 19.98 12.12C20 8.06 16.08 5.32 12.02 7.62C9.56 8.94 8.08 11.78 8.46 14.12" />
                    </svg>
                  }
                  title="WhatsApp"
                  description="Contattaci su WhatsApp per un supporto veloce e diretto"
                  link="https://wa.me/393519228765"
                  linkText="Chatta su WhatsApp"
                  delay={0.3}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Disponibilità Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-4">Orari e disponibilità</h2>
              <p className="text-gray-600">
                Scopri quando siamo operativi e quanto rapidamente rispondiamo sui diversi canali.
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">Orari di apertura</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <p className="text-yellow-700 text-sm">
                    <span className="font-medium">Nota:</span> L'ufficio fisico non è attualmente disponibile. 
                    Riceviamo esclusivamente da remoto tramite videoconferenza o telefono.
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Lunedì - Venerdì</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sabato</span>
                    <span className="font-medium">9:00 - 13:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domenica</span>
                    <span className="font-medium">Chiuso</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">Tempistiche di risposta</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 flex justify-between">
                      <span className="font-medium">Email:</span>
                      <span>Entro 24 ore</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M8.46 14.12L7.88 16.28C7.84 16.44 7.88 16.6 8 16.72C8.12 16.84 8.28 16.88 8.44 16.84L10.6 16.26C10.72 16.22 10.84 16.26 10.92 16.34C11.88 17.14 13.12 17.6 14.5 17.6C17.52 17.6 19.98 15.14 19.98 12.12C20 8.06 16.08 5.32 12.02 7.62C9.56 8.94 8.08 11.78 8.46 14.12" />
                      </svg>
                    </div>
                    <div className="flex-1 flex justify-between">
                      <span className="font-medium">WhatsApp:</span>
                      <span>Entro 4 ore</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1 flex justify-between">
                      <span className="font-medium">Telefono:</span>
                      <span>Immediata (orario d'ufficio)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 