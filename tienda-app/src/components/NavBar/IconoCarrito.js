import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

import icono from './shopping-cart.svg'

function IconoCarrito() {
	const carritoContext = useContext(CartContext)
	const totalCarrito = carritoContext.sumItems
	console.log(totalCarrito)
	return (
		<div>
			<img src={icono} alt="Carro" width="30" height="30" />
			<span> {totalCarrito}</span>
		</div>
	)
}
export default IconoCarrito
