import React from "react"
import s from "./MainContent.module.css"
import Product from './Product/Product'
import Sort from './Sort/Sort'


const MainContent = () => {

	return (
		<div className={s.main}>
			<div className={s.header}>
				<h2 className={s.title}>Каталог</h2>
				<Sort />
			</div>

			<ul>
				<li>
					<Product />
				</li>
			</ul>

		</div>
	)
}

export default MainContent