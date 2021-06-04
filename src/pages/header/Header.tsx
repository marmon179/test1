import React from 'react'
import style from './Header.module.css'
import {PATH} from '../Routes';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className={style.header}>
            <NavLink to={PATH.MAIN} className={style.link} activeClassName={style.active}>Главная</NavLink>
            <NavLink to={PATH.EMPLOYEES} className={style.link} activeClassName={style.active}>Сотрудники</NavLink>
        </div>
    )
}

export default Header


