import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={`${styles.modal} ${props.className}`}>{props.children}</div>
  );
};

export default Modal;
