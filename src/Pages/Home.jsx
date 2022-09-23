import React, { useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/pizzaBlock/Skeleton";
import PizzaBlock from "../components/pizzaBlock";
import { SearchContext } from "../App";
import Pagination from "../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const { searchValue } = React.useContext(SearchContext);
  let [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    setIsLoading(true);
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `&category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    // fetch(
    //   `https://63091c1df8a20183f76ebb75.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}&${search}`
    // )
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setItems(json);
    //     setIsLoading(false);
    //   });

    axios
      .get(
        `https://63091c1df8a20183f76ebb75.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}&${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  const skeleton = [...new Array(3)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              category={categoryId}
              onClickCategory={onChangeCategory}
            />
            <Sort />
          </div>

          <h2 className="content__title">Всі піцци</h2>
          <div className="content__items">{isLoading ? skeleton : pizzas}</div>
        </div>
        <Pagination onChangedPage={setCurrentPage} />
      </div>
    </>
  );
};

export default Home;
