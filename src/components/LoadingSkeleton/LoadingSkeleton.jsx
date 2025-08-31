import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-8">
        <div className="h-8 bg-secondary-200 dark:bg-secondary-700 rounded w-64 mb-2"></div>
        <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-96"></div>
      </div>

      {/* Search and Filters Skeleton */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="h-12 bg-secondary-200 dark:bg-secondary-700 rounded-lg"></div>
        </div>
        <div className="w-32 h-12 bg-secondary-200 dark:bg-secondary-700 rounded-lg"></div>
      </div>

      {/* Stats Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-white dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-24 mb-2"></div>
                <div className="h-8 bg-secondary-200 dark:bg-secondary-700 rounded w-16"></div>
              </div>
              <div className="w-12 h-12 bg-secondary-200 dark:bg-secondary-700 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Skeleton */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Candidate Card Skeleton */}
        <div className="flex-1">
          <div className="mx-auto max-w-md">
            <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl border border-secondary-200 dark:border-secondary-700 overflow-hidden">
              {/* Header Skeleton */}
              <div className="p-6 border-b border-secondary-200 dark:border-secondary-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-secondary-200 dark:bg-secondary-700 rounded-full"></div>
                    <div>
                      <div className="h-6 bg-secondary-200 dark:bg-secondary-700 rounded w-32 mb-2"></div>
                      <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="w-16 h-8 bg-secondary-200 dark:bg-secondary-700 rounded-full"></div>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-4 h-4 bg-secondary-200 dark:bg-secondary-700 rounded"></div>
                  <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-32"></div>
                </div>
                
                <div className="w-20 h-6 bg-secondary-200 dark:bg-secondary-700 rounded-full"></div>
              </div>

              {/* Content Skeleton */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-secondary-200 dark:bg-secondary-700 rounded"></div>
                    <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-20"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-secondary-200 dark:bg-secondary-700 rounded"></div>
                    <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-24"></div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-full"></div>
                  <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-3/4"></div>
                  <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-1/2"></div>
                </div>

                <div className="mb-4">
                  <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-24 mb-2"></div>
                  <div className="flex flex-wrap gap-2">
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="w-20 h-6 bg-secondary-200 dark:bg-secondary-700 rounded-full"></div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-secondary-200 dark:bg-secondary-700 rounded"></div>
                    <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-24"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-secondary-200 dark:bg-secondary-700 rounded"></div>
                    <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-20"></div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <div className="flex-1 h-10 bg-secondary-200 dark:bg-secondary-700 rounded-lg"></div>
                  <div className="flex-1 h-10 bg-secondary-200 dark:bg-secondary-700 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex justify-center space-x-4 mt-8">
            <div className="w-16 h-16 bg-secondary-200 dark:bg-secondary-700 rounded-full"></div>
            <div className="w-16 h-16 bg-secondary-200 dark:bg-secondary-700 rounded-full"></div>
          </div>

          {/* Pagination Skeleton */}
          <div className="text-center mt-6">
            <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-32 mx-auto"></div>
          </div>
        </div>

        {/* Shortlist Panel Skeleton */}
        <div className="lg:w-80">
          <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700">
            <div className="h-6 bg-secondary-200 dark:bg-secondary-700 rounded w-24 mb-4"></div>
            <div className="space-y-3">
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-secondary-200 dark:bg-secondary-700 rounded-full mx-auto mb-3"></div>
                <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded w-32 mx-auto mb-2"></div>
                <div className="h-3 bg-secondary-200 dark:bg-secondary-700 rounded w-40 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;

