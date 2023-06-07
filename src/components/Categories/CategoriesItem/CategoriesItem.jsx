import React from "react"
import s from "./CategoriesItem.module.css"
import icon from './img/list.svg'

const CategoriesItem = ({ bg, text }) => {
	return (
		<li className={s.item}>
			<div className={s.zoom}>
				<img className={s.img} src={bg} alt="Your Image" />
			</div>
			<span className={s.overlay}></span>
			<div className={s.box}>
				<img src={icon} alt="" />
				<p className={s.text}>{text}</p>
			</div>
		</li>

	)
}

export default CategoriesItem