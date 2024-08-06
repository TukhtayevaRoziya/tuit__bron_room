import React from 'react'
import { NavLink } from 'react-router-dom'

import style from '../main/Main.module.css'

const Reg = ({title, link}) => {
  return (
         <div className={style.reg}>
          <h1>{title}</h1>
          <div className={style.inp}>
          <label htmlFor={'sms'}>SMS kodi</label>
          <input id={'sms'} type={'text'} placeholder={'12365'} />
          </div>
          <div className={style.btn}>
            <NavLink to={link}>Davom etish</NavLink>
          </div>
        </div>
  )
}

export default Reg
