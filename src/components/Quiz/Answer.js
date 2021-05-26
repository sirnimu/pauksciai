import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./Answer.module.scss";

const Answer = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.answer}>
        <p>Teisingas atsakymas:</p>
        <h1>{props.name}</h1>
        <Button onClick={props.onClose}>Kitas paukštis</Button>
      </div>
    </Modal>
  );
};

export default Answer;
