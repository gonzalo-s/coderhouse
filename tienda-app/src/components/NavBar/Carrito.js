import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

function Carrito() {
	const carritoContext = useContext(CartContext)
	const sumItems = carritoContext.sumItems
	const clearCarrito = carritoContext.clearCarrito

	return (
		<div>
			Pagina Carrito
			<div>Productos en el Carrito: {sumItems}</div>
			<button onClick={clearCarrito}>Borrar Productos</button>
		</div>
	)
}
export default Carrito
