import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import NotFount from "./Pages/NotFound/NotFount";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<Home searchValue={searchValue} />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  );
}

export default App;
