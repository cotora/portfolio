'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LinkProps } from '@/types/portfolio';
import { ArrowUpRight } from 'lucide-react';

export default function LinkButton({ link }: { link: LinkProps }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: link.delay, duration: 0.3, type: "spring", stiffness: 500, damping: 15 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={link.url}
        className="group flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-background to-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl border border-foreground/5 hover:border-primary/20 text-foreground/90 hover:text-primary transition-all duration-75 overflow-hidden relative"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.icon && (
            <Image
                src={link.icon}
                alt={link.name}
                width={24}
                height={24}
                quality={100}
            />
        )}
        <span className="font-medium">{link.name}</span>
        <div className="flex items-center">
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: -4 }}
            transition={{ duration: 0.1 }}
          >
            <ArrowUpRight className="w-5 h-5 text-primary group-hover:opacity-100 opacity-70 transition-all duration-75" />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-75 rounded-xl"></div>
      </Link>
    </motion.div>
  );
}