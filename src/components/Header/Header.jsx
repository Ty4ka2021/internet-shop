import React from "react"
import { NavLink } from 'react-router-dom'
import Cart from '../Cart/Cart'
import s from "./Header.module.css"
import logo from './img/logo.png'

const Header = () => {
	return (
		<>
			<div className={s.Header}>
				<img className={s.logo} src={logo} alt="Логотип" />

				<ul className={s.list}>
					<li className={s.item}>
						<NavLink to='/'>Головна</NavLink>
					</li>

					<li className={s.item}>
						<NavLink to='/catalog'>Каталог</NavLink>
					</li>

					<li className={s.item}>
						<NavLink to='/not-found'>Not Found</NavLink>
					</li>
				</ul>

				<Cart />

			</div>
		</>
	)
}

export default Header