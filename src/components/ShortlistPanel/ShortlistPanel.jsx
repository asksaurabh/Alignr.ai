import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { removeShortlistedCandidate } from '../../store/slices/candidatesSlice';

const ShortlistPanel = ({ shortlistedCandidates }) => {
  const dispatch = useDispatch();

  const handleRemoveCandidate = (candidateEmail) => {
    dispatch(removeShortlistedCandidate(candidateEmail));
  };

  return (
    <div className="lg:w-80">
      <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700 sticky top-24">
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <Heart className="w-5 h-5 text-accent-500" />
          <span>Shortlist ({shortlistedCandidates.length})</span>
        </h3>
        
        <div className="space-y-3">
          {shortlistedCandidates.length === 0 ? (
            <div className="text-center py-8 text-secondary-500">
              <Heart className="w-12 h-12 mx-auto mb-3 text-secondary-300" />
              <p>No candidates shortlisted yet</p>
              <p className="text-sm">Start swiping to build your team!</p>
            </div>
          ) : (
            <AnimatePresence>
              {shortlistedCandidates.map((candidate) => (
                <motion.div
                  key={candidate.email}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-secondary-50 dark:bg-secondary-700 rounded-lg p-3 border border-secondary-200 dark:border-secondary-600"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {candidate.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-secondary-900 dark:text-white truncate">
                        {candidate.name}
                      </p>
                      <p className="text-xs text-secondary-600 dark:text-secondary-400 truncate">
                        {candidate.role}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveCandidate(candidate.email)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                      aria-label={`Remove ${candidate.name} from shortlist`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortlistPanel;
