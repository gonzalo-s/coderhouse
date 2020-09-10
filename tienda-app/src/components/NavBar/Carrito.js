import React from 'react'
import Contador from '../Contador/Contador.js'

function Carrito({ itemToAdd }) {
	console.log(itemToAdd)
	return (
		<div>
			<Contador itemToAdd={itemToAdd} />
			Pagina Carrito
		</div>
	)
}
export default Carrito
