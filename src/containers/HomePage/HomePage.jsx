import React from "react"
import Categories from '../../components/Categories/Categories'
import s from "./HomePage.module.css"

const HomePage = () => {
	return (
		<>
			<div className={s.wrapper}>
				<Categories />
			</div>
		</>
	)
}

export default HomePage