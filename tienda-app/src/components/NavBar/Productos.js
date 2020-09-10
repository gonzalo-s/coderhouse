import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer.js'
function Productos({ setCantidadItemsParaAgregar }) {
	return (
		<div>
			Pagina Productos
			<ItemDetailContainer
				setCantidadItemsParaAgregar={setCantidadItemsParaAgregar}
			/>
		</div>
	)
}
export default Productos
