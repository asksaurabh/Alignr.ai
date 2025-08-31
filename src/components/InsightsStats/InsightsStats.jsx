import React from 'react';
import { motion } from 'framer-motion';
import { INSIGHTS_STATS, ANIMATION_VARIANTS } from '../../constants/insights';

const InsightsStats = () => {
  return (
    <motion.div 
      variants={ANIMATION_VARIANTS.container}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
    >
      {INSIGHTS_STATS.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={ANIMATION_VARIANTS.item}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
              <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
            </div>
            <span className={`text-sm font-medium ${stat.changeColor}`}>
              {stat.change}
            </span>
          </div>
          <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-1">{stat.label}</p>
          <p className="text-2xl font-bold text-secondary-900 dark:text-white">{stat.value}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default InsightsStats;
