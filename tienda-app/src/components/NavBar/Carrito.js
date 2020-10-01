import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

function Carrito() {
	const carritoContext = useContext(CartContext)
	const carrito = carritoContext.carrito
	const clearCarrito = carritoContext.clearCarrito

	const sumItems = carrito.reduce((a, { cantidad }) => a + cantidad, 0)
	console.log(sumItems)

	return (
		<div>
			Pagina Carrito
			<div>Productos en el Carrito: {sumItems}</div>
			<button onClick={clearCarrito}>Borrar Productos</button>
		</div>
	)
}
export default Carrito
