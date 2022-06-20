import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import answerReducer from '../slices/answerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    answer: answerReducer,
  },
});
