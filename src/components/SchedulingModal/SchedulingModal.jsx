import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Video, Phone, MapPin } from 'lucide-react';
import { INTERVIEW_TYPES, ANIMATION_VARIANTS } from '../../constants/scheduling';

const SchedulingModal = ({ 
  isOpen, 
  onClose, 
  candidate, 
  scheduleData, 
  onScheduleDataChange, 
  onSubmit 
}) => {
  if (!isOpen || !candidate) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              {/* Modal */}
              <motion.div
                variants={ANIMATION_VARIANTS.modal}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: "spring", duration: 0.3 }}
                className="inline-block w-full max-w-md p-6 my-8 text-left align-middle bg-white dark:bg-secondary-800 rounded-2xl shadow-xl transform transition-all relative z-50"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                    Schedule Interview
                  </h3>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-secondary-500" />
                  </button>
                </div>

                {/* Candidate Info */}
                <div className="mb-6 p-4 bg-secondary-50 dark:bg-secondary-700 rounded-lg">
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                    {candidate.name}
                  </h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    {candidate.role} at {candidate.company}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Interview Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                      <input
                        type="date"
                        value={scheduleData.date}
                        onChange={(e) => onScheduleDataChange('date', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Interview Time
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                      <input
                        type="time"
                        value={scheduleData.time}
                        onChange={(e) => onScheduleDataChange('time', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Interview Type
                    </label>
                    <div className="relative">
                      <select
                        value={scheduleData.type}
                        onChange={(e) => onScheduleDataChange('type', e.target.value)}
                        className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        {INTERVIEW_TYPES.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Notes (Optional)
                    </label>
                    <textarea
                      value={scheduleData.notes}
                      onChange={(e) => onScheduleDataChange('notes', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Add any additional notes for the interview..."
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-6 border-t border-secondary-200 dark:border-secondary-700">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-4 py-2 border border-secondary-300 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
                    >
                      Schedule Interview
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SchedulingModal;
