import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import { Display } from "./pages/Display";
import UserList from "./pages/UserList";
import AddUsers from "./pages/AddUsers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/display" element={<Display />} />
    </Routes>
  );
}

export default App;
