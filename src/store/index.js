import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { correctAnswersCount: 0, quizLength: 5 };

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizLength(state, action) {
      state.quizLength = action.payload;
    },
    incrementCorrectAnswers(state) {
      state.correctAnswersCount++;
    },
    resetQuiz(state) {
      state.correctAnswersCount = 0;
    },
  },
});

const store = configureStore({
  reducer: quizSlice.reducer,
});

export const quizActions = quizSlice.actions;
export default store;
