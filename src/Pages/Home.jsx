import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/pizzaBlock/Skeleton";
import PizzaBlock from "../components/pizzaBlock";
import { SearchContext } from "../App";
import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  let [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sort, setSort] = React.useState({
    name: "популярності",
    sortProperty: "price",
  });

  React.useEffect(() => {
    setIsLoading(true);
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `&category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://63091c1df8a20183f76ebb75.mockapi.io/items?${category}${search}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, [categoryId, sort, searchValue]);
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
              onClickCategory={(i) => {
                setCategoryId(i);
              }}
            />
            <Sort sort={sort} setSort={(i) => setSort(i)} />
          </div>

          <h2 className="content__title">Всі піцци</h2>
          <div className="content__items">{isLoading ? skeleton : pizzas}</div>
        </div>
        <Pagination/>
      </div>
    </>
  );
};

export default Home;
