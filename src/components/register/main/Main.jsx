import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Main.module.css'

const Main = () => {
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
        <div className={style.reg}>
          <h1>Ro'yxatdan o'tish</h1>
          <div className={style.inp}>{regMap}</div>
          <div className={style.btn}>
            <NavLink to={'/parol'}>Register</NavLink>
            <NavLink to={'/login'}>Kirish</NavLink>
          </div>
        </div>
  )
}

export default Main
