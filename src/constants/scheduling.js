import { UserCheck, Mail, Calendar, CheckCircle } from 'lucide-react';

export const SCHEDULING_STATS = [
  { 
    label: "Shortlisted", 
    value: 'shortlisted', 
    icon: UserCheck, 
    color: 'blue',
    bgColor: 'bg-blue-100 dark:bg-blue-900',
    textColor: 'text-blue-600 dark:text-blue-400'
  },
  { 
    label: "Outreach Sent", 
    value: 'outreach_sent', 
    icon: Mail, 
    color: 'yellow',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900',
    textColor: 'text-yellow-600 dark:text-yellow-400'
  },
  { 
    label: "Interviews Scheduled", 
    value: 'interview_scheduled', 
    icon: Calendar, 
    color: 'green',
    bgColor: 'bg-green-100 dark:bg-green-900',
    textColor: 'text-green-600 dark:text-green-400'
  },
  { 
    label: "Response Rate", 
    value: 'response_rate', 
    icon: CheckCircle, 
    color: 'accent',
    bgColor: 'bg-accent-100 dark:bg-accent-900',
    textColor: 'text-accent-600 dark:text-accent-400'
  }
];

export const CANDIDATE_STATUSES = {
  shortlisted: {
    label: 'Shortlisted',
    color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  },
  outreach_sent: {
    label: 'Outreach Sent',
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
  },
  interview_scheduled: {
    label: 'Interview Scheduled',
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  }
};

export const INTERVIEW_TYPES = [
  { value: 'video', label: 'Video Call' },
  { value: 'phone', label: 'Phone Call' },
  { value: 'onsite', label: 'On-site' }
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
  modal: {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 },
  }
};
