import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../../components/Header/Header'
import CartPage from '../CartPage/CartPage'
import HomePage from '../HomePage/HomePage'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import s from './App.module.css'
import CatalogPage from '../CatalogPage/CatalogPage'
const App = () => {
	return (
		<>
			<BrowserRouter>
				<div className={s.wrapper}>

					<Header />

					<Routes>
						<Route path='/' element={<HomePage />} />

						<Route path='/cart' element={<CartPage />} />
						<Route path='/catalog' element={<CatalogPage />} />

						<Route path='/*' element={<NotFoundPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App