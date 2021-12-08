export const validate = (e, setIsValid, setModalText) => {
  const targetID = e.target.id;
  const target = e.target.value;
  const reg = /[A-Za-z]/g;

  switch (targetID) {
    case "name":
      if (reg.test(target)) {
        setIsValid(true);
        setModalText(targetID);
        return;
      } else {
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
};

export const resetFields = (nameRef, ageRef) => {
  nameRef.current.value = "";
  ageRef.current.value = "";
  nameRef.current.focus();
};
