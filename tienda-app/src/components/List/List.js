import React from 'react'
import ItemDetailContainer from '../Item/ItemDetailContainer.js'

function List({ data }) {
	console.log(data.data)

	return (
		<div className={'itemContainer'}>
			{data
				.filter((item, i) => {
					if (i < 4) {
						return item
					}
				})
				.map((item, i) => {
					return <ItemDetailContainer key={i} item={item} />
				})}
		</div>
	)
}

export default List
