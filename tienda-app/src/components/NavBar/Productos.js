import React from 'react'
import ItemDetailContainer from '../Item/ItemDetailContainer.js'
function Productos({ setItemsParaModificar }) {
	return (
		<div>
			Pagina Productos
			<ItemDetailContainer
				setItemsParaModificar={setItemsParaModificar}
			/>
		</div>
	)
}
export default Productos
