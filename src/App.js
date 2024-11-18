import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "./Pages/Dashboard/UserDashboard";
import Login from "./Pages/Authentication/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
};

export default App;
