'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: 'LAIWORKS',
    links: [
      { name: 'Chi Siamo', href: '/chi-siamo' },
      { name: 'Il Nostro Metodo', href: '/metodo' },
      { name: 'Servizi', href: '/servizi' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Servizi',
    links: [
      { name: 'Consulenza AI', href: '/servizi#consulenza' },
      { name: 'Automazioni', href: '/servizi#automazioni' },
      { name: 'Integrazione AI', href: '/servizi#integrazione' },
      { name: 'Formazione', href: '/servizi#formazione' },
    ],
  },
  {
    title: 'Contatti',
    links: [
      { name: 'Email: info@laiworks.it', href: 'mailto:info@laiworks.it' },
      { name: 'Telefono: +39 351 922 8765', href: 'tel:+393519228765' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/laiworks' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-gray-900">
                LAIWORKS
              </span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-xs">
              Soluzioni di intelligenza artificiale personalizzate per trasformare il tuo business e accelerare la crescita.
            </p>
            <div className="mt-6 flex space-x-5">
              <a href="https://www.linkedin.com/in/lisandro-rizzo-ba92a5364/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077B5] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {footerLinks.map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <div className="mt-8 pt-8 border-t border-gray-200 md:mt-0 md:pt-0 md:border-0">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} LAIWORKS. Tutti i diritti riservati.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              P.IVA: 04837320169
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 