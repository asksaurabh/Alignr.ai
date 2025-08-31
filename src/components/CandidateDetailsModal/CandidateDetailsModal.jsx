import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  DollarSign, 
  Building, 
  Mail, 
  Phone,
  ExternalLink,
  Star
} from 'lucide-react';
import { useCandidateActions } from '../../hooks/useCandidateActions';
import { 
  formatSalary, 
  getExperienceYears, 
  getEducationLevel, 
  formatWorkAvailability, 
  formatSubmissionDate,
  isValidCandidate 
} from '../../utils/candidateUtils';
import { MODAL_ANIMATIONS, MODAL_SIZES, MODAL_Z_INDEX } from '../../constants';
import ModalSection from '../ModalSection/ModalSection';
import CandidateHeader from '../CandidateHeader/CandidateHeader';

const CandidateDetailsModal = ({ isOpen, onClose, candidate }) => {
  const { handleShortlist, handleSelect } = useCandidateActions();

  // Early return if no candidate or invalid data
  if (!isOpen || !isValidCandidate(candidate)) {
    return null;
  }

  const handleShortlistSuccess = () => {
    onClose();
  };

  const handleSelectSuccess = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            {...MODAL_ANIMATIONS.backdrop}
            className={`fixed inset-0 ${MODAL_Z_INDEX.backdrop} bg-black bg-opacity-50 transition-opacity`}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className={`fixed inset-0 ${MODAL_Z_INDEX.modal} overflow-y-auto`}>
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              {/* Modal */}
              <motion.div
                {...MODAL_ANIMATIONS.modal}
                className={`inline-block w-full ${MODAL_SIZES.large} p-6 my-8 text-left align-middle bg-white dark:bg-secondary-800 rounded-2xl shadow-xl transform transition-all relative z-50`}
              >
                {/* Header */}
                <CandidateHeader candidate={candidate} onClose={onClose} />

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Basic Info */}
                  <div className="space-y-6">
                    {/* Company & Location */}
                    <ModalSection title="Company & Location">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400">
                          <Building className="w-4 h-4" />
                          <span>{candidate.company || 'Not specified'}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400">
                          <MapPin className="w-4 h-4" />
                          <span>{candidate.location || 'Not specified'}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400">
                          <DollarSign className="w-4 h-4" />
                          <span>
                            {formatSalary(candidate.annual_salary_expectation?.['full-time'])}/year
                          </span>
                        </div>
                      </div>
                    </ModalSection>

                    {/* Contact Information */}
                    <ModalSection title="Contact Information">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400">
                          <Mail className="w-4 h-4" />
                          <span>{candidate.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400">
                          <Phone className="w-4 h-4" />
                          <span>{candidate.phone || 'Not specified'}</span>
                        </div>
                      </div>
                    </ModalSection>

                    {/* Skills */}
                    <ModalSection title="Skills">
                      <div className="flex flex-wrap gap-2">
                        {candidate.skills?.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        )) || <span className="text-secondary-500">No skills specified</span>}
                      </div>
                    </ModalSection>
                  </div>

                  {/* Right Column - Experience & Education */}
                  <div className="space-y-6">
                    {/* Work Experience */}
                    <ModalSection title={`Work Experience (${getExperienceYears(candidate.work_experiences)} positions)`}>
                      <div className="space-y-3">
                        {candidate.work_experiences?.map((exp, index) => (
                          <div key={index} className="border-l-2 border-primary-300 pl-3">
                            <p className="font-medium text-secondary-900 dark:text-white">
                              {exp.roleName || 'Role not specified'}
                            </p>
                            <p className="text-sm text-secondary-600 dark:text-secondary-400">
                              {exp.company || 'Company not specified'}
                            </p>
                          </div>
                        )) || <span className="text-secondary-500">No work experience specified</span>}
                      </div>
                    </ModalSection>

                    {/* Education */}
                    <ModalSection title="Education">
                      <div className="space-y-3">
                        {candidate.education?.degrees?.map((degree, index) => (
                          <div key={index} className="border-l-2 border-accent-300 pl-3">
                            <p className="font-medium text-secondary-900 dark:text-white">
                              {degree.degree} {degree.subject && `- ${degree.subject}`}
                            </p>
                            <p className="text-sm text-secondary-600 dark:text-secondary-400">
                              {degree.originalSchool || 'School not specified'}
                            </p>
                            {degree.gpa && (
                              <p className="text-xs text-secondary-500 dark:text-secondary-500">
                                GPA: {degree.gpa}
                              </p>
                            )}
                          </div>
                        )) || <span className="text-secondary-500">No education specified</span>}
                      </div>
                    </ModalSection>

                    {/* Additional Info */}
                    <ModalSection title="Additional Information">
                      <div className="space-y-2 text-sm text-secondary-600 dark:text-secondary-400">
                        <p>• Highest Education: {getEducationLevel(candidate.education)}</p>
                        <p>• Work Availability: {formatWorkAvailability(candidate.work_availability)}</p>
                        <p>• Submitted: {formatSubmissionDate(candidate.submitted_at)}</p>
                      </div>
                    </ModalSection>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-secondary-200 dark:border-secondary-700">
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border border-secondary-300 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors duration-200"
                  >
                    Close
                  </button>
                  
                  <button
                    onClick={() => handleSelect(candidate, handleSelectSuccess)}
                    className="flex-1 px-6 py-3 border border-primary-300 dark:border-primary-600 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Select for Review</span>
                  </button>
                  
                  <button
                    onClick={() => handleShortlist(candidate, handleShortlistSuccess)}
                    className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Star className="w-4 h-4" />
                    <span>Add to Shortlist</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CandidateDetailsModal;
