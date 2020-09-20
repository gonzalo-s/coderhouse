import React from 'react'

import { useLocation } from 'react-router-dom'

function Item() {
	let location = useLocation()
	let item = location.state.item
	console.log(item)
	let modelo = item.attributes[2].value_name
	let potencia = item.attributes[3].value_name
	let peso = item.attributes[4].value_name

	// let itemId = item.id
	let itemTitle = item.title
	// let setItemsParaModificarCarrito = setItemsParaModificarCarrito
	let itemThumbnail = item.thumbnail
	// let min = 0
	// let max = item.sold_quantity

	return (
		<div className={'item'}>
			<div>Modelo: {modelo}</div>
			<div>Potencia: {potencia}</div>
			<div>Peso: {peso}</div>

			<div>{itemTitle}</div>
			<img width={'100'} src={itemThumbnail} alt={itemTitle} />
		</div>
	)
}
export default Item
