import { Users, Heart, Calendar, Building } from 'lucide-react';

export const DISCOVERY_STATS = [
  { 
    label: 'Total Candidates', 
    value: 'total', 
    icon: Users, 
    color: 'primary',
    bgColor: 'bg-primary-100 dark:bg-primary-900',
    textColor: 'text-primary-600 dark:text-primary-400'
  },
  { 
    label: 'Shortlisted', 
    value: 'shortlisted', 
    icon: Heart, 
    color: 'accent',
    bgColor: 'bg-accent-100 dark:bg-accent-900',
    textColor: 'text-accent-600 dark:text-accent-400'
  },
  { 
    label: 'In Progress', 
    value: 'inProgress', 
    icon: Calendar, 
    color: 'secondary',
    bgColor: 'bg-secondary-100 dark:bg-secondary-900',
    textColor: 'text-secondary-600 dark:text-secondary-400'
  },
  { 
    label: 'Hired', 
    value: 'hired', 
    icon: Building, 
    color: 'primary',
    bgColor: 'bg-primary-100 dark:bg-primary-900',
    textColor: 'text-primary-600 dark:text-primary-400'
  }
];

export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  card: {
    initial: { opacity: 0, scale: 0.8, rotateY: -15 },
    animate: { opacity: 1, scale: 1, rotateY: 0 },
    exit: { opacity: 0, scale: 0.8, rotateY: 15 },
  }
};
