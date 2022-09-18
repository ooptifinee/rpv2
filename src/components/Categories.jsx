import React from "react";

function Categories({ category, onClickCategory }) {
  const categories = ["Все", "Мясні", "Веганська", "Гриль", "Острі", "Закриті"];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={category === i ? "active" : ""}
            key={i}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
