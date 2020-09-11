import React from 'react'
import Contador from '../Contador/Contador.js'
import './ItemDetail.css'

function ItemDetail({ item, setItemsParaAgregar }) {
	console.log(item)

	let max = item.sold_quantity //available_quantity siempre era 1 asi q uso sold para tener otros valores
	let min = 0

	function itemToAdd(cantidad) {
		setItemsParaAgregar(cantidad)
	}

	return (
		<div className={'itemDetail'}>
			<div className={'title'}>{item.title}</div>
			<img width={'100'} src={item.thumbnail} alt={item.title} />

			{item.sold_quantity > 0 ? (
				<Contador max={max} min={min} itemToAdd={itemToAdd} />
			) : (
				'SIN STOCK'
			)}
		</div>
	)
}
export default ItemDetail
