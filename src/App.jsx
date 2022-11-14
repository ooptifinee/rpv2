import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Basket from "./Pages/Basket/Basket";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

export const SearchContext = React.createContext();
function App() {
  const [searchValue, setSearchValue] = React.useState("");
  console.log(searchValue);
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Basket />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
