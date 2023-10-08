import React, { Suspense } from "react";
import "./App.css";
import AuthServiceProvider from "./services/AuthServiceProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";

function App() {
  return (
    <div className="appBackground">
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <AuthServiceProvider>
        <Routes>
          <Route path='/*' element={<RouterConfig/>} />
        </Routes>
      </AuthServiceProvider>
    </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;
