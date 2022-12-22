import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import hurleyReducer from '../features/hurley/hurleySlice';

const persistedState: any = localStorage.getItem('hurleyState') 
                       ? JSON.parse(localStorage.getItem('hurleyState') || "")
                       : {}

export const store = configureStore({
  reducer: {
    hurley: hurleyReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(()=>{
  localStorage.setItem('hurleyState', JSON.stringify(store.getState()))
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
