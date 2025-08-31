import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';
import { SALARY_DATA, ANIMATION_VARIANTS } from '../../constants/insights';

const SalaryChart = () => {
  return (
    <motion.div
      variants={ANIMATION_VARIANTS.item}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.4 }}
      className="bg-white dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700"
    >
      <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <DollarSign className="w-5 h-5 text-green-600" />
        <span>Salary Expectations</span>
      </h3>
      <div className="space-y-4">
        {SALARY_DATA.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-secondary-600 dark:text-secondary-400">
              {item.range}
            </span>
            <div className="flex items-center space-x-3">
              <div className="w-32 bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  className="bg-primary-600 h-2 rounded-full"
                />
              </div>
              <span className="text-sm font-medium text-secondary-900 dark:text-white w-8">
                {item.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SalaryChart;
