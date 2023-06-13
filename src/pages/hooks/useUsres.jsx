import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function useUsres() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(["John", "Budi", "Abc"]);
  }, []);

  const deleteUsers = (user) => {
    setUsers(users.filter((filterUser) => user != filterUser));
  };

  const addUser = (user) => {
    setUsers({ ...users, user });
  };

  return [users, deleteUsers, addUser];
}

export default useUsres;
