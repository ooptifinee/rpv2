import React from "react";

function Categories() {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const [active, setActive] = React.useState(0)

  return (
    <div className="categories">
      <ul>
          {
              categories.map((value, i) => (
                  <li onClick={() => setActive(i)} className={active === i ? 'active' : ''} key={i}>
                      {value}
                  </li>
              ))
          }
      </ul>
    </div>
  );
}

export default Categories;
