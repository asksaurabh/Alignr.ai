import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  DollarSign, 
  Calendar, 
  Building, 
  Users, 
  Star,
  Eye,
  Plus
} from 'lucide-react';

const CandidateCard = ({ candidate, onShortlist, onReject, onViewDetails }) => {
  const {
    name,
    role,
    company,
    location,
    annual_salary_expectation,
    skills,
    work_experiences,
    education,
    matchScore,
    avatar
  } = candidate;

  const salary = annual_salary_expectation?.['full-time'] || 'Not specified';
  const experience = work_experiences?.length || 0;
  const companySize = experience > 5 ? '50-200 employees' : '20-50 employees';
  const foundedYear = '2020'; // This would come from company data

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl border border-secondary-200 dark:border-secondary-700 overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 border-b border-secondary-200 dark:border-secondary-700">
        <div className="flex items-start justify-between mb-4">
          {/* Avatar and Basic Info */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
              <img 
                src={avatar} 
                alt={name}
                className="w-16 h-16 rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xl hidden">
                {name.charAt(0)}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">
                {name}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                {role}
              </p>
            </div>
          </div>

          {/* Match Score */}
          <div className="flex items-center space-x-2 bg-accent-100 dark:bg-accent-900 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-accent-600 dark:text-accent-400" />
            <span className="text-sm font-semibold text-accent-700 dark:text-accent-300">
              {matchScore}%
            </span>
          </div>
        </div>

        {/* Company */}
        <div className="flex items-center space-x-2 mb-4">
          <Building className="w-4 h-4 text-secondary-400" />
          <span className="text-secondary-600 dark:text-secondary-400">{company}</span>
        </div>

        {/* Employment Type */}
        <div className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
          Full-time
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location and Salary */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-2 text-accent-600 dark:text-accent-400 font-semibold">
            <DollarSign className="w-4 h-4" />
            <span>{salary}</span>
          </div>
        </div>

        {/* Job Description */}
        <p className="text-secondary-700 dark:text-secondary-300 mb-4 leading-relaxed">
          Experienced {role.toLowerCase()} with {experience} years of experience in building scalable applications. 
          Passionate about creating innovative solutions and driving technical excellence.
        </p>

        {/* Required Skills */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-2">
            Required Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
            {skills.length > 4 && (
              <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-full text-sm">
                +{skills.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Company Details */}
        <div className="flex items-center justify-between text-sm text-secondary-500 dark:text-secondary-400 mb-6">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>{companySize}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Founded {foundedYear}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onViewDetails}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-secondary-300 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors duration-200"
          >
            <Eye className="w-4 h-4" />
            <span>View Details</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onShortlist}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
          >
            <Plus className="w-4 h-4" />
            <span>Add to Funnel</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CandidateCard;

