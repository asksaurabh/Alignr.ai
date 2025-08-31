import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { addNotification } from '../store/slices/uiSlice';
import SchedulingStats from '../components/SchedulingStats/SchedulingStats';
import SchedulingCandidateCard from '../components/SchedulingCandidateCard/SchedulingCandidateCard';
import SchedulingModal from '../components/SchedulingModal/SchedulingModal';
import { ANIMATION_VARIANTS } from '../constants';

const SchedulingHubPage = () => {
  const dispatch = useDispatch();
  const shortlistedCandidatesData = useSelector((state) => state.candidates.shortlistedCandidates);
  
  const [candidates, setCandidates] = useState([]);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [scheduleData, setScheduleData] = useState({
    date: '',
    time: '',
    type: 'video',
    notes: ''
  });

  // Memoized transformed candidates to prevent unnecessary recalculations
  const transformedCandidates = useMemo(() => {
    return shortlistedCandidatesData.map((candidate, index) => ({
      id: index + 1,
      name: candidate.name,
      company: candidate.company,
      role: candidate.role,
      email: candidate.email,
      phone: candidate.phone,
      rating: candidate.matchScore,
      status: candidate.status || "shortlisted",
      interviewDate: candidate.interviewDate || null,
      interviewTime: candidate.interviewTime || null
    }));
  }, [shortlistedCandidatesData]);

  useEffect(() => {
    setCandidates(transformedCandidates);
  }, [transformedCandidates]);

  // Memoized handlers to prevent unnecessary re-renders
  const handleScheduleInterview = useCallback((candidate) => {
    setSelectedCandidate(candidate);
    setShowScheduleModal(true);
  }, []);

  const handleSendOutreach = useCallback((candidate) => {
    setCandidates(prev => prev.map(c => 
      c.id === candidate.id 
        ? { ...c, status: 'outreach_sent' }
        : c
    ));
    
    dispatch(addNotification({
      type: 'success',
      message: `Outreach sent to ${candidate.name}`,
      duration: 3000
    }));
  }, [dispatch]);

  const handleScheduleDataChange = useCallback((field, value) => {
    setScheduleData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleScheduleSubmit = useCallback(() => {
    if (!scheduleData.date || !scheduleData.time) {
      dispatch(addNotification({
        type: 'error',
        message: 'Please fill in all required fields',
        duration: 3000
      }));
      return;
    }

    setCandidates(prev => prev.map(c => 
      c.id === selectedCandidate.id 
        ? { 
            ...c, 
            status: 'interview_scheduled',
            interviewDate: scheduleData.date,
            interviewTime: scheduleData.time
          }
        : c
    ));

    dispatch(addNotification({
      type: 'success',
      message: `Interview scheduled with ${selectedCandidate.name}`,
      duration: 3000
    }));

    setShowScheduleModal(false);
    setSelectedCandidate(null);
    setScheduleData({ date: '', time: '', type: 'video', notes: '' });
  }, [scheduleData, selectedCandidate, dispatch]);

  const handleModalClose = useCallback(() => {
    setShowScheduleModal(false);
    setSelectedCandidate(null);
    setScheduleData({ date: '', time: '', type: 'video', notes: '' });
  }, []);

  const handleGoToDiscovery = useCallback(() => {
    // This could navigate to discovery page
    dispatch(addNotification({
      type: 'info',
      message: 'Navigate to Discovery page to add more candidates',
      duration: 3000
    }));
  }, [dispatch]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.div 
        variants={ANIMATION_VARIANTS.item}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Scheduling Hub</h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          Manage outreach and schedule interviews with candidates
        </p>
      </motion.div>

      {/* Summary Cards */}
      <SchedulingStats candidates={candidates} />

      {/* Candidate Cards */}
      <motion.div 
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {candidates.map((candidate, index) => (
          <SchedulingCandidateCard
            key={candidate.id}
            candidate={candidate}
            index={index}
            onScheduleInterview={handleScheduleInterview}
            onSendOutreach={handleSendOutreach}
          />
        ))}
      </motion.div>

      {/* Empty State */}
      {candidates.length === 0 && (
        <motion.div 
          variants={ANIMATION_VARIANTS.item}
          initial="hidden"
          animate="visible"
          className="text-center py-16"
        >
          <Calendar className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No candidates in pipeline</h3>
          <p className="text-secondary-600 dark:text-secondary-400 mb-6">
            Start by adding candidates from the discovery page to begin scheduling interviews.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoToDiscovery}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
          >
            Go to Discovery
          </motion.button>
        </motion.div>
      )}

      {/* Scheduling Modal */}
      <SchedulingModal
        isOpen={showScheduleModal}
        onClose={handleModalClose}
        candidate={selectedCandidate}
        scheduleData={scheduleData}
        onScheduleDataChange={handleScheduleDataChange}
        onSubmit={handleScheduleSubmit}
      />
    </div>
  );
};

export default SchedulingHubPage;

