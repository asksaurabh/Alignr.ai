import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS } from '../../constants/insights';

const InsightsSummary = () => {
  return (
    <motion.div
      variants={ANIMATION_VARIANTS.item}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.7 }}
      className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-700"
    >
      <h3 className="text-lg font-semibold mb-4 text-primary-900 dark:text-primary-100">
        Key Insights & Recommendations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary-800 dark:text-primary-200">
        <div>
          <h4 className="font-medium mb-2">📈 Positive Trends</h4>
          <ul className="space-y-1">
            <li>• Application volume increased by 12% this quarter</li>
            <li>• Interview-to-offer conversion rate improved to 8.2%</li>
            <li>• Average time to hire reduced by 3 days</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">🎯 Areas for Improvement</h4>
          <ul className="space-y-1">
            <li>• Focus on React and Node.js developers (high demand)</li>
            <li>• Consider expanding geographic reach for diverse talent</li>
            <li>• Optimize interview process for better conversion rates</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightsSummary;
