import React from 'react'

import { useLocation } from 'react-router-dom'

function Item() {
	let location = useLocation()
	let item = location.state.item
	console.log(item)
	let brand = item.brand
	let description = item.description

	let itemTitle = item.title
	let itemThumbnail = item.imageId

	return (
		<div className={'item'}>
			<div>{itemTitle}</div>
			<div>Marca: {brand}</div>
			<div>descripcion: {description}</div>
			<img width={'100'} src={itemThumbnail} alt={itemTitle} />
		</div>
	)
}
export default Item
