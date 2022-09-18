import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import NotFount from "./Pages/NotFound/NotFount";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  );
}

export default App;
