import { createStore } from "redux";

const initialState = { correctAnswersCount: 0, quizLength: 5 };

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_quiz_length":
      return {
        ...state,
        quizLength: action.length,
      };
    case "answer_correctly":
      return {
        ...state,
        correctAnswersCount: state.correctAnswersCount + 1,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const store = createStore(quizReducer);

export default store;
