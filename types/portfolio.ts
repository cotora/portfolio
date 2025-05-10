import { ReactNode } from 'react';

export interface SectionProps {
  title: string;
  items: ReactNode[];
  delay: number;
  color: string;
}

export interface LinkProps {
  name: string;
  url: string;
  delay: number;
}