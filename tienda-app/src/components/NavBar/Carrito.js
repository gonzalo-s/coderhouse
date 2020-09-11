import React from 'react'

function Carrito({ totalItems, clearTotalItems }) {
	console.log(totalItems)

	function clearCarrito() {
		clearTotalItems()
	}

	return (
		<div>
			Pagina Carrito
			<div>Productos en el Carrito: {totalItems}</div>
			<button onClick={clearCarrito}>Borrar Productos</button>
		</div>
	)
}
export default Carrito
