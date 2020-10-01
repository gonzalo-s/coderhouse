import React from 'react'
import './Item.css'
import ItemDetail from '../Item/ItemDetail'

function ItemDetailContainer({ item }) {
	console.log(item)

	return (
		<ItemDetail
			item={item}
			itemId={item.id}
			itemTitle={item.title}
			itemThumbnail={item.thumbnail}
			min={1}
			max={item.sold_quantity}
		/>
	)
}
export default ItemDetailContainer
