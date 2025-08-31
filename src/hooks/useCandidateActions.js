import { useDispatch } from 'react-redux';
import { shortlistCandidate, selectCandidate } from '../store/slices/candidatesSlice';
import { addNotification } from '../store/slices/uiSlice';

/**
 * Custom hook for handling candidate actions
 * @returns {Object} Object containing action handlers
 */
export const useCandidateActions = () => {
  const dispatch = useDispatch();

  /**
   * Handle shortlisting a candidate
   * @param {Object} candidate - Candidate object
   * @param {Function} onSuccess - Callback function to execute on success
   */
  const handleShortlist = (candidate, onSuccess) => {
    if (!candidate?.email) {
      dispatch(addNotification({
        type: 'error',
        message: 'Cannot shortlist candidate: missing email',
        duration: 3000
      }));
      return;
    }

    dispatch(shortlistCandidate(candidate.email));
    dispatch(addNotification({
      type: 'success',
      message: `${candidate.name} added to shortlist!`,
      duration: 3000
    }));

    if (onSuccess && typeof onSuccess === 'function') {
      onSuccess();
    }
  };

  /**
   * Handle selecting a candidate for review
   * @param {Object} candidate - Candidate object
   * @param {Function} onSuccess - Callback function to execute on success
   */
  const handleSelect = (candidate, onSuccess) => {
    if (!candidate?.email) {
      dispatch(addNotification({
        type: 'error',
        message: 'Cannot select candidate: missing email',
        duration: 3000
      }));
      return;
    }

    dispatch(selectCandidate(candidate.email));
    dispatch(addNotification({
      type: 'info',
      message: `${candidate.name} selected for further review`,
      duration: 3000
    }));

    if (onSuccess && typeof onSuccess === 'function') {
      onSuccess();
    }
  };

  return {
    handleShortlist,
    handleSelect
  };
};
