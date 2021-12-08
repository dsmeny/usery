import React, { useState } from "react";
import UserForm from "./components/user/UserForm";
import UserList from "./components/user/UserList";
import "./app.css";

function App() {
  const [users, setUsers] = useState([]);
  const [hasUser, setHasUser] = useState(false);

  const addNewUser = (user) => {
    setUsers((prev) => [...prev, user]);
    setHasUser(true);
  };

  return (
    <div className="container">
      <h1 style={{ color: "white" }}>USERLY</h1>
      <UserForm addNewUser={addNewUser} />
      {hasUser && hasUser === true && <UserList users={users} />}
    </div>
  );
}

export default App;
