'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import SectionCard from '@/components/SectionCard';
import LinkButton from '@/components/LinkButton';
import Footer from '@/components/Footer';
import { sections, links } from '@/data/portfolioData';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background py-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 max-w-5xl"
      >
        <Header />

        <main>
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {sections.map((section) => (
              <SectionCard 
                key={section.title}
                section={section}
              />
            ))}

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="md:col-span-2 p-6 rounded-2xl shadow-sm border border-foreground/10 hover:shadow-md transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-4 border-b border-foreground/10 pb-2 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                Others
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {links.map((link) => (
                  <LinkButton key={link.name} link={link} />
                ))}
              </div>
            </motion.section>
          </motion.article>
        </main>

        <Footer />
      </motion.div>
    </div>
  );
}