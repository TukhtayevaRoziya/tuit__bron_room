import React from "react";
import { NavLink } from "react-router-dom";

import style from "../main/Main.module.css";

const ResetPassword = () => {
  return (
    <div className={style.reg}>
      <h1>Parolni tiklash</h1>
      <div className={style.inp}>
        <label htmlFor={"name"}>Ism</label>
        <input id={"name"} type={"text"} placeholder={"Olim"} />
        <label htmlFor={"phoneNum"}>Telefon raqami</label>
        <input id={"phoneNum"} type={"number"} placeholder={"+998993201758"} />
      </div>

      <div className={style.btn}>
        <NavLink to={"/resetPasswordSMS"}>Davom etish</NavLink>
      </div>
    </div>
  );
};

export default ResetPassword;
