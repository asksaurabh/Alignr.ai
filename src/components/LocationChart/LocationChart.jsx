import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { LOCATION_DATA, ANIMATION_VARIANTS } from '../../constants/insights';

const LocationChart = () => {
  return (
    <motion.div
      variants={ANIMATION_VARIANTS.item}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.5 }}
      className="bg-white dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700"
    >
      <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <MapPin className="w-5 h-5 text-red-600" />
        <span>Geographic Distribution</span>
      </h3>
      <div className="space-y-3">
        {LOCATION_DATA.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-secondary-600 dark:text-secondary-400">
              {item.location}
            </span>
            <div className="flex items-center space-x-2">
              <div className="w-20 bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.count / 100) * 100}%` }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                  className="h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
              <span className="text-sm font-medium text-secondary-900 dark:text-white w-8">
                {item.count}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default LocationChart;
