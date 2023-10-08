import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import RootLayout from "../pages/RootLayout/RootLayout";
import ProtectedRoute from "./ProtectedRoute";
import ChatLayout from "../pages/ChatLayout/ChatLayout";

function RouterConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Public Routes */}
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path={"chat"} element={<ChatLayout/>} />
          </Route>
          <Route path='*' element={<Navigate to="login" />}/>
        </Route>
      </Routes>
    </>
  );
}

export default RouterConfig;
