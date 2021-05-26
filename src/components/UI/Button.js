import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={classes.btn}
      autoFocus={props.autoFocus}
    >
      {props.children}
    </button>
  );
};

export default Button;
