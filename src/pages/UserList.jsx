import React from "react";

function UserList() {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
