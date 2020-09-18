import React, { useEffect, useState } from 'react'
import List from '../List/List'
import Loading from '../Loading.js'

function Productos({ setItemsParaModificarCarrito, setData, data }) {
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
				console.log('res then: ' + res.results)
				setData(res.results)
				setLoadingState(false)
			})
	}, [])

	if (loadingState) {
		return <Loading />
	} else {
		return (
			<div>
				Pagina Productos
				<List
					data={data}
					setItemsParaModificarCarrito={setItemsParaModificarCarrito}
				/>
			</div>
		)
	}
}
export default Productos
