import React from "react";
import { useId } from "react";
import useUsres from "../hooks/useUsres";

function user() {
  const [users, deleteUsers, addUser] = useUsres();
  const id = useId();
  return (
    <>
      <h1>Usres</h1>
      <button
        onClick={() => {
          addUser(id);
        }}
      >
        Add Users
      </button>
      <div>{users.map}</div>
    </>
  );
}

export default user;
