import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { quizActions } from "../../store/index";
import shuffleArray from "../../helpers/shuffle";
import convertUTFtoLatin from "../../helpers/convertUTFtoLatin";
import data from "../../data";
import classes from "./Quiz.module.scss";
import Result from "./Result";
import Question from "./Question";
import Answer from "./Answer";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [birds, setBirds] = useState([]);
  const [correct, setCorrect] = useState(null);
  const [guess, setGuess] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let birdsList = [];
    data.forEach((bird, index) => {
      birdsList.push({ id: index, imgSrc: bird.src, name: bird.name });
    });
    dispatch(quizActions.setQuizLength(birdsList.length));
    shuffleArray(birdsList);
    setBirds(birdsList);
  }, [dispatch]);

  const tryAgain = () => {
    setShowResult(false);
    setCurrentIndex(0);
    dispatch(quizActions.resetQuiz());
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
    setShowAnswer(false);
    getNextQuestion();
  };

  const evaluateAnswer = (userGuess) => {
    const transformedShortAnswer = convertUTFtoLatin(
      birds[currentIndex].name.toLowerCase().split(" ")[1].replace()
    );
    const transformedLongAnswer = convertUTFtoLatin(
      birds[currentIndex].name.toLowerCase().replace()
    );
    const transformedGuess = convertUTFtoLatin(userGuess.toLowerCase());
    const isCorrectAnswer = [
      transformedShortAnswer,
      transformedLongAnswer,
    ].includes(transformedGuess);

    setGuess(userGuess);
    setShowAnswer(true);
    setCorrect(isCorrectAnswer);

    if (isCorrectAnswer) {
      dispatch(quizActions.incrementCorrectAnswers());
    }
  };

  return (
    <main className={classes.quiz}>
      {showResult && <Result tryAgainHandler={tryAgain} />}
      {!showResult && showAnswer && (
        <Answer
          answer={birds[currentIndex].name}
          guess={guess}
          onClose={hideAnswer}
          correct={correct}
        />
      )}
      {!showResult && !showAnswer && (
        <Question
          bird={{ ...birds[currentIndex] }}
          evaluateAnswer={evaluateAnswer}
        />
      )}
    </main>
  );
};

export default Quiz;
