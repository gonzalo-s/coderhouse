import React from 'react'
import ItemDetailContainer from '../Item/ItemDetailContainer.js'
function Productos({ setItemsParaAgregar }) {
	return (
		<div>
			Pagina Productos
			<ItemDetailContainer setItemsParaAgregar={setItemsParaAgregar} />
		</div>
	)
}
export default Productos
