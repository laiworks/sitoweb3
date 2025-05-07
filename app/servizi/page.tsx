'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';

// Componente per servizio dettagliato con esempio
const ServiceDetail = ({
  id,
  title,
  description,
  features,
  icon,
  isActive,
  onClick,
}: {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => (
  <motion.div
    id={id}
    className={`card overflow-hidden cursor-pointer transition-all ${
      isActive ? 'border-2 border-indigo-500' : ''
    }`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    onClick={onClick}
  >
    <div className="p-8">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className={`transition-all duration-300 ${isActive ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Caratteristiche principali:</h4>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-indigo-500 mr-2">✓</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <button 
        className={`mt-6 text-indigo-600 font-medium flex items-center group ${isActive ? 'rotate-180' : ''}`}
      >
        {isActive ? 'Meno dettagli' : 'Più dettagli'}
        <svg 
          className={`w-4 h-4 ml-2 transition-transform ${isActive ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </motion.div>
);

export default function Servizi() {
  const [activeService, setActiveService] = useState<string | null>(null);
  
  // Refs per le sezioni
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyUsRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Hook useInView per ogni sezione
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const whyUsInView = useInView(whyUsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  
  // Configurazioni di animazione
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  };

  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const heroAnimation = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  };
  
  const handleServiceClick = (id: string) => {
    setActiveService(activeService === id ? null : id);
  };
  
  const services = [
    {
      id: "consulenza",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Consulenza AI",
      description: "Analisi del tuo business e individuazione delle opportunità di implementazione dell'AI per ottimizzare processi e aumentare i risultati.",
      features: [
        "Analisi dei processi aziendali esistenti",
        "Identificazione delle aree ad alto potenziale per l'AI",
        "Valutazione di fattibilità tecnica ed economica",
        "Sviluppo di una roadmap di implementazione",
        "ROI stimato e metriche di successo"
      ]
    },
    {
      id: "prompt-design",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Prompt Design",
      description: "Creazione di prompt ottimizzati per ottenere risultati precisi e coerenti dai modelli di linguaggio avanzati come GPT.",
      features: [
        "Analisi delle esigenze specifiche di generazione di contenuti",
        "Creazione di prompt strutturati e ottimizzati",
        "Testing e perfezionamento iterativo",
        "Documentazione e formazione all'uso",
        "Integrazione con i flussi di lavoro esistenti"
      ]
    },
    {
      id: "chatbot",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Chatbot Personalizzati",
      description: "Sviluppo di assistenti virtuali intelligenti che interagiscono con i tuoi clienti 24/7, migliorando il supporto e le conversioni.",
      features: [
        "Progettazione dell'esperienza conversazionale",
        "Personalizzazione basata sulla voce del brand",
        "Integrazione con CRM e altri sistemi aziendali",
        "Addestramento su dati e documentazione specifica",
        "Monitoraggio e miglioramento continuo"
      ]
    },
    {
      id: "automazioni",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Automazioni AI",
      description: "Integrazione di flussi di lavoro automatizzati con strumenti come Zapier e Make per eliminare attività ripetitive e focus su ciò che conta.",
      features: [
        "Mappatura dei flussi di lavoro manuali esistenti",
        "Progettazione di automazioni intelligenti",
        "Integrazione tra diversi software e piattaforme",
        "Test e ottimizzazione delle prestazioni",
        "Monitoraggio e reportistica sui risultati"
      ]
    },
    {
      id: "siti-web",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5M8 3.935V2.5A2.5 2.5 0 0110.5 0h1A2.5 2.5 0 0114 2.5v1.435M8 3.935l1.5 1.565M15 4.5l-1.5.935" />
        </svg>
      ),
      title: "Generazione Siti Web",
      description: "Creazione rapida di siti web professionali utilizzando le più recenti tecnologie AI per design e contenuti di alta qualità.",
      features: [
        "Analisi del settore e dei concorrenti",
        "Progettazione di architettura e UI/UX guidata dall'AI",
        "Generazione di contenuti ottimizzati per SEO",
        "Implementazione con tecnologie moderne e responsive",
        "Ottimizzazione delle prestazioni e della conversione"
      ]
    },
    {
      id: "formazione",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      title: "Formazione AI",
      description: "Corsi su misura per il tuo team, per sfruttare al meglio le tecnologie AI e restare competitivi nel panorama digitale in evoluzione.",
      features: [
        "Valutazione delle competenze esistenti e gap",
        "Programmi formativi personalizzati per ruoli specifici",
        "Workshop pratici con casi reali aziendali",
        "Supporto continuo post-formazione",
        "Aggiornamenti periodici sulle nuove tecnologie"
      ]
    },
  ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="py-20 hero-gradient"
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={heroAnimation.initial}
            animate={heroAnimation.animate}
            transition={heroAnimation.transition}
          >
            <h1 className="section-title">I Nostri Servizi</h1>
            <p className="text-xl text-gray-600 mb-8">
              Soluzioni innovative di intelligenza artificiale per potenziare il tuo business
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Services Grid */}
      <motion.section 
        ref={servicesRef}
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={sectionAnimation.initial}
            animate={sectionAnimation.animate}
            transition={sectionAnimation.transition}
          >
            {services.map((service, index) => (
              <ServiceDetail
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                isActive={activeService === service.id}
                onClick={() => handleServiceClick(service.id)}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* Why Choose Us */}
      <motion.section 
        ref={whyUsRef}
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        animate={whyUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container px-4 md:px-6">
          <motion.h2
            className="section-title text-center mb-16"
            initial={sectionAnimation.initial}
            animate={sectionAnimation.animate}
            transition={sectionAnimation.transition}
          >
            Perché scegliere LAIWORKS
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="card p-8"
              initial={cardAnimation.initial}
              animate={cardAnimation.animate}
              transition={cardAnimation.transition}
            >
              <div className="text-indigo-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Esperienza specializzata</h3>
              <p className="text-gray-600">
                Il nostro team combina competenze tecniche di AI con profonda conoscenza di vari settori aziendali, 
                garantendo soluzioni realmente efficaci.
              </p>
            </motion.div>
            
            <motion.div
              className="card p-8"
              initial={cardAnimation.initial}
              animate={cardAnimation.animate}
              transition={cardAnimation.transition}
            >
              <div className="text-indigo-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Approccio etico</h3>
              <p className="text-gray-600">
                Sviluppiamo soluzioni AI che rispettano la privacy, la trasparenza e promuovono un uso responsabile 
                dell'intelligenza artificiale.
              </p>
            </motion.div>
            
            <motion.div
              className="card p-8"
              initial={cardAnimation.initial}
              animate={cardAnimation.animate}
              transition={cardAnimation.transition}
            >
              <div className="text-indigo-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">ROI misurabile</h3>
              <p className="text-gray-600">
                Ci concentriamo su soluzioni che generano un ritorno sull'investimento quantificabile, 
                con metriche chiare per valutare il successo dei progetti.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Call to Action */}
      <motion.section 
        ref={ctaRef}
        className="py-20 bg-gray-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={sectionAnimation.initial}
              animate={sectionAnimation.animate}
              transition={sectionAnimation.transition}
            >
              Pronto a trasformare il tuo business con l'AI?
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-300 mb-10"
              initial={sectionAnimation.initial}
              animate={sectionAnimation.animate}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Contattaci oggi per una consulenza gratuita e scopri come l'intelligenza artificiale 
              può portare la tua azienda al livello successivo.
            </motion.p>
            
            <motion.div
              initial={sectionAnimation.initial}
              animate={sectionAnimation.animate}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Link href="/contatti" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
                Prenota una consulenza gratuita
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 