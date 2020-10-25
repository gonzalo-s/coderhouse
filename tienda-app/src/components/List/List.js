import React from 'react'
import ItemDetailContainer from '../Item/ItemDetailContainer.js'

function List({ data }) {
	return (
		<div className={'itemContainer'}>
			{data
				.filter((item, i) => {
					return i < 4
				})
				.map((item, i) => {
					return <ItemDetailContainer key={i} item={item} />
				})}
		</div>
	)
}

export default List
