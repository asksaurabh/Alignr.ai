import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { JOB_PLACEHOLDERS, HOME_FEATURES } from '../constants';


const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [isTyping] = useState(true);

  const navigate = useNavigate();

  // Using imported constant instead of local array

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        setCurrentPlaceholder((prev) => (prev + 1) % JOB_PLACEHOLDERS.length);
      }
    }, 3000);

    return () => clearInterval(typingInterval);
  }, [isTyping]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/discovery', { state: { searchQuery: searchQuery.trim() } });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto px-4 py-6 md:py-8"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/30 rounded-full shadow-sm dark:shadow-blue-900/10 mb-8"
          >
            <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Designed for people, not pipelines</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Find Your Dream Team
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto leading-relaxed">
            Discover and hire the best talent from hundreds of applications with our intelligent hiring platform
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4">
              I'm looking for a
            </h2>
            
            <div className="h-8 mb-6 flex items-center justify-center">
              <span className="text-lg text-secondary-500 dark:text-secondary-400">
                {JOB_PLACEHOLDERS[currentPlaceholder]}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1 text-primary-600 dark:text-primary-400"
              >
                |
              </motion.span>
            </div>
          </div>

          <motion.form
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-secondary-400" />
              </div>
              
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter job title, skills, or keywords..."
                className="w-full pl-12 pr-20 py-4 text-lg border-2 border-secondary-200 dark:border-secondary-700 rounded-2xl focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800 focus:border-primary-500 dark:focus:border-primary-400 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-400 dark:placeholder-secondary-500 transition-all duration-300"
              />
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-y-0 right-0 px-6 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-r-2xl transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Search</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.form>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {HOME_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-2xl bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary-600 dark:text-secondary-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center space-y-4">
          <motion.button
            onClick={() => navigate('/discovery')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-2xl text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            
            {/* Button content */}
            <div className="relative flex items-center justify-center space-x-3">
              <span>Start Discovering Candidates</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.button>
          
          <motion.p 
            variants={itemVariants}
            className="text-secondary-600 dark:text-secondary-400 text-sm max-w-md mx-auto"
          >
            Join thousands of companies finding their perfect hires
          </motion.p>
        </motion.div>
      </motion.div>


    </div>
  );
};

export default HomePage;

