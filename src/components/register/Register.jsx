import React from "react";

import i1 from "../../assets/reg.png";
import tatu from "../../assets/tatu_logo.png";
import atkrv from "../../assets/atkrv_loo.png";

import style from "./Register.module.css";
import { NavLink } from "react-router-dom";

const Register = () => {

  let reg = [
    { id: 0, for: "name", label: "Ism", placeholder: "Olim", type: "text" },
    {
      id: 1,
      for: "surname",
      label: "Familiya",
      placeholder: "Olimov",
      type: "text",
    },
    {
      id: 2,
      for: "phoneNum",
      label: "Telefon raqam",
      placeholder: "Olim",
      type: "number",
    },
    {
      id: 3,
      for: "parol1",
      label: "Parol",
      placeholder: "Souerin1328",
      type: "password",
    },
    {
      id: 4,
      for: "parol2",
      label: "Paroln takrorlang",
      placeholder: "Souerin1328",
      type: "password",
    },
  ];

  let regMap = reg.map((r) => (
    <React.Fragment key={r.id}>
      <label htmlFor={r.for}>{r.label}</label>
      <input id={r.for} type={r.type} placeholder={r.placeholder} />
    </React.Fragment>
  ));

  return (
    <div className={style.body}>
      <div className={style.main}>
        <div className={style.logo}>
          <img src={tatu} alt="" />
          <img src={atkrv} alt="" />
        </div>
        <h1 className={style.title}>TUIT TTJ</h1>
        <div className={style.reg}>
          <h1>Ro'yxatdan o'tish</h1>
          <div className={style.inp}>{regMap}</div>
          <div className={style.btn}>
            <NavLink to={'/reg'}>Register</NavLink>
            <NavLink to={'/reg'}>Kirish</NavLink>
          </div>
        </div>
      </div>
      <div className={style.img}>
        <img src={i1} alt="" />
      </div>
    </div>
  );
};

export default Register;
