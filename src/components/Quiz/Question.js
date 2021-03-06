import { useState, useRef, useEffect } from "react";

import classes from "./Question.module.scss";
import Button from "../UI/Button";

const Question = (props) => {
  const imgRef = useRef();
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isTouchScreen = "ontouchstart" in document.documentElement;

    if (imgRef.current && isTouchScreen) {
      imgRef.current.focus();
    }
  }, []);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitAnswerHandler = (e) => {
    e.preventDefault();
    props.evaluateAnswer(value);
    setIsLoading(true);
    setValue("");
  };

  return (
    <section className={classes.question}>
      <header>Koks tai paukštis?</header>
      <img
        ref={imgRef}
        tabIndex="0"
        src={props.bird.imgSrc}
        alt="bird"
        onLoad={(e) => {
          setIsLoading(false);
        }}
        className={isLoading ? "loading" : null}
      />
      <form onSubmit={submitAnswerHandler}>
        <input
          value={value}
          onChange={changeHandler}
          type="text"
          placeholder="Paukštis..."
          autoFocus
        />
        <Button>Spėti</Button>
      </form>
    </section>
  );
};

export default Question;
