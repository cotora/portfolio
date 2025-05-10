'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="mt-16 pt-6 border-t border-foreground/10 text-center text-sm text-foreground/60"
      >
    <a href="https://iconscout.com/icons/kaggle" className="text-underline font-size-sm" target="_blank">Kaggle</a> on <a href="https://iconscout.com" className="text-underline font-size-sm">IconScout</a>
    </motion.footer>
  );
}