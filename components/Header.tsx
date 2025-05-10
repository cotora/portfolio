'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="flex flex-col items-center mb-16 md:flex-row md:justify-between relative">
      <div className="z-10 flex items-center mb-8 md:mb-0">
        <motion.h1 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl font-bold tracking-tight mr-4 text-foreground"
        >
          cotora
        </motion.h1>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            id="icon"
            src="/icon_cloud_face.png"
            alt="icon"
            width={60}
            height={60}
            quality={100}
            className="rounded-xl shadow-lg border-2 border-foreground/10"
          />
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex gap-5"
      >
        <motion.div whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <Link href="https://twitter.com/cotora2121" target="_blank" rel="noopener noreferrer" 
            className="p-3 bg-background/50 rounded-full shadow-lg backdrop-blur-sm border border-foreground/10 flex items-center justify-center hover:shadow-blue-500/20">
            <Image src="/x.svg" alt="X (Twitter)" width={20} height={20} />
          </Link>
        </motion.div>
        <motion.div whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <Link href="https://github.com/cotora" target="_blank" rel="noopener noreferrer"
            className="p-3 bg-background/50 rounded-full shadow-lg backdrop-blur-sm border border-foreground/10 flex items-center justify-center hover:shadow-purple-500/20">
            <Image src="/github_icon.svg" alt="GitHub" width={20} height={20} />
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
}