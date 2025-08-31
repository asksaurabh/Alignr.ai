import { Users, Clock, TrendingUp, Star } from 'lucide-react';

export const INSIGHTS_STATS = [
  { 
    label: 'Total Applications', 
    value: '342', 
    icon: Users, 
    color: 'primary',
    bgColor: 'bg-primary-100 dark:bg-primary-900',
    textColor: 'text-primary-600 dark:text-primary-400',
    change: '+12%',
    changeColor: 'text-primary-600 dark:text-primary-400'
  },
  { 
    label: 'Interview Rate', 
    value: '23%', 
    icon: Clock, 
    color: 'accent',
    bgColor: 'bg-accent-100 dark:bg-accent-900',
    textColor: 'text-accent-600 dark:text-accent-400',
    change: '+5%',
    changeColor: 'text-accent-600 dark:text-accent-400'
  },
  { 
    label: 'Offer Rate', 
    value: '8.2%', 
    icon: TrendingUp, 
    color: 'green',
    bgColor: 'bg-green-100 dark:bg-green-900',
    textColor: 'text-green-600 dark:text-green-400',
    change: '+2%',
    changeColor: 'text-green-600 dark:text-green-400'
  },
  { 
    label: 'Avg. Time to Hire', 
    value: '18 days', 
    icon: Clock, 
    color: 'secondary',
    bgColor: 'bg-secondary-100 dark:bg-secondary-900',
    textColor: 'text-secondary-600 dark:text-secondary-400',
    change: '-3 days',
    changeColor: 'text-green-600 dark:text-green-400'
  }
];

export const CHART_COLORS = {
  primary: '#3B82F6',
  accent: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  purple: '#8B5CF6',
  cyan: '#06B6D4'
};

export const SKILLS_DATA = [
  { name: 'React', value: 45, color: CHART_COLORS.primary },
  { name: 'Node.js', value: 38, color: CHART_COLORS.accent },
  { name: 'Python', value: 32, color: CHART_COLORS.warning },
  { name: 'Java', value: 28, color: CHART_COLORS.danger },
  { name: 'AWS', value: 25, color: CHART_COLORS.purple },
  { name: 'Docker', value: 22, color: CHART_COLORS.cyan }
];

export const EXPERIENCE_DATA = [
  { name: '0-2 years', value: 15, color: CHART_COLORS.primary },
  { name: '2-5 years', value: 35, color: CHART_COLORS.accent },
  { name: '5-10 years', value: 30, color: CHART_COLORS.warning },
  { name: '10+ years', value: 20, color: CHART_COLORS.danger }
];

export const SALARY_DATA = [
  { range: '$50k-$100k', count: 25, percentage: 25 },
  { range: '$100k-$150k', count: 45, percentage: 45 },
  { range: '$150k-$200k', count: 20, percentage: 20 },
  { range: '$200k+', count: 10, percentage: 10 }
];

export const LOCATION_DATA = [
  { location: 'United States', count: 40, color: CHART_COLORS.primary },
  { location: 'Brazil', count: 25, color: CHART_COLORS.accent },
  { location: 'India', count: 20, color: CHART_COLORS.warning },
  { location: 'Europe', count: 15, color: CHART_COLORS.danger }
];

export const TIME_SERIES_DATA = [
  { month: 'Jan', applications: 45, interviews: 12, offers: 3 },
  { month: 'Feb', applications: 52, interviews: 18, offers: 5 },
  { month: 'Mar', applications: 48, interviews: 15, offers: 4 },
  { month: 'Apr', applications: 61, interviews: 22, offers: 6 },
  { month: 'May', applications: 55, interviews: 19, offers: 5 },
  { month: 'Jun', applications: 67, interviews: 25, offers: 7 }
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
  left: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  }
};
