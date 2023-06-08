import React from "react"
import s from "./Product.module.css"

const Product = () => {
	return (
		<div className={s.product}>
			<div className={s.product__header}>
				header
			</div>
			<img className={s.product__img} src="" alt="" />
			<div className={s.footer}>
				<p className={s.text}>text</p>
				<div className={s.price}>
					<span>'price' $ / шт</span>
					<span>old price</span>
				</div>
			</div>
		</div>
	)
}

export default Product