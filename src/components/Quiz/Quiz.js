import { useState } from "react";
import data from "../../data";

import classes from "./Quiz.module.scss";

const Quiz = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setcorrectCount] = useState(0);
  const isLastQuestion = currentIndex === data.length;

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitAnswerHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (data[currentIndex].name.toLowerCase().includes(value.toLowerCase())) {
      setcorrectCount((count) => count + 1);
    }

    setCurrentIndex((count) => count + 1);
    setValue("");
  };

  return (
    <div className={classes.container}>
      <div className={classes.quiz}>
        {!isLastQuestion && (
          <>
            <header>Koks tai paukštis?</header>
            <img
              src={data[currentIndex].src}
              alt="bird"
              onLoad={(e) => {
                setIsLoading(false);
              }}
              style={{ display: isLoading ? "none" : "flex" }}
            />

            <form onSubmit={submitAnswerHandler}>
              <input
                value={value}
                onChange={changeHandler}
                type="text"
                placeholder="Paukštis"
                autoFocus
              />
              <button type="submit">Spėti</button>
            </form>
          </>
        )}
        {isLastQuestion && (
          <p>
            Atspėjai {correctCount}/{data.length} paukščius!
          </p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
