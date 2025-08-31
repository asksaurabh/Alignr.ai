import React from 'react';
import { motion } from 'framer-motion';
import InsightsStats from '../components/InsightsStats/InsightsStats';
import SkillsChart from '../components/SkillsChart/SkillsChart';
import ExperienceChart from '../components/ExperienceChart/ExperienceChart';
import SalaryChart from '../components/SalaryChart/SalaryChart';
import LocationChart from '../components/LocationChart/LocationChart';
import TimeSeriesChart from '../components/TimeSeriesChart/TimeSeriesChart';
import InsightsSummary from '../components/InsightsSummary/InsightsSummary';
import { ANIMATION_VARIANTS } from '../constants';

const InsightsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.div 
        variants={ANIMATION_VARIANTS.item}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Insights & Analytics</h1>
        <p className="text-secondary-600 dark:text-secondary-400">
          Data-driven insights to optimize your hiring process
        </p>
      </motion.div>

      {/* Key Metrics */}
      <InsightsStats />

      {/* Charts Grid */}
      <motion.div 
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
      >
        {/* Top Skills Chart */}
        <SkillsChart />

        {/* Experience Distribution */}
        <ExperienceChart />

        {/* Salary Distribution */}
        <SalaryChart />

        {/* Geographic Distribution */}
        <LocationChart />
      </motion.div>

      {/* Time Series Chart */}
      <TimeSeriesChart />

      {/* Insights Summary */}
      <InsightsSummary />
    </div>
  );
};

export default InsightsPage;

