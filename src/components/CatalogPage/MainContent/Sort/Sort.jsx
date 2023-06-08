import React, { useState } from "react"
import { NavLink } from 'react-router-dom'
import s from "./Sort.module.css"

const Sort = () => {
	const [text, setText] = useState('Від дешевих до дорогих')
	const [isVisible, setIsVisible] = useState(false)

	const handleButtonClick = () => {
		setIsVisible(!isVisible)
	}

	const options = [
		{ id: 1, link: '/1', option: 'За замовчуванням' },
		{ id: 2, link: '/2', option: 'Від дешевих до дорогих' },
		{ id: 3, link: '/3', option: 'Від дорогих до дешевих' },
		{ id: 4, link: '/4', option: 'Новинки' },
		{ id: 5, link: '/5', option: 'Популярні' },
		{ id: 6, link: '/6', option: 'Акційні' }
	]
	return (
		<div className={s.sort}>
			<span>Сортування :</span>
			<button onClick={handleButtonClick} className={s.button}>
				{text}
			</button>

			{isVisible &&
				<div className={s.dropdown}>
					<ul className={s.dropdown__list}>
						{options.map(({ id, link, option }) =>
						(
							<li key={id} className={s.dropdown__item}>
								<NavLink
									onClick={(e) => {
										setText(option)
									}}
									to={link}>{option}</NavLink>
							</li>
						)
						)}

					</ul>
				</div>
			}

		</div>
	)
}

export default Sort