import React from 'react'

function Carrito({ totalItemsCarrito, clearTotalItemsCarrito }) {
	console.log(totalItemsCarrito)

	function clearCarrito() {
		clearTotalItemsCarrito()
	}

	return (
		<div>
			Pagina Carrito
			<div>Productos en el Carrito: {totalItemsCarrito}</div>
			<button onClick={clearCarrito}>Borrar Productos</button>
		</div>
	)
}
export default Carrito
