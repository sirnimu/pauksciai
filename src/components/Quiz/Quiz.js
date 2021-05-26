import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import data from "../../data";
import classes from "./Quiz.module.scss";
import Result from "./Result";
import Question from "./Question";
import Answer from "./Answer";
import shuffleArray from "../../helpers/shuffle";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [birds, setBirds] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let birdsList = [];
    data.forEach((bird, index) => {
      birdsList.push({ id: index, imgSrc: bird.src, name: bird.name });
    });
    dispatch({ type: "set_quiz_length", length: birdsList.length });
    shuffleArray(birdsList);
    setBirds(birdsList);
  }, [dispatch]);

  const tryAgain = () => {
    setShowResult(false);
    setCurrentIndex(0);
    dispatch({ type: "reset" });
    dispatch({ type: "set_quiz_length", length: birds.length });
  };

  const getNextQuestion = () => {
    const isLastQuestion = currentIndex === birds.length - 1;
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentIndex((index) => index + 1);
    }
  };

  const hideAnswer = () => {
    getNextQuestion();
    setShowAnswer(false);
  };

  const showNextQuestion = (answerWasCorrect) => {
    if (answerWasCorrect) {
      dispatch({ type: "answer_correctly" });
      getNextQuestion();
    } else {
      setShowAnswer(true);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.quiz}>
        {showResult && <Result tryAgainHandler={tryAgain} />}
        {!showResult && showAnswer && (
          <Answer name={birds[currentIndex].name} onClose={hideAnswer} />
        )}
        {!showResult && !showAnswer && (
          <Question
            bird={{ ...birds[currentIndex] }}
            showNextQuestion={showNextQuestion}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
