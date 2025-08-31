/**
 * Utility functions for processing candidate data
 */

/**
 * Format salary for display
 * @param {string|number} salary - Raw salary value
 * @returns {string} Formatted salary string
 */
export const formatSalary = (salary) => {
  if (!salary) return 'Not specified';
  
  // Handle different salary formats
  if (typeof salary === 'string') {
    // Remove currency symbols and commas
    const cleanSalary = salary.replace(/[$,]/g, '');
    return `$${cleanSalary}`;
  }
  
  if (typeof salary === 'number') {
    return `$${salary.toLocaleString()}`;
  }
  
  return 'Not specified';
};

/**
 * Get total years of experience from work experiences
 * @param {Array} workExperiences - Array of work experience objects
 * @returns {number} Total years of experience
 */
export const getExperienceYears = (workExperiences) => {
  if (!workExperiences || !Array.isArray(workExperiences)) return 0;
  return workExperiences.length;
};

/**
 * Get highest education level
 * @param {Object} education - Education object
 * @returns {string} Highest education level
 */
export const getEducationLevel = (education) => {
  if (!education?.highest_level) return 'Not specified';
  return education.highest_level;
};

/**
 * Format work availability for display
 * @param {Array} workAvailability - Array of work availability options
 * @returns {string} Formatted work availability string
 */
export const formatWorkAvailability = (workAvailability) => {
  if (!workAvailability || !Array.isArray(workAvailability)) return 'Not specified';
  return workAvailability.join(', ');
};

/**
 * Format submission date
 * @param {string|Date} submittedAt - Submission timestamp
 * @returns {string} Formatted date string
 */
export const formatSubmissionDate = (submittedAt) => {
  if (!submittedAt) return 'Not specified';
  
  try {
    const date = new Date(submittedAt);
    if (isNaN(date.getTime())) return 'Invalid date';
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    return 'Invalid date';
  }
};

/**
 * Get candidate initials from name
 * @param {string} name - Full name
 * @returns {string} Initials (first letter of each word)
 */
export const getInitials = (name) => {
  if (!name) return '?';
  
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2); // Limit to 2 initials
};

/**
 * Validate candidate data structure
 * @param {Object} candidate - Candidate object
 * @returns {boolean} Whether candidate data is valid
 */
export const isValidCandidate = (candidate) => {
  return candidate && 
         typeof candidate === 'object' && 
         candidate.name && 
         candidate.email;
};

/**
 * Get candidate match score with fallback
 * @param {number} matchScore - Match score percentage
 * @returns {number} Match score or default value
 */
export const getMatchScore = (matchScore) => {
  if (typeof matchScore === 'number' && !isNaN(matchScore)) {
    return Math.min(Math.max(matchScore, 0), 100); // Clamp between 0-100
  }
  return 0;
};
