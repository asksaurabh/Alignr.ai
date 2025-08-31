import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import candidatesData from '../../data/candidates.json';

// Async thunk to load candidates data
export const loadCandidates = createAsyncThunk(
  'candidates/loadCandidates',
  async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return candidatesData;
  }
);

const initialState = {
  candidates: [],
  filteredCandidates: [],
  selectedCandidates: [],
  shortlistedCandidates: [],
  loading: false,
  error: null,
  searchQuery: '',
  filters: {
    skills: [],
    location: '',
    experience: '',
    education: '',
    salaryRange: '',
  },
  currentPage: 1,
  candidatesPerPage: 5,
};

const candidatesSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
      
      // Apply search to filtered candidates
      if (action.payload.trim() === '') {
        state.filteredCandidates = state.candidates;
      } else {
        const query = action.payload.toLowerCase();
        state.filteredCandidates = state.candidates.filter(candidate =>
          candidate.name.toLowerCase().includes(query) ||
          candidate.role.toLowerCase().includes(query) ||
          candidate.skills.some(skill => skill.toLowerCase().includes(query))
        );
      }
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.currentPage = 1;
      
      // Apply filters to candidates
      let filtered = state.candidates;
      
      if (state.filters.skills.length > 0) {
        filtered = filtered.filter(candidate => 
          candidate.skills.some(skill => 
            state.filters.skills.includes(skill)
          )
        );
      }
      
      if (state.filters.location) {
        filtered = filtered.filter(candidate => 
          candidate.location.toLowerCase().includes(state.filters.location.toLowerCase())
        );
      }
      
      if (state.filters.experience) {
        const experienceMap = {
          '0-2 years': (candidate) => candidate.work_experiences.length <= 2,
          '2-5 years': (candidate) => candidate.work_experiences.length > 2 && candidate.work_experiences.length <= 5,
          '5-10 years': (candidate) => candidate.work_experiences.length > 5 && candidate.work_experiences.length <= 10,
          '10+ years': (candidate) => candidate.work_experiences.length > 10
        };
        
        if (experienceMap[state.filters.experience]) {
          filtered = filtered.filter(experienceMap[state.filters.experience]);
        }
      }
      
      if (state.filters.education) {
        filtered = filtered.filter(candidate => 
          candidate.education.highest_level === state.filters.education
        );
      }
      
      if (state.filters.salaryRange) {
        const salaryMap = {
          '$0-$50k': (candidate) => parseInt(candidate.annual_salary_expectation?.full_time?.replace(/[$,]/g, '')) <= 50000,
          '$50k-$100k': (candidate) => {
            const salary = parseInt(candidate.annual_salary_expectation?.full_time?.replace(/[$,]/g, ''));
            return salary > 50000 && salary <= 100000;
          },
          '$100k-$150k': (candidate) => {
            const salary = parseInt(candidate.annual_salary_expectation?.full_time?.replace(/[$,]/g, ''));
            return salary > 100000 && salary <= 150000;
          },
          '$150k-$200k': (candidate) => {
            const salary = parseInt(candidate.annual_salary_expectation?.full_time?.replace(/[$,]/g, ''));
            return salary > 150000 && salary <= 200000;
          },
          '$200k+': (candidate) => parseInt(candidate.annual_salary_expectation?.full_time?.replace(/[$,]/g, '')) > 200000
        };
        
        if (salaryMap[state.filters.salaryRange]) {
          filtered = filtered.filter(salaryMap[state.filters.salaryRange]);
        }
      }
      
      state.filteredCandidates = filtered;
    },
    clearFilters: (state) => {
      state.filters = {
        skills: [],
        location: '',
        experience: '',
        education: '',
        salaryRange: '',
      };
      state.currentPage = 1;
      state.filteredCandidates = state.candidates;
    },
    selectCandidate: (state, action) => {
      const candidateId = action.payload;
      const candidate = state.candidates.find(c => c.email === candidateId);
      if (candidate && !state.selectedCandidates.find(c => c.email === candidateId)) {
        state.selectedCandidates.push(candidate);
      }
    },
    removeSelectedCandidate: (state, action) => {
      state.selectedCandidates = state.selectedCandidates.filter(
        c => c.email !== action.payload
      );
    },
    shortlistCandidate: (state, action) => {
      const candidateId = action.payload;
      const candidate = state.candidates.find(c => c.email === candidateId);
      if (candidate && !state.shortlistedCandidates.find(c => c.email === candidateId)) {
        state.shortlistedCandidates.push(candidate);
      }
    },
    removeShortlistedCandidate: (state, action) => {
      state.shortlistedCandidates = state.shortlistedCandidates.filter(
        c => c.email !== action.payload
      );
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetCandidates: (state) => {
      state.selectedCandidates = [];
      state.shortlistedCandidates = [];
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCandidates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCandidates.fulfilled, (state, action) => {
        state.loading = false;
        state.candidates = action.payload;
        state.filteredCandidates = action.payload;
      })
      .addCase(loadCandidates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setSearchQuery,
  setFilters,
  clearFilters,
  selectCandidate,
  removeSelectedCandidate,
  shortlistCandidate,
  removeShortlistedCandidate,
  setCurrentPage,
  resetCandidates,
} = candidatesSlice.actions;

export default candidatesSlice.reducer;

