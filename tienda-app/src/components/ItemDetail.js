import React from 'react'
import Button from '../components/Contador/Button.js'

function ItemDetail({ item, setCantidadItemsParaAgregar }) {
	console.log(item)

	function itemToAdd() {
		setCantidadItemsParaAgregar(item.available_quantity)
	}
	return (
		<div>
			<h4>{item.title}</h4>
			<img src={item.thumbnail} alt={item.title} />
			{item.available_quantity > 0 ? (
				<Button sign={'Agregar al Carrito'} onClick={itemToAdd} />
			) : (
				'SIN STOCK'
			)}
		</div>
	)
}
export default ItemDetail
