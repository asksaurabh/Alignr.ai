import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Star } from 'lucide-react';
import { SKILLS_DATA, ANIMATION_VARIANTS } from '../../constants/insights';

const SkillsChart = () => {
  const tooltipStyle = {
    backgroundColor: '#1F2937',
    border: 'none',
    borderRadius: '8px',
    color: '#F9FAFB'
  };

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.left}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
      className="bg-white dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700"
    >
      <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <Star className="w-5 h-5 text-primary-600" />
        <span>Top Skills Distribution</span>
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={SKILLS_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip contentStyle={tooltipStyle} />
          <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default SkillsChart;
