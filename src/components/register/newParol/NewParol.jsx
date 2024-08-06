import React from "react";
import { NavLink } from "react-router-dom";

import style from "../main/Main.module.css";

const NewParol = () => {
  return (
    <div className={style.reg}>
      <h1>Parolni tiklash</h1>
      <div className={style.inp}>
        <label htmlFor={"parol"}>Password</label>
        <input id={"parol"} type={"password"} placeholder={"Souerin1328"} />
        <label htmlFor={"newParol"}>New Password</label>
        <input id={"newParol"} type={"password"} placeholder={"Souerin1328"} />
      </div>
      <div className={style.btn}>
        <NavLink to={"/home"}>Davom etish</NavLink>
      </div>
    </div>
  );
};

export default NewParol;
