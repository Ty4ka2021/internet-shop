import React from "react"
import { NavLink } from 'react-router-dom'
import s from "./Aside.module.css"

const Aside = () => {
	return (
		<aside className={s.aside}>
			<ul className={s.links}>
				<li>
					<NavLink>Автоаксесуари</NavLink>
				</li>
				<li>
					<NavLink>Оливи моторні</NavLink>
				</li>
				<li>
					<NavLink>Автоелектроніка</NavLink>
				</li>
				<li>
					<NavLink>Догляд за авто</NavLink>
				</li>
				<li>
					<NavLink>Автозапчастини</NavLink>
				</li>
				<li>
					<NavLink>Рідини омивача скла</NavLink>
				</li>
			</ul>

			<div className={s.filters}>
				<h3>Фільтри</h3>
				<ul>
					<li>Ціна</li>
					<li>Виробник</li>
					<li>Колір</li>
					<li>Матеріал</li>
					<li>Країна виробник</li>
				</ul>
			</div>
		</aside>
	)
}

export default Aside