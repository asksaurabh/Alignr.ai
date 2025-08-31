import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Filter, Search, Users } from 'lucide-react';
import { loadCandidates, shortlistCandidate, setSearchQuery } from '../store/slices/candidatesSlice';
import { addNotification } from '../store/slices/uiSlice';
import LoadingSkeleton from '../components/LoadingSkeleton/LoadingSkeleton';
import FilterModal from '../components/FilterModal/FilterModal';
import CandidateDetailsModal from '../components/CandidateDetailsModal/CandidateDetailsModal';
import DiscoveryStats from '../components/DiscoveryStats/DiscoveryStats';
import ShortlistPanel from '../components/ShortlistPanel/ShortlistPanel';
import CandidateCardContainer from '../components/CandidateCardContainer/CandidateCardContainer';
import { ANIMATION_VARIANTS } from '../constants';

const DiscoveryPage = () => {
  const dispatch = useDispatch();
  const { candidates, filteredCandidates, loading, shortlistedCandidates } = useSelector((state) => state.candidates);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setLocalSearchQuery] = useState('');
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  // Memoized search results to prevent unnecessary recalculations
  const searchFilteredCandidates = useMemo(() => {
    if (!searchQuery.trim()) return filteredCandidates;
    
    const query = searchQuery.toLowerCase();
    return filteredCandidates.filter(candidate =>
      candidate.name.toLowerCase().includes(query) ||
      candidate.role.toLowerCase().includes(query) ||
      candidate.skills.some(skill => skill.toLowerCase().includes(query))
    );
  }, [filteredCandidates, searchQuery]);

  // Memoized current candidate
  const currentCandidate = useMemo(() => 
    searchFilteredCandidates[currentIndex], 
    [searchFilteredCandidates, currentIndex]
  );

  // Memoized navigation state
  const navigationState = useMemo(() => ({
    isFirst: currentIndex === 0,
    isLast: currentIndex === searchFilteredCandidates.length - 1,
    totalCandidates: searchFilteredCandidates.length
  }), [currentIndex, searchFilteredCandidates.length]);

  useEffect(() => {
    dispatch(loadCandidates());
  }, [dispatch]);

  // Memoized handlers to prevent unnecessary re-renders
  const handleNext = useCallback(() => {
    if (currentIndex < searchFilteredCandidates.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, searchFilteredCandidates.length]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  const handleShortlist = useCallback((candidateId) => {
    dispatch(shortlistCandidate(candidateId));
    dispatch(addNotification({
      type: 'success',
      message: 'Candidate added to shortlist!',
      duration: 3000
    }));
    handleNext();
  }, [dispatch, handleNext]);

  const handleReject = useCallback(() => {
    handleNext();
  }, [handleNext]);

  const handleViewDetails = useCallback((candidate) => {
    setSelectedCandidate(candidate);
    setShowDetailsModal(true);
  }, []);

  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setLocalSearchQuery(value);
    dispatch(setSearchQuery(value));
  }, [dispatch]);

  const handleFiltersToggle = useCallback(() => {
    setShowFilters(prev => !prev);
  }, []);

  const handleModalClose = useCallback(() => {
    setShowDetailsModal(false);
    setSelectedCandidate(null);
  }, []);

  // Reset current index when search results change
  useEffect(() => {
    setCurrentIndex(0);
  }, [searchFilteredCandidates.length]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.div 
        variants={ANIMATION_VARIANTS.item}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Candidate Discovery</h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          Review and shortlist the best candidates for your team
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div 
        variants={ANIMATION_VARIANTS.item}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row gap-4 mb-8"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search candidates by name, role, or skills..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 border border-secondary-200 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleFiltersToggle}
          className="px-6 py-3 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-lg hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors duration-200 flex items-center space-x-2"
        >
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </motion.button>
      </motion.div>

      {/* Stats */}
      <DiscoveryStats 
        candidates={candidates} 
        shortlistedCandidates={shortlistedCandidates} 
      />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Candidate Cards */}
        <div className="flex-1">
          {searchFilteredCandidates.length === 0 ? (
            <motion.div 
              variants={ANIMATION_VARIANTS.item}
              initial="hidden"
              animate="visible"
              className="text-center py-16"
            >
              <Users className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No candidates found</h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Try adjusting your search or filters to find more candidates.
              </p>
            </motion.div>
          ) : (
            <CandidateCardContainer
              currentCandidate={currentCandidate}
              currentIndex={currentIndex}
              totalCandidates={navigationState.totalCandidates}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onShortlist={handleShortlist}
              onReject={handleReject}
              onViewDetails={handleViewDetails}
            />
          )}
        </div>

        {/* Shortlist Panel */}
        <ShortlistPanel shortlistedCandidates={shortlistedCandidates} />
      </div>

      {/* Filter Modal */}
      <FilterModal
        isOpen={showFilters}
        onClose={handleFiltersToggle}
      />

      {/* Candidate Details Modal */}
      <CandidateDetailsModal
        isOpen={showDetailsModal}
        onClose={handleModalClose}
        candidate={selectedCandidate}
      />
    </div>
  );
};

export default DiscoveryPage;

