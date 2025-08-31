import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter, MapPin, DollarSign, Calendar, Users, GraduationCap } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters as setReduxFilters, clearFilters } from '../../store/slices/candidatesSlice';
import { 
  FILTER_OPTIONS, 
  DEFAULT_FILTERS, 
  FILTER_LABELS, 
  FILTER_PLACEHOLDERS 
} from '../../constants';
import { MODAL_ANIMATIONS, MODAL_SIZES, MODAL_Z_INDEX } from '../../constants';

const FilterModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const currentFilters = useSelector((state) => state.candidates.filters);
  
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  // Sync local state with Redux store
  useEffect(() => {
    setFilters(currentFilters);
  }, [currentFilters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSkillToggle = (skill) => {
    setFilters(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleApplyFilters = () => {
    dispatch(setReduxFilters(filters));
    onClose();
  };

  const handleClearFilters = () => {
    setFilters(DEFAULT_FILTERS);
    dispatch(clearFilters());
    onClose();
  };

  const renderSkillsFilter = () => (
    <div>
      <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-3">
        {FILTER_LABELS.skills}
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {FILTER_OPTIONS.skills.map((skill) => (
          <button
            key={skill}
            onClick={() => handleSkillToggle(skill)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filters.skills.includes(skill)
                ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 border border-primary-300 dark:border-primary-700'
                : 'bg-secondary-100 text-secondary-700 dark:bg-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-600'
            }`}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );

  const renderSelectFilter = (key, icon, options) => (
    <div>
      <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
        {icon}
        {FILTER_LABELS[key]}
      </label>
      <select
        value={filters[key]}
        onChange={(e) => handleFilterChange(key, e.target.value)}
        className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      >
        <option value="">{FILTER_PLACEHOLDERS[key]}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );

  const renderLocationFilter = () => (
    <div>
      <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
        <MapPin className="w-4 h-4 inline mr-2" />
        {FILTER_LABELS.location}
      </label>
      <input
        type="text"
        placeholder={FILTER_PLACEHOLDERS.location}
        value={filters.location}
        onChange={(e) => handleFilterChange('location', e.target.value)}
        className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
    </div>
  );

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
                className={`inline-block w-full ${MODAL_SIZES.medium} p-6 my-8 text-left align-middle bg-white dark:bg-secondary-800 rounded-2xl shadow-xl transform transition-all relative z-50`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Filter className="w-6 h-6 text-primary-600" />
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                      Filter Candidates
                    </h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200"
                    aria-label="Close filter modal"
                  >
                    <X className="w-5 h-5 text-secondary-500" />
                  </button>
                </div>

                {/* Filters Content */}
                <div className="space-y-6">
                  {/* Skills */}
                  {renderSkillsFilter()}

                  {/* Location */}
                  {renderLocationFilter()}

                  {/* Experience Level */}
                  {renderSelectFilter('experience', <Calendar className="w-4 h-4 inline mr-2" />, FILTER_OPTIONS.experience)}

                  {/* Education */}
                  {renderSelectFilter('education', <GraduationCap className="w-4 h-4 inline mr-2" />, FILTER_OPTIONS.education)}

                  {/* Salary Range */}
                  {renderSelectFilter('salaryRange', <DollarSign className="w-4 h-4 inline mr-2" />, FILTER_OPTIONS.salaryRanges)}

                  {/* Company Size */}
                  {renderSelectFilter('companySize', <Users className="w-4 h-4 inline mr-2" />, FILTER_OPTIONS.companySizes)}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <button
                    onClick={handleClearFilters}
                    className="flex-1 px-6 py-3 border border-secondary-300 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors duration-200"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={handleApplyFilters}
                    className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
                  >
                    Apply Filters
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

export default FilterModal;

