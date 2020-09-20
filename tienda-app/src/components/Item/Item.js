import React, { useState } from 'react'
//import Contador from '../Contador/Contador.js'
//import { NavLink } from 'react-router-dom'
import 
import Contador from '../Contador/Contador'
import Button from '../Contador/Button'
import { useLocation } from 'react-router-dom'

import './Item.css'

function Item() {
	let location = useLocation()
	let item = location.state.item
	console.log(item)

	// let itemId = item.id
	let itemTitle = item.title
	// let setItemsParaModificarCarrito = setItemsParaModificarCarrito
	let itemThumbnail = item.thumbnail
	// let min = 0
	// let max = item.sold_quantity

	return (
		<div className={'item'}>>
			<div>{itemTitle}</div>
			<img width={'100'} src={itemThumbnail} alt={itemTitle} />
		</div>
	)
}
export default Item
