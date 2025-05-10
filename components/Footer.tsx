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
      <p>© 2025 cotora. All rights reserved.</p>
    </motion.footer>
  );
}