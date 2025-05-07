'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Componente per domanda/risposta
const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className={`bg-white border border-gray-100 rounded-lg overflow-hidden mb-4 shadow-sm transition-all duration-300 ${isOpen ? 'shadow-md' : ''}`}>
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors duration-300"
    >
      <h3 className="text-base md:text-lg font-semibold text-gray-800">{question}</h3>
      <svg
        className={`w-5 h-5 text-indigo-600 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isOpen && (
      <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
        <p className="text-gray-600">{answer}</p>
      </div>
    )}
  </div>
);

// Componente tab per categoria
const CategoryTab = ({
  title,
  isActive,
  onClick,
}: {
  title: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`py-2 px-4 text-sm font-medium rounded-md focus:outline-none transition-colors duration-300 ${
      isActive 
        ? 'bg-indigo-600 text-white shadow-sm' 
        : 'bg-white text-gray-700 hover:bg-gray-50'
    }`}
  >
    {title}
  </button>
);

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  
  const handleFAQClick = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
    setOpenFAQ(null);
  };
  
  const faqCategories = [
    {
      title: "Domande generali sull'AI",
      items: [
        {
          question: "Cos'è esattamente l'intelligenza artificiale?",
          answer: "L'intelligenza artificiale (AI) è un ramo dell'informatica che mira a creare sistemi in grado di eseguire compiti che normalmente richiederebbero l'intelligenza umana. Questi compiti includono l'apprendimento, il ragionamento, la risoluzione di problemi, la percezione, la comprensione del linguaggio e molto altro. L'AI moderna utilizza principalmente tecniche di apprendimento automatico per analizzare grandi quantità di dati e trovare modelli."
        },
        {
          question: "Quali sono i principali tipi di intelligenza artificiale utilizzati oggi?",
          answer: "Oggi le principali tecnologie AI in uso includono: 1) Apprendimento automatico (Machine Learning), che permette ai computer di imparare dai dati; 2) Reti neurali e Deep Learning, particolarmente efficaci per compiti complessi come riconoscimento di immagini e linguaggio naturale; 3) Elaborazione del linguaggio naturale (NLP), che consente ai computer di comprendere e generare testo umano; 4) Computer Vision, che permette di analizzare e comprendere immagini; 5) Sistemi di raccomandazione, utilizzati per suggerire prodotti o contenuti personalizzati."
        },
        {
          question: "L'AI può davvero sostituire il lavoro umano?",
          answer: "L'AI può automatizzare compiti ripetitivi e basati su regole, ma non sostituisce completamente il valore umano. Piuttosto, tende a trasformare i ruoli lavorativi. Le tecnologie AI eccellono nell'analisi dei dati, nell'automazione di processi ripetitivi e nel riconoscimento di pattern, ma mancano di creatività, empatia, giudizio etico e pensiero critico tipicamente umani. Il futuro più probabile è una collaborazione uomo-macchina, dove l'AI si occupa delle attività ripetitive permettendo agli umani di concentrarsi sugli aspetti che richiedono qualità unicamente umane."
        }
      ]
    },
    {
      title: "Implementazione dell'AI in azienda",
      items: [
        {
          question: "Cosa posso fare con l'AI se ho un piccolo business?",
          answer: "Anche le piccole aziende possono beneficiare enormemente dell'AI. Alcuni esempi pratici includono: automazione del servizio clienti con chatbot, ottimizzazione delle strategie di marketing con analisi predittive, gestione dell'inventario più efficiente, automatizzazione di attività amministrative ripetitive, generazione di contenuti per blog e social media, e miglioramento dei processi decisionali grazie all'analisi dei dati. Le soluzioni AI moderne sono sempre più accessibili anche per budget limitati."
        },
        {
          question: "Quanto tempo ci vuole per implementare una soluzione AI nella mia azienda?",
          answer: "I tempi di implementazione variano in base alla complessità del progetto. Soluzioni semplici come chatbot base o automazioni di processi possono essere implementate in 2-4 settimane. Progetti di media complessità, come sistemi di analisi predittiva o personalizzazione cliente, richiedono generalmente 1-3 mesi. Soluzioni più complesse e integrate potrebbero richiedere 3-6 mesi o più. Il nostro approccio prevede implementazioni graduali per ottenere risultati tangibili rapidamente, anche nei progetti più complessi."
        },
        {
          question: "Serve esperienza tecnica per lavorare con voi e implementare soluzioni AI?",
          answer: "Assolutamente no. Il nostro approccio è progettato per essere accessibile a tutti, indipendentemente dal livello di competenza tecnica. Ci occupiamo degli aspetti tecnici dell'implementazione, mentre tu ci fornisci la tua expertise sul business. Ti guidiamo passo dopo passo, utilizzando un linguaggio semplice e chiaro, e forniamo formazione al tuo team per garantire che possiate utilizzare efficacemente le soluzioni implementate. Il nostro obiettivo è rendere l'AI uno strumento accessibile e pratico per tutti."
        }
      ]
    },
    {
      title: "Costi e ROI",
      items: [
        {
          question: "Quanto costa un progetto di intelligenza artificiale?",
          answer: "I costi variano considerevolmente in base alla complessità e alla portata del progetto. Soluzioni di base come chatbot semplici o automazioni di base possono partire da 3.000-5.000€. Progetti di media complessità come sistemi di analisi predittiva personalizzati o integrazioni AI nei flussi di lavoro esistenti variano tipicamente tra 5.000-15.000€. Implementazioni più complesse e strategiche di livello enterprise possono superare i 20.000€. Offriamo opzioni scalabili per adattarci a diversi budget e iniziare con soluzioni a valore immediato."
        },
        {
          question: "Quanto tempo ci vuole per vedere un ritorno sull'investimento?",
          answer: "Il tempo per ottenere un ROI positivo varia in base al tipo di implementazione, ma molti clienti vedono risultati in 3-6 mesi. Automazioni di processi e chatbot generalmente producono risparmi immediati. Sistemi di analisi predittiva e personalizzazione cliente mostrano risultati in 3-9 mesi, con miglioramenti continui nel tempo. Progetti trasformativi più ampi possono richiedere 6-12 mesi, ma con impatti più significativi. Privilegiamo implementazioni che generano valore rapidamente, con un monitoraggio costante dei KPI per dimostrare il ROI."
        },
        {
          question: "Ci sono costi nascosti di cui dovrei essere consapevole?",
          answer: "Siamo totalmente trasparenti sui costi. Oltre all'implementazione iniziale, considera: 1) Costi di manutenzione e supporto (generalmente 15-20% del costo iniziale annualmente); 2) Eventuali costi di licenze per software di terze parti; 3) Costi di formazione aggiuntiva per il personale; 4) Potenziali costi di elaborazione dati per progetti di grandi dimensioni. Nella nostra proposta includiamo sempre tutti questi aspetti, con un TCO (Total Cost of Ownership) chiaro per 3 anni, senza sorprese."
        }
      ]
    },
    {
      title: "Considerazioni tecniche e di sicurezza",
      items: [
        {
          question: "Come vengono protetti i miei dati aziendali?",
          answer: "La sicurezza dei dati è una nostra priorità assoluta. Implementiamo diverse misure: crittografia end-to-end per tutti i dati sensibili, accesso basato su ruoli con autenticazione multi-fattore, infrastrutture cloud conformi agli standard ISO 27001 e GDPR, audit di sicurezza regolari e penetration testing. Firmiamo accordi di riservatezza (NDA) e rispettiamo tutte le normative sulla privacy dei dati. Dove possibile, progettiamo soluzioni che elaborano i dati localmente per ridurre l'esposizione. Ti forniamo anche documentazione completa sulle misure di sicurezza implementate."
        },
        {
          question: "Le soluzioni AI sviluppate si integrano con i miei sistemi esistenti?",
          answer: "Sì, progettiamo tutte le nostre soluzioni AI per integrarsi perfettamente con i tuoi sistemi esistenti. Supportiamo l'integrazione con la maggior parte degli ERP, CRM, piattaforme di e-commerce, strumenti di marketing, sistemi di gestione documentale e altre applicazioni aziendali. Utilizziamo API standard ove disponibili e sviluppiamo connettori personalizzati quando necessario. Il nostro processo prevede una fase iniziale di mappatura completa del tuo stack tecnologico per garantire un'integrazione fluida, minimizzando interruzioni nei flussi di lavoro esistenti."
        },
        {
          question: "Posso personalizzare la soluzione AI nel tempo in base ai cambiamenti del mio business?",
          answer: "Assolutamente sì. Le nostre soluzioni sono progettate per essere flessibili e adattabili. Implementiamo architetture modulari che permettono di modificare e ampliare le funzionalità nel tempo. Forniamo strumenti di configurazione accessibili per adattamenti semplici e un supporto dedicato per modifiche più sostanziali. Molte delle nostre soluzioni includono anche capacità di auto-apprendimento, migliorando automaticamente con l'uso. Offriamo inoltre revisioni periodiche per assicurarci che la soluzione continui a soddisfare le tue esigenze in evoluzione."
        }
      ]
    }
  ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Domande frequenti
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tutto quello che devi sapere sull'intelligenza artificiale e su come può aiutare la tua azienda
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Tabs per le categorie */}
            <div className="mb-8 flex flex-wrap gap-2 justify-center">
              {faqCategories.map((category, idx) => (
                <CategoryTab
                  key={idx}
                  title={category.title}
                  isActive={activeCategory === idx}
                  onClick={() => handleCategoryClick(idx)}
                />
              ))}
            </div>
            
            {/* Domande e risposte */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-6 text-gray-800 pb-2 border-b border-gray-100">
                {faqCategories[activeCategory].title}
              </h2>
              
              {faqCategories[activeCategory].items.map((item, idx) => {
                const globalIndex = activeCategory * 100 + idx;
                return (
                  <motion.div
                    key={globalIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <FAQItem
                      question={item.question}
                      answer={item.answer}
                      isOpen={openFAQ === globalIndex}
                      onClick={() => handleFAQClick(globalIndex)}
                    />
                  </motion.div>
                );
              })}
              
              <div className="mt-8 pt-4 border-t border-gray-100 text-center">
                <p className="text-gray-600 text-sm mb-4">Non hai trovato risposta alla tua domanda?</p>
                <Link href="/contatti" className="inline-block py-2 px-6 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300">
                  Contattaci
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/servizi" className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-center transition-colors duration-300">
                <h3 className="font-medium text-gray-800 mb-1">I nostri servizi</h3>
                <p className="text-sm text-gray-600">Scopri come possiamo aiutarti</p>
              </Link>
              <Link href="/metodo" className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-center transition-colors duration-300">
                <h3 className="font-medium text-gray-800 mb-1">Il nostro metodo</h3>
                <p className="text-sm text-gray-600">Il nostro approccio all'AI</p>
              </Link>
              <Link href="/contatti" className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-center transition-colors duration-300">
                <h3 className="font-medium text-gray-800 mb-1">Contattaci</h3>
                <p className="text-sm text-gray-600">Parliamo del tuo progetto</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 