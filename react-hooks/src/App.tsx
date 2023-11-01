import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import UserList from "./pages/UserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
