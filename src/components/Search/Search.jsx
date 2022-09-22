import React from "react";
import style from "./_Search.module.scss";
import { SearchContext } from "../../App";
const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  console.log(searchValue);

  return (
    <div>
      <input
        className={style.root}
        type="text"
        placeholder="search..."
        value={searchValue}
        onChange={(i) => setSearchValue(i.target.value)}
      />
    </div>
  );
};

export default Search;
