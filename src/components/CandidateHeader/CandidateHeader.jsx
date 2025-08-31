import React from 'react';
import { Star, X } from 'lucide-react';
import { getInitials, getMatchScore } from '../../utils/candidateUtils';

/**
 * Candidate header component for modals
 * @param {Object} props - Component props
 * @param {Object} props.candidate - Candidate object
 * @param {Function} props.onClose - Close modal function
 */
const CandidateHeader = ({ candidate, onClose }) => {
  const initials = getInitials(candidate.name);
  const matchScore = getMatchScore(candidate.matchScore);

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            {initials}
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
            {candidate.name}
          </h3>
          <p className="text-lg text-secondary-600 dark:text-secondary-400">
            {candidate.role}
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2 bg-accent-100 dark:bg-accent-900 px-3 py-1 rounded-full">
          <Star className="w-4 h-4 text-accent-600 dark:text-accent-400" />
          <span className="text-sm font-semibold text-accent-700 dark:text-accent-300">
            {matchScore}% Match
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-secondary-500" />
        </button>
      </div>
    </div>
  );
};

export default CandidateHeader;
