import React from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/pizzaBlock/Skeleton";
import PizzaBlock from "../components/pizzaBlock";

const Home = () => {
    let [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch("https://63091c1df8a20183f76ebb75.mockapi.io/items")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
                setIsLoading(false);
            });
    }, []);


    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>

                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {isLoading
                            ? [...new Array(3)].map((_, index) => <Skeleton key={index} />)
                            : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;