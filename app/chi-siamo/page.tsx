'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';

// Componente per i valori aziendali
const ValueCard = ({ 
  title, 
  description, 
  icon, 
  delay = 0 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    className="card p-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function ChiSiamo() {
  // Animazioni standardizzate per l'intera pagina
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

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              {...sectionAnimation}
            >
              <h1 className="section-title">Chi Siamo</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
                Siamo un team di consulenti specializzati nell'integrazione dell'intelligenza artificiale nei processi aziendali.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* La nostra storia - Versione migliorata per startup */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center mb-12">
            <motion.div
              {...sectionAnimation}
            >
              <h2 className="section-title text-center">La nostra storia</h2>
              <div className="w-20 h-1 bg-indigo-600 rounded-full my-4"></div>
            </motion.div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-stretch">
            {/* Colonna sinistra con timeline */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative border-l-2 border-indigo-200 pl-8 py-2 ml-4">
                {/* Primo punto timeline */}
                <motion.div 
                  className="mb-10"
                  {...cardAnimation}
                  transition={{ ...cardAnimation.transition, delay: 0.1 }}
                >
                  <div className="absolute -left-4 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">L'intuizione iniziale</h3>
                    <p className="text-gray-600">
                      LAIWORKS nasce dall'intuizione dei suoi fondatori: creare un ponte tra le potenzialità 
                      rivoluzionarie dell'intelligenza artificiale e le reali esigenze delle aziende.
                    </p>
                  </div>
                </motion.div>
                
                {/* Secondo punto timeline */}
                <motion.div 
                  className="mb-10"
                  {...cardAnimation}
                  transition={{ ...cardAnimation.transition, delay: 0.2 }}
                >
                  <div className="absolute -left-4 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">L'identificazione del problema</h3>
                    <p className="text-gray-600">
                      Abbiamo osservato come molte realtà faticassero ad adottare l'AI, spesso intimorite dalla 
                      complessità tecnologica o scettiche sui reali benefici. La nostra missione è diventata chiara: 
                      demistificare l'intelligenza artificiale e trasformarla in uno strumento concreto di crescita.
                    </p>
                  </div>
                </motion.div>
                
                {/* Terzo punto timeline */}
                <motion.div 
                  className="mb-10"
                  {...cardAnimation}
                  transition={{ ...cardAnimation.transition, delay: 0.3 }}
                >
                  <div className="absolute -left-4 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">La creazione del metodo</h3>
                    <p className="text-gray-600">
                      La nostra squadra, formata da esperti in AI, business strategy e digital transformation, 
                      ha sviluppato un approccio metodico e incentrato sui risultati, che permetterà di creare 
                      soluzioni che generino valore tangibile fin da subito.
                    </p>
                  </div>
                </motion.div>
 
                {/* Badge con anno di fondazione */}
                <div className="absolute -left-10 top-0 bg-indigo-600 text-white text-xs px-2 py-1 rounded-md font-semibold">
                  Nascita dell'idea
                </div>
                
                {/* Badge con situazione attuale */}
                <div className="absolute -left-12 bottom-0 bg-green-600 text-white text-xs px-2 py-1 rounded-md font-semibold">
                  Oggi
                </div>
              </div>
            </motion.div>
            
            {/* Colonna destra con competenze e approccio */}
            <motion.div
              className="lg:w-1/2 flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >              
              {/* Tecnologie e competenze */}
              <motion.div 
                className="bg-gray-50 rounded-lg p-6 border border-gray-100 mb-6"
                {...cardAnimation}
                transition={{ ...cardAnimation.transition, delay: 0.1 }}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3">Le nostre competenze</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Machine Learning</span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Generative AI</span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Business Strategy</span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Process Automation</span>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Il nostro approccio */}
              <motion.div 
                className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex-grow"
                {...cardAnimation}
                transition={{ ...cardAnimation.transition, delay: 0.2 }}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3">Il nostro approccio</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Comprendiamo profondamente il tuo business prima di proporre soluzioni</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Proposte personalizzate basate su obiettivi e risorse specifiche</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Focus sui risultati misurabili e ROI concreto</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Accompagnamento continuo durante l'implementazione</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Principi guida</h3>
                  <p className="text-gray-600 italic mb-4">
                    "La vera innovazione nell'AI non è la tecnologia stessa, ma come questa tecnologia viene resa accessibile e utile alle persone reali."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700 font-medium">Il nostro fondatore</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Missione e Visione */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div
              className="lg:w-1/2"
              {...sectionAnimation}
            >
              <h3 className="text-2xl font-bold mb-6">La nostra missione</h3>
              <p className="text-gray-600 mb-8">
                Rendere l'intelligenza artificiale uno strumento accessibile, pratico ed efficace per tutte le 
                aziende, guidandole nel processo di adozione e aiutandole a ottenere risultati tangibili 
                e misurabili.
              </p>
              {/* Grafico professionale per la missione */}
              <motion.div 
                className="h-60 rounded-xl bg-white border border-gray-200 shadow-md p-5"
                {...cardAnimation}
                transition={{ ...cardAnimation.transition, delay: 0.1 }}
              >
                <h4 className="text-gray-800 font-semibold mb-3 text-center">Impatto dell'AI sul Business</h4>
                <div className="relative h-44">
                  {/* Grid background per il grafico */}
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-5">
                    {Array(20).fill(0).map((_, i) => (
                      <div key={i} className="border-b border-r border-gray-100"></div>
                    ))}
                  </div>
                  
                  {/* Assi del grafico */}
                  <div className="absolute left-0 top-0 bottom-0 border-r border-gray-300 w-0"></div>
                  <div className="absolute left-0 right-0 bottom-0 border-t border-gray-300 h-0"></div>
                  
                  {/* Etichette asse Y */}
                  <div className="absolute -left-2 top-0 text-xs text-gray-500">100%</div>
                  <div className="absolute -left-2 top-1/4 text-xs text-gray-500">75%</div>
                  <div className="absolute -left-2 top-1/2 text-xs text-gray-500">50%</div>
                  <div className="absolute -left-2 top-3/4 text-xs text-gray-500">25%</div>
                  <div className="absolute -left-2 bottom-0 text-xs text-gray-500">0%</div>
                  
                  {/* Barre del grafico con effetto gradiente */}
                  <div className="absolute left-[14%] bottom-0 w-12 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-md" style={{ height: '35%' }}>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-indigo-700">35%</div>
                  </div>
                  <div className="absolute left-[34%] bottom-0 w-12 bg-gradient-to-t from-indigo-600 to-indigo-500 rounded-t-md" style={{ height: '58%' }}>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-indigo-700">58%</div>
                  </div>
                  <div className="absolute left-[54%] bottom-0 w-12 bg-gradient-to-t from-indigo-700 to-indigo-600 rounded-t-md" style={{ height: '70%' }}>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-indigo-700">70%</div>
                  </div>
                  <div className="absolute left-[74%] bottom-0 w-12 bg-gradient-to-t from-indigo-800 to-indigo-700 rounded-t-md" style={{ height: '85%' }}>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-indigo-700">85%</div>
                  </div>
                  
                  {/* Etichette asse X */}
                  <div className="absolute bottom-[-18px] left-[14%] text-xs text-gray-600 transform -translate-x-1/2">Produttività</div>
                  <div className="absolute bottom-[-18px] left-[34%] text-xs text-gray-600 transform -translate-x-1/2">Efficienza</div>
                  <div className="absolute bottom-[-18px] left-[54%] text-xs text-gray-600 transform -translate-x-1/2">ROI</div>
                  <div className="absolute bottom-[-18px] left-[74%] text-xs text-gray-600 transform -translate-x-1/2">Soddisfazione</div>
                  
                  {/* Badge di crescita media */}
                  <div className="absolute top-1 right-1 bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full border border-green-200 font-medium flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    +62% media
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="lg:w-1/2"
              {...sectionAnimation}
              transition={{ ...sectionAnimation.transition, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">La nostra visione</h3>
              <p className="text-gray-600 mb-8">
                Un futuro in cui ogni azienda, indipendentemente dalla sua dimensione o settore, possa sfruttare 
                appieno il potenziale dell'intelligenza artificiale per innovare, crescere e rimanere competitiva 
                in un mondo in rapida evoluzione.
              </p>
              
              {/* Grafico professionale per la visione */}
              <motion.div 
                className="h-60 rounded-xl bg-white border border-gray-200 shadow-md p-5"
                {...cardAnimation}
                transition={{ ...cardAnimation.transition, delay: 0.3 }}
              >
                <h4 className="text-gray-800 font-semibold mb-3 text-center">Previsione di Adozione AI nelle Aziende</h4>
                <div className="relative h-44">
                  {/* Grid background per il grafico */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full grid grid-rows-4 grid-cols-6">
                      {Array(24).fill(0).map((_, i) => (
                        <div key={i} className="border-b border-r border-gray-100"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Indicatori di anno sull'asse X */}
                  <div className="absolute bottom-0 left-0 w-full border-t border-gray-300"></div>
                  <div className="absolute bottom-[-18px] left-[0%] text-xs text-gray-600">2022</div>
                  <div className="absolute bottom-[-18px] left-[20%] text-xs text-gray-600">2024</div>
                  <div className="absolute bottom-[-18px] left-[40%] text-xs text-gray-600">2026</div>
                  <div className="absolute bottom-[-18px] left-[60%] text-xs text-gray-600">2028</div>
                  <div className="absolute bottom-[-18px] left-[80%] text-xs text-gray-600">2030</div>
                  
                  {/* Indicatori percentuali sull'asse Y */}
                  <div className="absolute left-0 top-0 h-full border-r border-gray-300"></div>
                  <div className="absolute -left-2 top-0 text-xs text-gray-500">100%</div>
                  <div className="absolute -left-2 top-1/4 text-xs text-gray-500">75%</div>
                  <div className="absolute -left-2 top-1/2 text-xs text-gray-500">50%</div>
                  <div className="absolute -left-2 top-3/4 text-xs text-gray-500">25%</div>
                  <div className="absolute -left-2 bottom-0 text-xs text-gray-500">0%</div>
                  
                  {/* Area grafico con gradiente */}
                  <div className="absolute inset-0 overflow-hidden">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      {/* Area di riempimento con gradiente */}
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgb(79, 70, 229)" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="rgb(79, 70, 229)" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                      
                      {/* Area con riempimento sfumato */}
                      <path 
                        d="M0,85 C10,80 20,75 30,60 C40,45 50,30 60,20 C70,10 80,5 100,0 L100,100 L0,100 Z" 
                        fill="url(#chartGradient)" 
                      />
                      
                      {/* Linea del grafico */}
                      <path 
                        d="M0,85 C10,80 20,75 30,60 C40,45 50,30 60,20 C70,10 80,5 100,0" 
                        fill="none" 
                        stroke="#4f46e5" 
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      
                      {/* Punti di riferimento */}
                      <circle cx="0" cy="85" r="3" fill="#4f46e5" />
                      <circle cx="30" cy="60" r="3" fill="#4f46e5" />
                      <circle cx="60" cy="20" r="3" fill="#4f46e5" />
                      <circle cx="100" cy="0" r="3" fill="#4f46e5" />
                    </svg>
                    
                    {/* Etichette dati */}
                    <div className="absolute top-[85%] left-0 transform -translate-y-1/2 -translate-x-1/2">
                      <div className="text-xs font-semibold text-indigo-700 px-1.5 py-0.5 bg-white rounded-sm shadow-sm">15%</div>
                    </div>
                    <div className="absolute top-[60%] left-[30%] transform -translate-y-1/2 -translate-x-1/2">
                      <div className="text-xs font-semibold text-indigo-700 px-1.5 py-0.5 bg-white rounded-sm shadow-sm">40%</div>
                    </div>
                    <div className="absolute top-[20%] left-[60%] transform -translate-y-1/2 -translate-x-1/2">
                      <div className="text-xs font-semibold text-indigo-700 px-1.5 py-0.5 bg-white rounded-sm shadow-sm">80%</div>
                    </div>
                    <div className="absolute top-0 left-[100%] transform -translate-y-1/2 -translate-x-full">
                      <div className="text-xs font-semibold text-indigo-700 px-1.5 py-0.5 bg-white rounded-sm shadow-sm">100%</div>
                    </div>
                  </div>
                  
                  {/* Badge di trend */}
                  <div className="absolute top-1 right-1 bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-full border border-indigo-200 font-medium flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Crescita esponenziale
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* I nostri valori */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            {...sectionAnimation}
          >
            <h2 className="section-title">I nostri valori</h2>
            <p className="section-subtitle mx-auto">
              Principi fondamentali che guidano ogni nostra decisione e interazione.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Innovazione Umana"
              description="Crediamo che la tecnologia debba sempre servire l'uomo, non sostituirlo. La nostra AI potenzia le capacità umane senza mai perdere di vista l'elemento umano."
              delay={0.1}
            />
            <ValueCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
              title="Trasparenza"
              description="Comunichiamo in modo chiaro e onesto, spiegando in termini semplici concetti complessi e mantenendo sempre visibili processi e risultati."
              delay={0.2}
            />
            <ValueCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
              title="Semplicità"
              description="Rendiamo accessibile ciò che è complesso. Eliminiamo il superfluo per concentrarci sull'essenziale, creando soluzioni eleganti e facili da utilizzare."
              delay={0.3}
            />
            <ValueCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Orientamento ai risultati"
              description="Ogni soluzione che proponiamo è pensata per generare un impatto misurabile sul business dei nostri clienti. I risultati concreti sono la nostra priorità."
              delay={0.4}
            />
            <ValueCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              }
              title="Crescita continua"
              description="Il campo dell'AI evolve rapidamente e noi con esso. Investiamo costantemente nell'aggiornamento delle nostre competenze e metodologie."
              delay={0.5}
            />
            <ValueCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Partnership"
              description="Non siamo semplici fornitori, ma partner strategici dei nostri clienti. Il loro successo è il nostro successo, e lavoriamo fianco a fianco per raggiungerlo."
              delay={0.6}
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              {...sectionAnimation}
            >
              Pronto a lavorare con noi?
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-600 mb-10"
              {...sectionAnimation}
              transition={{ ...sectionAnimation.transition, delay: 0.2 }}
            >
              Scopri come possiamo aiutare la tua azienda a sfruttare il potere dell'intelligenza artificiale.
            </motion.p>
            
            <motion.div
              {...sectionAnimation}
              transition={{ ...sectionAnimation.transition, delay: 0.3 }}
            >
              <Link href="/contatti" className="btn-primary">
                Contattaci
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 