/**
 * Constants for candidate filtering
 */

export const FILTER_OPTIONS = {
  skills: [
    'React', 'Node.js', 'Python', 'Java', 'JavaScript', 'TypeScript',
    'AWS', 'Docker', 'Kubernetes', 'Machine Learning', 'Data Science',
    'UI/UX Design', 'Product Management', 'DevOps', 'Agile'
  ],
  
  experience: [
    '0-2 years', '2-5 years', '5-10 years', '10+ years'
  ],
  
  education: [
    'High School', 'Associate\'s', 'Bachelor\'s', 'Master\'s', 'PhD'
  ],
  
  salaryRanges: [
    '$0-$50k', '$50k-$100k', '$100k-$150k', '$150k-$200k', '$200k+'
  ],
  
  companySizes: [
    '1-10 employees', '11-50 employees', '51-200 employees', '200+ employees'
  ]
};

export const DEFAULT_FILTERS = {
  skills: [],
  location: '',
  experience: '',
  education: '',
  salaryRange: '',
  companySize: '',
};

export const FILTER_LABELS = {
  skills: 'Skills',
  location: 'Location',
  experience: 'Experience Level',
  education: 'Education',
  salaryRange: 'Salary Range',
  companySize: 'Company Size'
};

export const FILTER_PLACEHOLDERS = {
  location: 'Enter city, state, or country...',
  experience: 'Any experience level',
  education: 'Any education level',
  salaryRange: 'Any salary range',
  companySize: 'Any company size'
};
