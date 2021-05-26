import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./Answer.module.scss";

const Answer = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.answer}>
        {props.correct ? (
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/b/bd/Checkmark_green.svg"
            }
            alt="Teisingas atsakymas"
          />
        ) : (
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/5/5f/Red_X.svg"
            }
            alt="Neteisingas atsakymas"
          />
        )}

        <div>
          <p>Tavo spėjimas:</p>
          <h1>{props.guess}</h1>
          <p>Teisingas atsakymas:</p>
          <h1>{props.answer}</h1>
        </div>
        <Button onClick={props.onClose}>Kitas paukštis</Button>
      </div>
    </Modal>
  );
};

export default Answer;
