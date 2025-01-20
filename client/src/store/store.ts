
import { configureStore } from '@reduxjs/toolkit';
import { emailApi } from './api/emailApi';

export const store = configureStore({
  reducer: {
    [emailApi.reducerPath]: emailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emailApi.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
