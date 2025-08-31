import React from 'react';

/**
 * Reusable modal section component
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.className - Additional CSS classes
 */
const ModalSection = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-secondary-50 dark:bg-secondary-700 rounded-lg p-4 ${className}`}>
      <h4 className="font-semibold text-secondary-900 dark:text-white mb-3">
        {title}
      </h4>
      {children}
    </div>
  );
};

export default ModalSection;
