import User from "./User";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <ul className={styles["userList-container"]}>
      {users.map((user, index) => (
        <User name={user.name} age={user.age} key={index} />
      ))}
    </ul>
  );
};

export default UserList;
