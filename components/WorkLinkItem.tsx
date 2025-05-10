import Link from 'next/link';
import { ReactNode } from 'react';

interface WorkLinkItemProps {
  href: string;
  children: ReactNode;
}

export const WorkLinkItem = ({ href, children }: WorkLinkItemProps) => {
  return (
    <Link 
      href={href}
      className="group inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium border border-foreground/5 hover:border-foreground/10 transition-all duration-300"
      target="_blank" 
      rel="noopener noreferrer"
    >
      {children}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4 ml-1.5 transform group-hover:translate-x-0.5 transition-transform" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path 
          fillRule="evenodd" 
          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
          clipRule="evenodd" 
        />
      </svg>
    </Link>
  );
};
