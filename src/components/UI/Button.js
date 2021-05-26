import classes from "./Button.module.scss";

const Button = (props) => {
  const isTouchScreen = "ontouchstart" in document.documentElement;

  return (
    <button
      onClick={props.onClick}
      className={classes.btn}
      autoFocus={props.autoFocus && !isTouchScreen}
    >
      {props.children}
    </button>
  );
};

export default Button;
