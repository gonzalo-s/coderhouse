import React from 'react'
import ItemDetailContainer from '../Item/ItemDetailContainer.js'

function List({ items }) {
	return (
		<div className={'itemContainer'}>
			{items.slice(0, 4).map((item, i) => {
				return <ItemDetailContainer key={i} item={item} />
			})}
		</div>
	)
}

export default List
