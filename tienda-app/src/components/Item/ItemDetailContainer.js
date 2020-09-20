import React from 'react'
//import Contador from '../Contador/Contador.js'
//import { NavLink } from 'react-router-dom'
import './Item.css'
import ItemDetail from '../Item/ItemDetail'

function ItemDetailContainer({ item, setItemsParaModificarCarrito }) {
	console.log(item)

	return (
		<ItemDetail
			item={item}
			itemId={item.id}
			itemTitle={item.title}
			setItemsParaModificarCarrito={setItemsParaModificarCarrito}
			itemThumbnail={item.thumbnail}
			min={0}
			max={item.sold_quantity}
		/>
	)
}
export default ItemDetailContainer
