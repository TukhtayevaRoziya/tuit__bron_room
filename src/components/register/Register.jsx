import React from "react";

import i1 from "../../assets/reg.png";
import tatu from "../../assets/tatu_logo.png";
import atkrv from "../../assets/atkrv_loo.png";

import style from "./Register.module.css";
import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Reg from "./reg/Reg";
import Login from "./login/Login";
import ResetPassword from "./resetPassword/ResetPassword";
import NewParol from "./newParol/NewParol";

const Register = () => {
  return (
    <div className={style.body}>
      <div className={style.main}>
        <div className={style.logo}>
          <img src={tatu} alt="" />
          <img src={atkrv} alt="" />
        </div>
        <h1 className={style.title}>TUIT TTJ</h1>
        <Routes>
          <Route path="/parol" element={<Reg title={"Ro'yxatdan o'tish"} link={'/home'} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/resetPasswordSMS" element={<Reg title={"Parolni tiklash"} link={'/newPassword'} />} />
          <Route path="/newPassword" element={<NewParol />} />
          <Route index element={<Main />} />
        </Routes>
      </div>
      <div className={style.img}>
        <img src={i1} alt="" />
      </div>
    </div>
  );
};

export default Register;
