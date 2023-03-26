import React, { useState } from "react";

function AddUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const id = Date.now();
    const newUser = { id, name, email };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    setName("");
    setEmail("");
  }

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUsers;
