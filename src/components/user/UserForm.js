import { useRef, useEffect, useState } from "react";
import Modal from "../ui/Modal";
import styles from "./UserForm.module.css";
import { validate, resetFields } from "../../util/form-util";

const UserForm = (props) => {
  const [isValid, setIsValid] = useState(null);
  const [modalText, setModalText] = useState("");
  const [reset, setReset] = useState(false);

  const nameRef = useRef();
  const ageRef = useRef();

  useEffect(() => {
    reset === true && resetFields(nameRef, ageRef);

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
              resetFields(nameRef, ageRef);
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
            onChange={(e) => validate(e, setIsValid, setModalText)}
            ref={nameRef}
            required
          />
        </div>
        <div>
          <label to="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={(e) => validate(e, setIsValid, setModalText)}
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
