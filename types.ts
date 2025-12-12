import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string; // e.g., "250M+"
  label: string;
  icon: LucideIcon;
  numericValue: number; // for animation
}

export interface VideoItem {
  id: string;
  title: string;
  views: string;
  thumbnail: string;
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  twitter?: string;
  instagram?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  stats?: string;
}

export interface JobItem {
  title: string;
  location: string;
  type: string;
  department: string;
}

export interface MerchItem {
  name: string;
  price: string;
  imageFront: string;
  imageBack: string;
}

export interface WaterImpactItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface TimelineItem {
  day: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}