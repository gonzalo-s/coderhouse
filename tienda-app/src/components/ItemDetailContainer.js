import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail.js'
import Loading from './Loading.js'

function ItemDetailContainer({ setCantidadItemsParaAgregar }) {
	const [data, setData] = useState([])
	const [loadingState, setLoadingState] = useState(true)

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
		console.log('data loading true ' + data[0])
		return <Loading />
	} else {
		console.log('data loading false ' + data[0])

		return (
			<ItemDetail
				item={data[0]}
				setCantidadItemsParaAgregar={setCantidadItemsParaAgregar}
			/>
		)
	}
}
export default ItemDetailContainer
