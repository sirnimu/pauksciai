import { useSelector } from "react-redux";

import classes from "./Result.module.scss";
import Button from "../UI/Button";

const Result = (props) => {
  const correctAnswersCount = useSelector((state) => state.correctAnswersCount);
  const totalQuestions = useSelector((state) => state.quizLength);

  let resultClassName = "average";
  if (correctAnswersCount === totalQuestions) {
    resultClassName = "good";
  }

  if (correctAnswersCount === 0) {
    resultClassName = "bad";
  }

  return (
    <div className={classes.result}>
      <p>
        Atspėjai{" "}
        <span className={classes[resultClassName]}>{correctAnswersCount}</span>{" "}
        iš <span>{totalQuestions}</span> paukščių!
      </p>
      <Button onClick={props.tryAgainHandler} autoFocus>
        Bandyti dar kartą
      </Button>
    </div>
  );
};

export default Result;
