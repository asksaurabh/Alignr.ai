import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock } from 'lucide-react';
import { EXPERIENCE_DATA, ANIMATION_VARIANTS } from '../../constants/insights';

const ExperienceChart = () => {
  const tooltipStyle = {
    backgroundColor: '#c8cacc',
    border: 'none',
    borderRadius: '8px',
    color: '#1b3e60'
  };

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.right}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3 }}
      className="bg-white dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700"
    >
      <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <Clock className="w-5 h-5 text-accent-600" />
        <span>Experience Distribution</span>
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={EXPERIENCE_DATA}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {EXPERIENCE_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ExperienceChart;
