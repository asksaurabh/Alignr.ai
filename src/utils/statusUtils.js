import { CANDIDATE_STATUSES } from '../constants/scheduling';

export const getStatusColor = (status) => {
  return CANDIDATE_STATUSES[status]?.color || CANDIDATE_STATUSES.shortlisted.color;
};

export const getStatusText = (status) => {
  return CANDIDATE_STATUSES[status]?.label || 'Unknown';
};

export const calculateResponseRate = (candidates) => {
  if (candidates.length === 0) return "0%";
  const respondedCount = candidates.filter(c => c.status !== 'shortlisted').length;
  return `${Math.round((respondedCount / candidates.length) * 100)}%`;
};

export const getStatsValue = (statType, candidates) => {
  switch (statType) {
    case 'shortlisted':
      return candidates.filter(c => c.status === 'shortlisted').length;
    case 'outreach_sent':
      return candidates.filter(c => c.status === 'outreach_sent').length;
    case 'interview_scheduled':
      return candidates.filter(c => c.status === 'interview_scheduled').length;
    case 'response_rate':
      return calculateResponseRate(candidates);
    default:
      return 0;
  }
};
