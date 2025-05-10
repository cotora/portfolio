'use client';

import { motion } from 'framer-motion';
import { SectionProps } from '@/types/portfolio';

const SectionCard = ({ section }: { section: SectionProps }) => {
  return (
    <motion.section 
      whileHover={{ 
        scale: 1.01,
        boxShadow: '0 20px 25px -5px rgba(var(--primary-rgb), 0.03), 0 10px 10px -5px rgba(var(--primary-rgb), 0.01), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      }}
      className="p-6 rounded-2xl border border-foreground/10 hover:shadow-none transition-all duration-300 relative"
      style={{
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.03), 0 4px 6px -2px rgba(0, 0, 0, 0.02), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      }}
    >
      <h2 className="text-xl font-semibold mb-4 border-b border-foreground/10 pb-2 flex items-center">
        <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
        {section.title}
      </h2>
      <div className="space-y-3">
        <ul className="list-none space-y-2 pl-4">
          {section.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default SectionCard;