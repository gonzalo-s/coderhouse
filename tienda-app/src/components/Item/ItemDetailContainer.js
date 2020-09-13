import React, { useState, useEffect } from 'react'
import Item from './Item'
import Loading from '../Loading'
import './Item.css'

function ItemDetailContainer({ setItemsParaModificarCarrito, data, setData }) {
	//const [data, setData] = useState([])
	const [loadingState, setLoadingState] = useState(true)
	console.log(data)

	useEffect(() => {
		fetch(
			'https://api.mercadolibre.com/sites/MLA/search?q=soldadora%20konan'
		)
			.then((response) => {
				setLoadingState(true)
				return response.json()
			})
			.then((res) => {
				setData(res.results)
				setLoadingState(false)
			})
	}, [])

	if (loadingState) {
		return <Loading />
	} else {
		return (
			<div className={'itemContainer'}>
				{data
					.filter((item, i) => {
						if (i < 4) {
							return item
						}
					})
					.map((item, i) => {
						return (
							<Item
								key={i}
								item={item}
								setItemsParaModificarCarrito={
									setItemsParaModificarCarrito
								}
							/>
						)
					})}
			</div>
		)
	}
}
export default ItemDetailContainer
