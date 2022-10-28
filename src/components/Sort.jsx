import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../redux/slices/filterSlice";

export const sortList = [
  { name: "Популярності(DESC)", sortProperty: "rating" },
  { name: "Популярності(ASC)", sortProperty: "-rating" },
  { name: "Ціні(DESC)", sortProperty: "price" },
  { name: "Ціні(ASC)", sortProperty: "-price" },
  { name: "Алфавіту(DESC)", sortProperty: "title" },
  { name: "Алфавіту(ASC)", sortProperty: "-title" },
];

function Sort() {
  const dispatch = useDispatch();
  const sortId = useSelector((state) => state.filter.sort);
  const [sortVisible, setSortVisible] = React.useState(false);
  const sortRef = React.useRef();
  console.log(sortRef.current)

  const onClickSelect = (obj) => {
    dispatch(setSort(obj));
    setSortVisible(false);
  };

  React.useEffect(() => {
    const hidePopUpClick = event => {
      if (!event.path.includes(sortRef.current)){
        setSortVisible(sortVisible)
      }
    }
    document.body.addEventListener('click', hidePopUpClick)

    return () => document.body.removeEventListener('click', hidePopUpClick)
  }, [])

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setSortVisible(!sortVisible)}>{sortId.name}</span>
      </div>
      {sortVisible && (
        <div className="sort__popup">
          <ul>
            {sortList.map((sort, value) => (
              <li
                key={value}
                onClick={() => onClickSelect(sort)}
                className={
                  sortId.sortProperty === sort.sortProperty ? "active" : ""
                }
              >
                {sort.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
