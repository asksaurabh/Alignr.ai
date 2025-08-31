import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarOpen: false,
  modalOpen: false,
  modalType: null,
  notifications: [],
  loadingStates: {
    global: false,
    candidates: false,
    scheduling: false,
    insights: false,
  },
  activeTab: 'discovery',
  showShortlist: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    openModal: (state, action) => {
      state.modalOpen = true;
      state.modalType = action.payload;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.modalType = null;
    },
    addNotification: (state, action) => {
      const notification = {
        id: Date.now(),
        type: 'info',
        message: '',
        duration: 5000,
        ...action.payload,
      };
      state.notifications.push(notification);
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        n => n.id !== action.payload
      );
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
    setLoadingState: (state, action) => {
      const { key, loading } = action.payload;
      if (Object.hasOwn(state.loadingStates, key)) {
        state.loadingStates[key] = loading;
      }
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    toggleShortlist: (state) => {
      state.showShortlist = !state.showShortlist;
    },
    setShowShortlist: (state, action) => {
      state.showShortlist = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  setSidebarOpen,
  openModal,
  closeModal,
  addNotification,
  removeNotification,
  clearNotifications,
  setLoadingState,
  setActiveTab,
  toggleShortlist,
  setShowShortlist,
} = uiSlice.actions;

export default uiSlice.reducer;

