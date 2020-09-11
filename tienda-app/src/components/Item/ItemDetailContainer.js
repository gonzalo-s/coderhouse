import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import Loading from '../Loading'
import './ItemDetail.css'

function ItemDetailContainer({ setItemsParaModificar }) {
	const [data, setData] = useState([])
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
							<ItemDetail
								key={i}
								item={item}
								setItemsParaModificar={setItemsParaModificar}
							/>
						)
					})}
			</div>
		)
		// <div className={'itemContainer'}>
		// 	<ItemDetail
		// 		item={data[0]}
		// 		setItemsParaModificar={setItemsParaModificar}
		// 	/>
		// </div>
	}
}
export default ItemDetailContainer
