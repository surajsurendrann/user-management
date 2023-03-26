import React, { useState } from "react";

export const Display = () => {
  const [users, setUsers] = useState([]);

  const getUser = () => {
    const existingData = JSON.parse(localStorage.getItem("updatedUsers")) || [];
    setUsers(existingData);
  };

  return (
    <div>
      <button onClick={getUser}>load</button>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};
