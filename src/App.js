// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
// import UserProfile from "./components/profile/UserProfile";

import "resize-observer-polyfill";

function App() {
  // const isAuthenticated = true; // Set your authentication logic here

  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Custom route for authenticated users */}
        {/* <Route
          path="/profile"
          element={
            isAuthenticated ? <UserProfile /> : <Navigate to="/login" replace />
          }
        /> */}
        {/* Add more routes for other pages */}
      </Routes>
    </>
  );
}

export default App;
