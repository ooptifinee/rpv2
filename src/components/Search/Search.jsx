import React, { useState } from "react";
import style from "./_Search.module.scss";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = useState("");
  const { setSearchValue } = React.useContext(SearchContext);

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 400),
    []
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div>
      <input
        className={style.search}
        type="text"
        placeholder="search..."
        value={value}
        onChange={onChangeInput}
      />
    </div>
  );
};

export default Search;
