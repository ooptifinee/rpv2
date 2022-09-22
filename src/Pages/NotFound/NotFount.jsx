import React from "react";
import cat from "./kocheng_agadjwadcx38fa.png";
import { NavLink } from "react-router-dom";
import style from "../../scss/NotFound/_NotFound.module.scss";

const NotFount = () => {
  return (
    <>
      <div className={style.wrapper}>
        <h2> Сторінка на реконструкції :D </h2>
        <img src={cat} alt="cat" />
        <div></div>
        <NavLink to={"/"}>
          <button>Back</button>
        </NavLink>
      </div>
    </>
  );
};

export default NotFount;
