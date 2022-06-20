import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const answerSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    createNewAttempt: (state, questions) => {
      let newAnswers = [];
      questions.payload && questions.payload.length> 0 && questions.payload.forEach((m, i) => {
          newAnswers.push({
            questionId: m.questionId,
            userAnswer: '',
            isCorrect: null
          })
        }
      )
      state[(state && state.length) || 0] = newAnswers;
    },
    editAnswer: (state) => {
      state.value -= 1;
    },
  },
});

export const { createNewAttempt, editAnswer } = answerSlice.actions;

export const selectAnswers = (index, state) => (state && state.length > 0) || [];

export default answerSlice.reducer;
