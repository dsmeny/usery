import { useRef, useEffect, useState } from "react";
import Modal from "../ui/Modal";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [isValid, setIsValid] = useState(null);
  const [modalText, setModalText] = useState("");
  const [reset, setReset] = useState(false);

  const nameRef = useRef();
  const ageRef = useRef();

  function validate(e) {
    const targetID = e.target.id;
    const target = e.target.value;
    const reg = /[A-Za-z]/g;

    switch (targetID) {
      case "name":
        if (reg.test(target)) {
          setIsValid(true);
          setModalText(targetID);
          console.log("if:", isValid);
          return;
        } else {
          console.log("else:", isValid);
          setIsValid(false);
        }
        return;
      case "age":
        if (!reg.test(target)) {
          setIsValid(true);
          setModalText(targetID);
          return;
        } else {
          setIsValid(false);
        }
        return;
      default:
        return;
    }
  }

  function resetFields() {
    nameRef.current.value = "";
    ageRef.current.value = "";
    nameRef.current.focus();
  }

  useEffect(() => {
    reset === true && resetFields();

    return () => {
      setReset(false);
    };
  }, [reset]);

  function submitHandler(e) {
    e.preventDefault();

    const user = {
      name: nameRef.current.value,
      age: ageRef.current.value,
    };

    isValid === true && props.addNewUser(user);
    setIsValid(null);
    setReset(true);
  }

  return (
    <>
      {isValid !== null && isValid === false && (
        <Modal>
          <p>Please enter a valid {modalText}! </p>
          <button
            onClick={() => {
              setIsValid(true);
              resetFields();
            }}
          >
            Ok
          </button>
        </Modal>
      )}
      <form onSubmit={submitHandler} className={styles["form-container"]}>
        <div>
          <label to="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={validate}
            ref={nameRef}
            required
          />
        </div>
        <div>
          <label to="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={validate}
            min="18"
            max="66"
            ref={ageRef}
            required
          />
        </div>
        <div>
          <button
            style={{ opacity: `${isValid === null ? "0.3" : "1"}` }}
            disabled={isValid === null ? true : false}
          >
            Add person
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
