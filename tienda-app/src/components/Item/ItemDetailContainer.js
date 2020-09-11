import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import Loading from '../Loading'
import './ItemDetail.css'

function ItemDetailContainer({ setItemsParaAgregar }) {
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
				{data.map((item, i) => {
					if (i < 4) {
						return (
							<ItemDetail
								key={i}
								item={item}
								setItemsParaAgregar={setItemsParaAgregar}
							/>
						)
					}
				})}
			</div>
		)
		// <div className={'itemContainer'}>
		// 	<ItemDetail
		// 		item={data[0]}
		// 		setItemsParaAgregar={setItemsParaAgregar}
		// 	/>
		// </div>
	}
}
export default ItemDetailContainer
