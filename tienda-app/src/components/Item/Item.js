import React from 'react'
import Contador from '../Contador/Contador.js'
import { Link } from 'react-router-dom'
import './Item.css'

function Item({ item, setItemsParaModificarCarrito }) {
	console.log(item)

	let max = item.sold_quantity //available_quantity siempre era 1 asi q uso sold_quantity para tener otros valores
	let min = 0

	function itemToAdd(cantidad) {
		setItemsParaModificarCarrito(cantidad)
	}

	return (
		<div className={'item'}>
			<Link to={`/productos/${item.id}`}>
				<div className={'title'}>{item.title}</div>
			</Link>
			<img width={'100'} src={item.thumbnail} alt={item.title} />

			{item.sold_quantity > 0 ? (
				<Contador max={max} min={min} itemToAdd={itemToAdd} />
			) : (
				'SIN STOCK'
			)}
		</div>
	)
}
export default Item
