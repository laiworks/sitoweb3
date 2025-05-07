'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// Componente per le fasi del metodo
const MethodStep = ({
  number,
  title,
  description,
  features,
  delay = 0
}: {
  number: number;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}) => (
  <motion.div
    className="flex flex-col md:flex-row gap-8 md:gap-12 items-start"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="md:w-1/3 flex flex-col items-center md:items-end">
      <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-2xl font-bold text-center md:text-right mb-2">{title}</h3>
    </div>
    
    <div className="md:w-2/3">
      <div className="card p-8">
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="space-y-3">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <span className="text-indigo-500 mr-2">✓</span>
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Linea connettore tra le fasi */}
    <div className="absolute left-[30px] md:left-1/3 top-0 bottom-0 w-[2px] bg-gray-200 -z-10 hidden md:block"></div>
  </motion.div>
);

// Componente per il carosello orizzontale delle fasi
const RotatingMethodCircle = ({ steps, activeStep, setActiveStep, resetTimer }: { 
  steps: any[],
  activeStep: number,
  setActiveStep: (step: number) => void,
  resetTimer: () => void
}) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[500px] my-16">
      {/* Contenitore del carosello */}
      <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden">
        {steps.map((step, index) => {
          // Calcola la distanza dalla posizione attiva
          const distance = (index - activeStep + 4) % 4;
          const isActive = index === activeStep;
          
          // Calcola le posizioni relative in base alla distanza
          let xPos = 0;
          let yPos = 0;
          let zIndex = 0;
          let scale = 0.7;
          
          if (distance === 0) { // Elemento attivo (in alto)
            yPos = -120;
            zIndex = 30;
            scale = 1.3;
          } else if (distance === 1) { // Elemento a destra
            xPos = 200;
            yPos = 40;
            zIndex = 20;
            scale = 0.8;
          } else if (distance === 2) { // Elemento in basso
            yPos = 120;
            zIndex = 10;
            scale = 0.7;
          } else if (distance === 3) { // Elemento a sinistra
            xPos = -200;
            yPos = 40;
            zIndex = 20;
            scale = 0.8;
          }
          
          return (
            <motion.div
              key={step.number}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              initial={{ x: xPos, y: yPos, scale, zIndex }}
              animate={{ 
                x: xPos,
                y: yPos,
                scale,
                zIndex,
                opacity: isActive ? 1 : 0.7
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onClick={() => {
                setActiveStep(index);
                resetTimer();
              }}
              style={{ zIndex }}
            >
              <div 
                className={`w-64 h-64 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-6 transition-all
                          ${isActive ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border border-indigo-200'}`}
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
                  <div className={`${isActive ? 'text-indigo-600' : 'text-indigo-500'}`}>
                    {step.icon}
                  </div>
                </div>
                
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center bg-indigo-100 border-2 border-indigo-300 text-indigo-600 font-bold">
                  {step.number}
                </div>
                
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                
                <p className={`text-sm mb-3 ${isActive ? 'text-indigo-100' : 'text-gray-500'}`}>
                  {step.description.length > 80 ? `${step.description.substring(0, 80)}...` : step.description}
                </p>
                
                {isActive && (
                  <motion.div 
                    className="mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-xs bg-white text-indigo-600 px-3 py-1 rounded-full">
                      Fase attiva
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Contenuto dettagliato della fase attiva */}
      <motion.div
        className="w-full card p-8 bg-white shadow-lg mt-32"
        key={activeStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mr-4">
            {steps[activeStep].number}
          </div>
          <h3 className="text-2xl font-bold">{steps[activeStep].title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{steps[activeStep].description}</p>
        <div className="space-y-3">
          {steps[activeStep].features.map((feature: string, i: number) => (
            <div key={i} className="flex items-start">
              <span className="text-indigo-500 mr-2">✓</span>
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Pulsanti di navigazione */}
      <div className="flex justify-center space-x-4 mt-8">
        <button 
          className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition-colors"
          onClick={() => {
            setActiveStep((activeStep - 1 + 4) % 4);
            resetTimer();
          }}
        >
          ← Precedente
        </button>
        <button 
          className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
          onClick={() => {
            setActiveStep((activeStep + 1) % 4);
            resetTimer();
          }}
        >
          Successivo →
        </button>
      </div>
      
      {/* Indicatori di fase */}
      <div className="flex justify-center space-x-2 mt-6">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${activeStep === index ? 'bg-indigo-600' : 'bg-indigo-200'}`}
            onClick={() => {
              setActiveStep(index);
              resetTimer();
            }}
            aria-label={`Vai alla fase ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Componente per i clienti ideali
const IdealClient = ({
  icon,
  title,
  description,
  delay = 0
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) => (
  <motion.div
    className="card p-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function Metodo() {
  const [activeStep, setActiveStep] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Refs per le sezioni
  const heroRef = useRef(null);
  const processRef = useRef(null);
  const detailRef = useRef(null);
  const clientsRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Hook useInView per ogni sezione
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const detailInView = useInView(detailRef, { once: true, margin: "-100px" });
  const clientsInView = useInView(clientsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  
  // Funzione per resettare il timer
  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % 4);
    }, 8000); // Aumentato a 8 secondi
  };
  
  // Avvia il timer all'inizio
  useEffect(() => {
    resetTimer();
    
    // Pulisci il timer quando il componente viene smontato
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  // Animazioni per elementi che appaiono durante lo scroll
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  };

  // Animazioni per le process card
  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  // Animazioni a cascata per le FAQ
  const staggerAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  // Animazioni uniformi per gli elementi Hero (visibili immediatamente)
  const heroAnimation = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  };

  // Dati per le fasi del metodo
  const steps = [
    {
      number: 1,
      title: "Scoperta e ascolto",
      description: "La prima fase è fondamentale: ascoltiamo attentamente per comprendere le tue esigenze, sfide e obiettivi di business.",
      features: [
        "Audit completo dei processi esistenti",
        "Interviste con stakeholder chiave",
        "Analisi dei dati disponibili",
        "Identificazione delle sfide principali",
        "Definizione di obiettivi misurabili"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Proposta strategica",
      description: "Sulla base delle informazioni raccolte, elaboriamo una strategia personalizzata che utilizza le soluzioni AI più adatte al tuo caso specifico.",
      features: [
        "Report dettagliato delle opportunità AI",
        "Selezione delle tecnologie più appropriate",
        "Analisi costi-benefici",
        "Roadmap di implementazione chiara",
        "Metriche di successo definite"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Sviluppo con esperti",
      description: "Il nostro team multidisciplinare progetta e implementa le soluzioni AI, collaborando a stretto contatto con il tuo team.",
      features: [
        "Sviluppo iterativo con feedback costante",
        "Test continui per assicurare la qualità",
        "Integrazioni con i sistemi esistenti",
        "Documentazione tecnica completa",
        "Formazione del team interno"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      number: 4,
      title: "Consegna e supporto",
      description: "Il nostro impegno non termina con la consegna. Ti accompagniamo nel processo di adozione e forniamo supporto continuo.",
      features: [
        "Implementazione graduale e controllata",
        "Monitoraggio delle performance",
        "Ottimizzazione continua delle soluzioni",
        "Supporto tecnico dedicato",
        "Revisioni periodiche e aggiornamenti"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
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
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="section-title"
              initial={heroAnimation.initial}
              animate={heroAnimation.animate}
              transition={heroAnimation.transition}
            >
              Il nostro metodo di lavoro
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={heroAnimation.initial}
              animate={heroAnimation.animate}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Un approccio strutturato e orientato ai risultati per trasformare il tuo business 
              attraverso l'intelligenza artificiale.
            </motion.p>
          </div>
        </div>
      </motion.section>
      
      {/* Processo in 4 fasi */}
      <motion.section 
        ref={processRef}
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-10"
            initial={sectionAnimation.initial}
            animate={sectionAnimation.animate}
            transition={sectionAnimation.transition}
          >
            <h2 className="section-title">Il nostro processo in 4 fasi</h2>
          </motion.div>
          
          <div className="flex flex-wrap">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="w-full md:w-1/2 lg:w-1/4 px-3 mb-8"
                initial={cardAnimation.initial}
                animate={cardAnimation.animate}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-600 flex items-center justify-center mb-3">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-0">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Indicatore di connessione semplice */}
          <div className="flex justify-center mt-2 mb-6">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
              <div className="w-8 h-0.5 bg-indigo-300"></div>
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
              <div className="w-8 h-0.5 bg-indigo-300"></div>
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
              <div className="w-8 h-0.5 bg-indigo-300"></div>
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <Link href="/contatti" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-300 text-sm">
              Scopri di più sul nostro approccio →
            </Link>
          </div>
        </div>
      </motion.section>
      
      {/* Dettaglio di ogni fase */}
      <motion.section 
        ref={detailRef}
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        animate={detailInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={sectionAnimation.initial}
            animate={sectionAnimation.animate}
            transition={sectionAnimation.transition}
          >
            <h2 className="section-title">Dettaglio delle fasi</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Esploriamo in profondità ogni fase del nostro metodo e come contribuisce al successo del tuo progetto AI.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="mb-12"
                initial={sectionAnimation.initial}
                animate={sectionAnimation.animate}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <div className="space-y-3">
                  {step.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-indigo-500 mr-2">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Clienti ideali */}
      <motion.section 
        ref={clientsRef}
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={clientsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={sectionAnimation.initial}
            animate={sectionAnimation.animate}
            transition={sectionAnimation.transition}
          >
            <h2 className="section-title">I nostri clienti ideali</h2>
            <p className="section-subtitle mx-auto">
              Le nostre soluzioni AI sono particolarmente efficaci per queste tipologie di organizzazioni.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <IdealClient
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              title="PMI in crescita"
              description="Aziende con 10-250 dipendenti che cercano di ottimizzare processi, ridurre costi e scalare le operazioni con risorse limitate."
              delay={0.1}
            />
            <IdealClient
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
              title="Liberi professionisti"
              description="Consulenti, avvocati, medici e altri professionisti che desiderano automatizzare attività ripetitive e concentrarsi sul valore aggiunto."
              delay={0.2}
            />
            <IdealClient
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Startup innovative"
              description="Nuove imprese che vogliono incorporare l'AI nel loro DNA fin dall'inizio, ottenendo un vantaggio competitivo significativo."
              delay={0.3}
            />
            <IdealClient
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              }
              title="Agenzie creative"
              description="Studi di design, marketing e comunicazione che cercano di potenziare la loro creatività con strumenti AI all'avanguardia."
              delay={0.4}
            />
          </div>
          
          <motion.div
            className="mt-16 text-center"
            initial={sectionAnimation.initial}
            animate={sectionAnimation.animate}
            transition={sectionAnimation.transition}
          >
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Non importa se sei già esperto di AI o se stai muovendo i primi passi. 
              Il nostro approccio è pensato per adattarsi al tuo livello di conoscenza 
              e alle specifiche esigenze del tuo business.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Call to Action */}
      <motion.section 
        ref={ctaRef}
        className="py-20 bg-indigo-600 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Pronto a iniziare il tuo percorso di trasformazione con l'AI?
            </motion.h2>
            
            <motion.p
              className="text-xl text-indigo-100 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Contattaci oggi per una consulenza gratuita e scopri come il nostro metodo 
              può portare risultati concreti alla tua azienda.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Link
                href="/contatti"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-colors duration-300"
              >
                Prenota una consulenza gratuita
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 