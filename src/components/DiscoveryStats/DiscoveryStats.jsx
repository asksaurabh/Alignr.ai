import React from 'react';
import { motion } from 'framer-motion';
import { DISCOVERY_STATS, ANIMATION_VARIANTS } from '../../constants/discovery';

const DiscoveryStats = ({ candidates, shortlistedCandidates }) => {
  const getStatValue = (statType) => {
    switch (statType) {
      case 'total':
        return candidates.length;
      case 'shortlisted':
        return shortlistedCandidates.length;
      case 'inProgress':
        return shortlistedCandidates.length; // This could be enhanced with actual status tracking
      case 'hired':
        return 0; // This could be enhanced with actual hiring data
      default:
        return 0;
    }
  };

  return (
    <motion.div 
      variants={ANIMATION_VARIANTS.container}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
    >
      {DISCOVERY_STATS.map((stat, index) => (
        <motion.div
          key={stat.value}
          variants={ANIMATION_VARIANTS.item}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-secondary-600 dark:text-secondary-400">{stat.label}</p>
              <p className="text-2xl font-bold text-secondary-900 dark:text-white">
                {getStatValue(stat.value)}
              </p>
            </div>
            <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
              <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DiscoveryStats;
