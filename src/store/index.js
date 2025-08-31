import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import candidatesReducer from './slices/candidatesSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    candidates: candidatesReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export default store;
