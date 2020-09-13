import React from 'react'
import ItemDetailContainer from '../Item/ItemDetailContainer.js'
function Productos({ setItemsParaModificarCarrito, setData, data }) {
	return (
		<div>
			Pagina Productos
			<ItemDetailContainer
				setItemsParaModificarCarrito={setItemsParaModificarCarrito}
				setData={setData}
				data={data}
			/>
		</div>
	)
}
export default Productos
