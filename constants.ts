import { Users, Eye, TreePalm, DollarSign, Droplet, Globe, Hammer, Monitor, Gift, Trophy, Activity, Map, Code } from 'lucide-react';
import { NavItem, StatItem, VideoItem, TeamMember, ProjectItem, JobItem, MerchItem, WaterImpactItem, TimelineItem, FeatureItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Videos', href: '#videos' },
  { label: 'Philanthropy', href: '#philanthropy' },
  { label: 'Team', href: '#team' },
  { label: 'Merch', href: '#merch' },
  { label: 'Water', href: '#team-water' },
];

export const STATS: StatItem[] = [
  { label: 'Subscribers', value: '450M+', numericValue: 250, icon: Users },
  { label: 'Total Views', value: '90B+', numericValue: 40, icon: Eye },
  { label: 'Trees Planted', value: '45M+', numericValue: 25, icon: TreePalm },
  { label: 'Donated', value: '$150M+', numericValue: 50, icon: DollarSign },
];

export const VIDEOS: VideoItem[] = [
  { id: '1', title: "World's Fastest Man Vs Robot!", views: 'Latest Video', thumbnail: 'World\'s Fastest Man Vs Robot!.webp', url: 'https://www.youtube.com/watch?v=Ah_uuTwGOYU' },
  { id: '2', title: "100 People Vs World's Biggest Trap!", views: 'Latest Video', thumbnail: '100 people vs worlds biggest trap.webp', url: 'https://www.youtube.com/watch?v=3RmOvxilbPM&t=199s' },
  { id: '3', title: "I Saved 1,000 Animals From Dying", views: 'Latest Video', thumbnail: 'I Saved 1,000 Animals From Dying.webp', url: 'https://www.youtube.com/watch?v=Oo9EbArcQ1c&t=108s' },
  { id: '4', title: "100 Kids Vs World's Strongest Man!", views: 'Latest Video', thumbnail: '100 Kids Vs World\'s Strongest Man!.webp', url: 'https://www.youtube.com/watch?v=oBXSvS2QKxU&t=541s' },
  { id: '5', title: "Would You Risk Dying For $500,000?", views: 'Latest Video', thumbnail: 'would You Risk Dying For $500,000.webp', url: 'https://www.youtube.com/watch?v=zo7i8VTpfNM' },
  { id: '6', title: "Survive 30 Days Chained To Your Ex, Win $250,000", views: 'Latest Video', thumbnail: 'Survive 30 Days Chained To Your Ex, Win $250,000.webp', url: 'https://www.youtube.com/watch?v=4l97aNza_Zc&t=60s' },
];

export const TEAM: TeamMember[] = [
  { 
    name: 'Jimmy', 
    role: 'MrBeast', 
    image: '/images/mrbeast.webp',
    twitter: 'https://twitter.com/MrBeast',
    instagram: 'https://www.instagram.com/mrbeast/'
  },
  { 
    name: 'Chandler', 
    role: 'Talent', 
    image: '/images/channdler.jpg',
    twitter: 'https://twitter.com/chandlerhallow',
    instagram: 'https://www.instagram.com/chandlerhallow/'
  },
  { 
    name: 'Karl', 
    role: 'Creative', 
    image: '/images/karl.webp',
    twitter: 'https://twitter.com/KarlJacobs_',
    instagram: 'https://www.instagram.com/karljacobs/'
  },
  { 
    name: 'Nolan', 
    role: 'Talent', 
    image: '/images/nolan.jpg',
    twitter: 'https://twitter.com/nolanhansen',
    instagram: 'https://www.instagram.com/nolanhansen/'
  },
  { 
    name: 'Tareq', 
    role: 'Production', 
    image: '/images/tareq.webp',
    twitter: 'https://twitter.com/tareq',
    instagram: 'https://www.instagram.com/tareq/'
  },
  { 
    name: 'Majd Khader', 
    role: 'Team Member', 
    image: '/images/majd.webp',
    twitter: 'https://twitter.com/majdkhader',
    instagram: 'https://www.instagram.com/majdkhader/'
  },
];

export const JOBS: JobItem[] = [
  { title: 'Senior Video Editor', department: 'Post-Production', location: 'Greenville, NC', type: 'Full-time' },
  { title: 'Production Manager', department: 'Production', location: 'Greenville, NC', type: 'Full-time' },
  { title: 'React Developer', department: 'Tech', location: 'Remote', type: 'Contract' },
  { title: 'Merch Designer', department: 'Creative', location: 'Greenville, NC', type: 'Full-time' },
];

export const MERCH: MerchItem[] = [
  { name: 'Beast Hoodie', price: '$49.99', imageFront: '/images/mr beast merch 1.webp', imageBack: '/images/mr beast merch 1.webp' },
  { name: 'Beast Tee', price: '$29.99', imageFront: '/images/mr beast merch 2.jpg', imageBack: '/images/mr beast merch 2.jpg' },
  { name: 'Beast Collection', price: '$39.99', imageFront: '/images/mr beast merch 3.jpg', imageBack: '/images/mr beast merch 3.jpg' },
];

export const PROJECTS: ProjectItem[] = [
  { title: 'Team Trees', description: '20 Million Trees Planted by 2020', image: '/images/team tree.jpg', stats: '24M+ Planted' },
  { title: 'Team Seas', description: 'Removing 30M Pounds of Trash', image: '/images/team seas.png', stats: '33M+ lbs Removed' },
  { title: 'Beast Philanthropy', description: 'Feeding millions across the globe', image: '/images/project phailanthropy.webp', stats: '5M+ Meals Served' },
];

export const TEAM_WATER_IMPACT: WaterImpactItem[] = [
  { label: 'Wells Built', value: '150+', icon: Hammer },
  { label: 'People Helped', value: '500,000+', icon: Users },
  { label: 'Liters Delivered', value: '100M+', icon: Droplet },
  { label: 'Countries', value: '12', icon: Globe },
];

export const CREATOR_TIMELINE: TimelineItem[] = [
  { day: 'Day 1', title: 'The Idea', description: 'Concepting a massive MrBeast clone site.' },
  { day: 'Day 2', title: 'Hero Section', description: 'Building the immersive intro.' },
  { day: 'Day 3', title: 'API Integration', description: 'Connecting dynamic video feeds.' },
  { day: 'Day 4', title: 'Polish & Animation', description: 'Adding that neon glow feel.' },
  { day: 'Day 5', title: 'Launch', description: 'Going live to the world.' },
];

export const FUTURE_FEATURES: FeatureItem[] = [
  { title: 'Leaderboard System', description: 'Fans gain points for interactions.', icon: Trophy },
  { title: 'Fan Challenges', description: 'Upload challenge clips and win prizes.', icon: Activity },
  { title: 'Donation Tracker', description: 'Real-time charity goal visualization.', icon: DollarSign },
  { title: 'Interactive Map', description: 'See global impact of Team Water.', icon: Map },
  { title: 'Mini-Games', description: 'Simple browser challenges.', icon: Code },
  { title: 'AI Rewards', description: 'Surprise drops powered by AI.', icon: Gift },
];