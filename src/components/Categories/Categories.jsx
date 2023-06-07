import cn from 'classnames'
import React from "react"
import s from "./Categories.module.css"
import CategoriesItem from './CategoriesItem/CategoriesItem'

const Categories = () => {
	return (
		<>
			<div className={cn(s.Categories, 'container')}>
				<h2 className={s.title}>Категорії магазину</h2>

				<ul className={s.list}>
					<CategoriesItem
						bg={'https://demox-000-10.site-x.pro/WebCache/Media/demox-000-10/_assets/black-interior-details-modern-luxury-car-ratio-10x10-proportions-jpg-ratio-width-500-jpg.webp'}
						text='Автоаксесуари'
					/>

					<CategoriesItem
						bg={'https://demox-000-10.site-x.pro/WebCache/Media/demox-000-10/_assets/svoechasna-zamina-svichok-zapalennya---vpevnena-robota-vashogo-avtomobilya-2-ratio-10x10-proportions-jpg-ratio-width-500-jpg.webp'}
						text='Оливи моторні'
					/>

					<CategoriesItem
						bg={'https://demox-000-10.site-x.pro/WebCache/Media/demox-000-10/_assets/videoreestrator---nezaminniy-pravdiviy-svidok-ratio-10x10-proportions-jpg-ratio-width-500-jpg.webp'}
						text='Автоелектроніка'
					/>

					<CategoriesItem
						bg={'https://demox-000-10.site-x.pro/WebCache/Media/demox-000-10/_assets/car-wash-detailing-station-ratio-10x10-proportions-jpg-ratio-width-500-jpg.webp'}
						text='Догляд за авто'
					/>

					<CategoriesItem
						bg={'https://demox-000-10.site-x.pro/WebCache/Media/demox-000-10/_assets/svoechasna-zamina-svichok-zapalennya---vpevnena-robota-vashogo-avtomobilya-1-ratio-10x10-proportions-jpg-ratio-width-500-jpg.webp'}
						text='Автозапчастини'
					/>

					<CategoriesItem
						bg={'https://demox-000-10.site-x.pro/WebCache/Media/demox-000-10/_assets/car-wash-detailing-station1-ratio-10x10-proportions-jpg-ratio-width-500-jpg.webp'}
						text='Рідини омивача скла'
					/>

				</ul>
			</div>
		</>
	)
}

export default Categories