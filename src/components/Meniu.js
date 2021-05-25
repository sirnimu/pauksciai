import classes from "./meniu.module.scss";

const Meniu = () => {
  const openQuizHandler = () => {};

  return (
    <div className={classes.meniu}>
      <button onClick={openQuizHandler}>Paukščių testas</button>
    </div>
  );
};

export default Meniu;
