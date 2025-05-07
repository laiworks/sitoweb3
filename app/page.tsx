'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollAnimation from './components/ScrollAnimation';

const services = [
  {
    title: "Consulenza AI",
    description: "Analisi del tuo business e individuazione delle opportunità di implementazione dell'AI per ottimizzare processi e aumentare i risultati."
  },
  {
    title: "Prompt Design",
    description: "Creazione di prompt ottimizzati per ottenere risultati precisi e coerenti dai modelli di linguaggio avanzati come GPT."
  },
  {
    title: "Chatbot Personalizzati",
    description: "Sviluppo di assistenti virtuali intelligenti che interagiscono con i tuoi clienti 24/7, migliorando il supporto e le conversioni."
  },
  {
    title: "Automazioni AI",
    description: "Integrazione di flussi di lavoro intelligenti con strumenti come Zapier e Make per eliminare attività ripetitive."
  },
  {
    title: "Generazione Siti Web",
    description: "Creazione rapida di siti web professionali usando le tecnologie AI più recenti."
  },
  {
    title: "Formazione AI",
    description: "Corsi su misura per il tuo team per strutturare e sfruttare al meglio l'intelligenza artificiale."
  }
];

export default function Home() {
  // Configurazioni di animazione ottimizzate
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const heroAnimation = {
    initial: { opacity: 0, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute w-full h-full z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            poster="/videos/hero-poster.jpg"
            controls={false}
            className="absolute w-full h-full object-cover"
            style={{ 
              opacity: 1,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <img 
            src="/videos/hero-poster.jpg" 
            alt="Hero background" 
            className="absolute w-full h-full object-cover"
            style={{ 
              opacity: 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/60 backdrop-filter backdrop-brightness-70 backdrop-contrast-125 z-10"></div>
        
        <div className="container px-4 md:px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight mx-auto mt-12 sm:mt-16 px-4 sm:px-6 md:px-8 text-center"
                {...heroAnimation}
              >
                <span className="block mb-2 sm:mb-3 text-center">Intelligenza artificiale</span>
                <motion.span 
                  className="block whitespace-normal sm:whitespace-nowrap text-center"
                  initial={{ color: "#8b5cf6" }}
                  animate={{ 
                    color: [
                      "#8b5cf6",
                      "#3b82f6",
                      "#0ea5e9",
                      "#6366f1",
                      "#8b5cf6"
                    ]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  che trasforma il business.
                </motion.span>
              </motion.h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <motion.p 
                className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto"
                {...heroAnimation}
                transition={{ ...heroAnimation.transition, delay: 0.2 }}
              >
                Tecnologia all'avanguardia con approccio umano per risultati concreti e misurabili.
              </motion.p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                {...heroAnimation}
                transition={{ ...heroAnimation.transition, delay: 0.4 }}
              >
                <motion.div
                  initial={{ background: "linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%)" }}
                  animate={{ 
                    background: [
                      "linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%)",
                      "linear-gradient(90deg, #3b82f6 0%, #0ea5e9 100%)",
                      "linear-gradient(90deg, #0ea5e9 0%, #6366f1 100%)",
                      "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
                      "linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%)"
                    ]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="rounded-full shadow-lg hover:shadow-xl"
                >
                  <Link
                    href="/contatti"
                    className="block text-white px-8 py-4 rounded-full text-lg font-medium"
                  >
                    Richiedi una consulenza
                  </Link>
                </motion.div>
                <Link 
                  href="/servizi" 
                  className="text-white px-8 py-4 rounded-full text-lg font-medium hover:text-indigo-400 transition-colors duration-300 inline-flex items-center"
                >
                  Scopri i nostri servizi
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* I Nostri Servizi Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...sectionAnimation}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">I nostri servizi</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Soluzioni AI personalizzate che trasformano il tuo business, dalla consulenza all'implementazione.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Servizio 1 - Consulenza AI */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
              {...cardAnimation}
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consulenza AI</h3>
              <p className="text-gray-600">
                Analisi del tuo business e individuazione delle opportunità di implementazione dell'AI per ottimizzare processi e aumentare i risultati.
              </p>
            </motion.div>

            {/* Servizio 2 - Prompt Design */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
              {...cardAnimation}
              transition={{ ...cardAnimation.transition, delay: 0.1 }}
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prompt Design</h3>
              <p className="text-gray-600">
                Creazione di prompt ottimizzati per ottenere risultati precisi e coerenti dai modelli di linguaggio avanzati come GPT.
              </p>
            </motion.div>

            {/* Servizio 3 - Chatbot Personalizzati */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
              {...cardAnimation}
              transition={{ ...cardAnimation.transition, delay: 0.2 }}
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chatbot Personalizzati</h3>
              <p className="text-gray-600">
                Sviluppo di assistenti virtuali intelligenti che interagiscono con i tuoi clienti 24/7, migliorando il supporto e le conversioni.
              </p>
            </motion.div>

            {/* Servizio 4 - Automazioni AI */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
              {...cardAnimation}
              transition={{ ...cardAnimation.transition, delay: 0.3 }}
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automazioni AI</h3>
              <p className="text-gray-600">
                Integrazione di flussi di lavoro intelligenti con strumenti come Zapier e Make per eliminare attività ripetitive.
              </p>
            </motion.div>

            {/* Servizio 5 - Generazione Siti Web */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
              {...cardAnimation}
              transition={{ ...cardAnimation.transition, delay: 0.4 }}
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Generazione Siti Web</h3>
              <p className="text-gray-600">
                Creazione rapida di siti web professionali usando le tecnologie AI più recenti.
              </p>
            </motion.div>

            {/* Servizio 6 - Formazione AI */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
              {...cardAnimation}
              transition={{ ...cardAnimation.transition, delay: 0.5 }}
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Formazione AI</h3>
              <p className="text-gray-600">
                Corsi su misura per il tuo team per strutturare e sfruttare al meglio l'intelligenza artificiale.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            {...sectionAnimation}
            transition={{ ...sectionAnimation.transition, delay: 0.6 }}
          >
            <Link 
              href="/servizi" 
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Esplora tutti i servizi
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Il Nostro Approccio Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...sectionAnimation}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Il nostro approccio</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Un metodo strutturato e collaudato per garantire il successo dei progetti AI
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <motion.div 
              className="flex items-start mb-12"
              {...sectionAnimation}
              transition={{ ...sectionAnimation.transition, delay: 0.1 }}
            >
              <div className="flex-shrink-0 mr-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 font-bold text-2xl">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Scoperta e ascolto</h3>
                <p className="text-gray-600 text-lg">
                  Analizziamo a fondo il tuo business, comprendendo obiettivi, sfide e processi per identificare le migliori opportunità di implementazione AI.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="flex items-start mb-12"
              {...sectionAnimation}
              transition={{ ...sectionAnimation.transition, delay: 0.2 }}
            >
              <div className="flex-shrink-0 mr-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 font-bold text-2xl">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Proposta strategica</h3>
                <p className="text-gray-600 text-lg">
                  Elaboriamo un piano AI personalizzato con obiettivi chiari, roadmap dettagliata e metriche di successo misurabili.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="flex items-start mb-12"
              {...sectionAnimation}
              transition={{ ...sectionAnimation.transition, delay: 0.3 }}
            >
              <div className="flex-shrink-0 mr-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 font-bold text-2xl">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sviluppo con esperti</h3>
                <p className="text-gray-600 text-lg">
                  Implementiamo le soluzioni con un team di specialisti qualificati, garantendo qualità, sicurezza e scalabilità.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              className="flex items-start"
              {...sectionAnimation}
              transition={{ ...sectionAnimation.transition, delay: 0.4 }}
            >
              <div className="flex-shrink-0 mr-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 font-bold text-2xl">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Consegna e supporto</h3>
                <p className="text-gray-600 text-lg">
                  Ti affianchiamo nell'adozione con formazione dedicata e supporto continuo per massimizzare il ROI del tuo investimento in AI.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center mt-16"
            {...sectionAnimation}
            transition={{ ...sectionAnimation.transition, delay: 0.5 }}
          >
            <Link 
              href="/metodo" 
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Scopri di più sul nostro metodo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Domande Frequenti Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...sectionAnimation}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Domande frequenti</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Rispondiamo alle domande più comuni sull'intelligenza artificiale e su come può trasformare il tuo business
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto mb-16">
            {/* FAQ 1 */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              {...cardAnimation}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cos'è l'intelligenza artificiale generativa?</h3>
              <p className="text-gray-600">
                L'intelligenza artificiale generativa è una tecnologia che permette di creare contenuti originali (testi, immagini, video) in modo autonomo, basandosi sui pattern appresi durante l'addestramento. È alla base di strumenti come ChatGPT, DALL-E e Midjourney.
              </p>
            </motion.div>
            
            {/* FAQ 2 */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              {...cardAnimation}
              transition={{ ...cardAnimation.transition, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Come può l'AI migliorare la produttività aziendale?</h3>
              <p className="text-gray-600">
                L'AI può automatizzare attività ripetitive, analizzare grandi volumi di dati rapidamente, ottimizzare processi decisionali, personalizzare l'esperienza cliente e identificare opportunità di business che altrimenti potrebbero passare inosservate.
              </p>
            </motion.div>
            
            {/* FAQ 3 */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              {...cardAnimation}
              transition={{ ...cardAnimation.transition, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quanto tempo serve per implementare soluzioni AI?</h3>
              <p className="text-gray-600">
                I tempi variano in base alla complessità del progetto. Una semplice integrazione di strumenti AI esistenti può richiedere poche settimane, mentre soluzioni personalizzate più complesse possono richiedere alcuni mesi per l'implementazione completa.
              </p>
            </motion.div>
            
            {/* FAQ 4 */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              {...cardAnimation}
              transition={{ ...cardAnimation.transition, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">È necessario avere competenze tecniche per adottare l'AI?</h3>
              <p className="text-gray-600">
                No, non è necessario. Il nostro approccio prevede la formazione del tuo team e il supporto continuo. Ci occupiamo degli aspetti tecnici mentre la tua azienda si concentra sui risultati e sull'utilizzo strategico delle nuove soluzioni.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            className="flex justify-center"
            {...sectionAnimation}
            transition={{ ...sectionAnimation.transition, delay: 0.4 }}
          >
            <Link 
              href="/faq" 
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Tutte le domande frequenti
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-6"
              {...sectionAnimation}
            >
              Pronto a trasformare il tuo business con l'AI?
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-300 mb-10"
              {...sectionAnimation}
              transition={{ ...sectionAnimation.transition, delay: 0.2 }}
            >
              Contattaci oggi per una consulenza gratuita e scopri come l'intelligenza artificiale 
              può portare la tua azienda al livello successivo.
            </motion.p>
            
            <motion.div
              {...sectionAnimation}
              transition={{ ...sectionAnimation.transition, delay: 0.3 }}
            >
              <Link href="/contatti" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
                Prenota una consulenza gratuita
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
