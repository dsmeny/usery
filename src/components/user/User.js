import style from "./User.module.css";

const User = ({ name, age }) => {
  return (
    <li className={style["user-container"]}>
      <p>
        {name} (<span>{age}</span>)
      </p>
    </li>
  );
};

export default User;
