import React, { useState } from "react"
import { Link } from 'react-router-dom'
import s from "./Cart.module.css"
import cart from './img/cart.svg'

const Cart = () => {
	const [count, setCount] = useState(0)
	return (
		<>
			<div className={s.cart}>
				<Link to='/cart'>
					<span className={s.count}>{count}</span>
					<img className={s.icon} src={cart} alt="Корзина" />
				</Link>
			</div>
		</>
	)
}

export default Cart