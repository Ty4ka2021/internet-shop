import cn from 'classnames'
import React from "react"

import Aside from '../../components/CatalogPage/Aside/Aside'
import MainContent from '../../components/CatalogPage/MainContent/MainContent'
import s from "./CatalogPage.module.css"

const CatalogPage = () => {
	return (
		<>
			<div className={cn(s.CatalogPage, 'container')}>
				<Aside />
				<MainContent />
			</div>
		</>
	)
}

export default CatalogPage