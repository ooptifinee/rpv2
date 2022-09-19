import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/pizzaBlock/Skeleton";
import PizzaBlock from "../components/pizzaBlock";
import Pagination from "./Pagination/Pagination";

const Home = ({ searchValue }) => {
  let [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [category, setCategory] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sort, setSort] = React.useState({
    name: "популярності",
    sortProperty: "price",
  });
  const search = searchValue ? `&search=${searchValue}` : "";

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeleton = [...new Array(3)].map((_, index) => (
    <Skeleton key={index} />
  ));

  //https://63091c1df8a20183f76ebb75.mockapi.io/items?${category}&sortBy=${sort.sortProperty}&order=${search}

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63091c1df8a20183f76ebb75.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort.sortProperty}&order=${search}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, [category, sort, searchValue, currentPage]);

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              category={category}
              onClickCategory={(i) => {
                setCategory(i);
              }}
            />
            <Sort sort={sort} setSort={(i) => setSort(i)} />
          </div>

          <h2 className="content__title">Всі піцци</h2>
          <div className="content__items">{isLoading ? skeleton : pizzas}</div>
          <Pagination onChangePage={setCurrentPage} />
        </div>
      </div>
    </>
  );
};

export default Home;
