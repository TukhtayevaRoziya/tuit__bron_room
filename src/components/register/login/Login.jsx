import React from "react";
import { NavLink } from "react-router-dom";

import style from "../main/Main.module.css";

const Login = () => {
  return (
    <div className={style.reg}>
      <h1>Ro'yxatdan o'tish</h1>
      <div className={style.inp}>
        <label htmlFor={"phoneNum"}>Telefon raqam</label>
        <input id={"phoneNum"} type={"number"} placeholder={"+998993201758"} />
        <label htmlFor={"password"}>Parol</label>
        <input id={"password"} type={"password"} placeholder={"Sourin1328"} />
      </div>
      <div style={{width:'100%', textAlign:'left'}}>
        <NavLink
          to={"/resetPassword"}
          style={{ textDecoration: "none" }}
        >
          Parolni tiklash
        </NavLink>
      </div>
      <div className={style.btn}>
        <NavLink to={"/home"}>Kirish</NavLink>
        <NavLink to={"/"}>Register</NavLink>
      </div>
    </div>
  );
};

export default Login;
