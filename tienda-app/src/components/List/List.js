import React from 'react'
import ItemDetail from '../Item/ItemDetail.js'

function List({ items }) {
	return (
		<div className={'itemContainer'}>
			{items.map((item, i) => {
				return (
					<ItemDetail key={i} item={item} min={1} max={item.stock} />
				)
			})}
		</div>
	)
}

export default List
