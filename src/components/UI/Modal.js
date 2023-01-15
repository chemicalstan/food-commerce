import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const overlayPortalTarget = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        overlayPortalTarget
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayPortalTarget
      )}
    </Fragment>
  );
};

export default Modal;
