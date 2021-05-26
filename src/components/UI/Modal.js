import { useEffect } from "react";
import classes from "./Modal.module.scss";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const overlayElem = document.getElementById("overlays");

const Modal = (props) => {
  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        e.preventDefault();
        props.onClose();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [props]);

  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, overlayElem)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlayElem)}
    </>
  );
};

export default Modal;
