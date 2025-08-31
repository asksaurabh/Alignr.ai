import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Mail, 
  Phone, 
  Calendar, 
  Clock as ClockIcon,
  Star,
  Send,
  CheckCircle
} from 'lucide-react';
import { getStatusColor, getStatusText } from '../../utils/statusUtils';

const SchedulingCandidateCard = ({ 
  candidate, 
  index, 
  onScheduleInterview, 
  onSendOutreach 
}) => {
  const renderActionButtons = () => {
    if (candidate.status === 'shortlisted' || candidate.status === 'new') {
      return (
        <>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onScheduleInterview(candidate)}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSendOutreach(candidate)}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors duration-200"
          >
            <Send className="w-4 h-4" />
            <span>Outreach</span>
          </motion.button>
        </>
      );
    }
    
    if (candidate.status === 'outreach_sent') {
      return (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onScheduleInterview(candidate)}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
        >
          <Calendar className="w-4 h-4" />
          <span>Schedule Interview</span>
        </motion.button>
      );
    }
    
    if (candidate.status === 'interview_scheduled') {
      return (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-green-300 dark:border-green-600 text-green-700 dark:text-green-300 rounded-lg bg-green-50 dark:bg-green-900/20"
        >
          <CheckCircle className="w-4 h-4" />
          <span>Interview Scheduled</span>
        </motion.button>
      );
    }
    
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
            <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
              {candidate.name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
              {candidate.name}
            </h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              {candidate.company}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 bg-accent-100 dark:bg-accent-900 px-2 py-1 rounded-full">
          <Star className="w-4 h-4 text-accent-600 dark:text-accent-400" />
          <span className="text-sm font-semibold text-accent-700 dark:text-accent-300">
            {candidate.rating}%
          </span>
        </div>
      </div>

      {/* Role */}
      <div className="flex items-center space-x-2 mb-4">
        <Building className="w-4 h-4 text-secondary-400" />
        <span className="text-secondary-600 dark:text-secondary-400">{candidate.role}</span>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-400">
          <Mail className="w-4 h-4" />
          <span>{candidate.email}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-400">
          <Phone className="w-4 h-4" />
          <span>{candidate.phone}</span>
        </div>
      </div>

      {/* Status and Interview Info */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(candidate.status)}`}>
          {getStatusText(candidate.status)}
        </span>
        
        {candidate.status === 'interview_scheduled' && (
          <div className="text-right">
            <div className="flex items-center space-x-1 text-sm text-secondary-600 dark:text-secondary-400">
              <Calendar className="w-4 h-4" />
              <span>{candidate.interviewDate}</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-secondary-600 dark:text-secondary-400">
              <ClockIcon className="w-4 h-4" />
              <span>at {candidate.interviewTime}</span>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        {renderActionButtons()}
      </div>
    </motion.div>
  );
};

export default SchedulingCandidateCard;
