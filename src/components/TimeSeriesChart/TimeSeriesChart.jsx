import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { TIME_SERIES_DATA, ANIMATION_VARIANTS } from '../../constants/insights';

const TimeSeriesChart = () => {
  const tooltipStyle = {
    backgroundColor: '#1F2937',
    border: 'none',
    borderRadius: '8px',
    color: '#F9FAFB'
  };

  return (
    <motion.div
      variants={ANIMATION_VARIANTS.item}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
      className="bg-white dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700 mb-8"
    >
      <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
        <TrendingUp className="w-5 h-5 text-primary-600" />
        <span>Hiring Pipeline Trends</span>
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={TIME_SERIES_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="month" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip contentStyle={tooltipStyle} />
          <Line 
            type="monotone" 
            dataKey="applications" 
            stroke="#3B82F6" 
            strokeWidth={3}
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="interviews" 
            stroke="#10B981" 
            strokeWidth={3}
            dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="offers" 
            stroke="#F59E0B" 
            strokeWidth={3}
            dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
          <span className="text-sm text-secondary-600 dark:text-secondary-400">Applications</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-accent-600 rounded-full"></div>
          <span className="text-sm text-secondary-600 dark:text-secondary-400">Interviews</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
          <span className="text-sm text-secondary-600 dark:text-secondary-400">Offers</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TimeSeriesChart;
