import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Heart } from 'lucide-react';
import CandidateCard from '../CandidateCard/CandidateCard';
import { ANIMATION_VARIANTS } from '../../constants/discovery';

const CandidateCardContainer = ({
  currentCandidate,
  currentIndex,
  totalCandidates,
  onNext,
  onPrevious,
  onShortlist,
  onReject,
  onViewDetails
}) => {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalCandidates - 1;

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onPrevious}
          disabled={isFirst}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
            isFirst
              ? 'bg-secondary-200 dark:bg-secondary-700 text-secondary-400 cursor-not-allowed'
              : 'bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700 shadow-lg'
          }`}
          aria-label="Previous candidate"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onNext}
          disabled={isLast}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
            isLast
              ? 'bg-secondary-200 dark:bg-secondary-700 text-secondary-400 cursor-not-allowed'
              : 'bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700 shadow-lg'
          }`}
          aria-label="Next candidate"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Candidate Card */}
      <AnimatePresence mode="wait">
        {currentCandidate && (
          <motion.div
            key={currentCandidate.id}
            variants={ANIMATION_VARIANTS.card}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, type: "spring" }}
            className="mx-auto max-w-md"
          >
            <CandidateCard
              candidate={currentCandidate}
              onShortlist={() => onShortlist(currentCandidate.email)}
              onReject={onReject}
              onViewDetails={() => onViewDetails(currentCandidate)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReject}
          className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Reject candidate"
        >
          <X className="w-8 h-8" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onShortlist(currentCandidate?.email)}
          className="w-16 h-16 rounded-full bg-accent-500 hover:bg-accent-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Shortlist candidate"
        >
          <Heart className="w-8 h-8" />
        </motion.button>
      </div>

      {/* Pagination Info */}
      <div className="text-center mt-6 text-secondary-600 dark:text-secondary-400">
        {currentIndex + 1} of {totalCandidates} candidates
      </div>
    </div>
  );
};

export default CandidateCardContainer;
