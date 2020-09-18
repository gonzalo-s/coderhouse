import React from 'react'
import ItemDetailContainer from '../Item/ItemDetailContainer.js'

function List({ data, setItemsParaModificarCarrito }) {
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
					return (
						<ItemDetailContainer
							key={i}
							item={item}
							setItemsParaModificarCarrito={
								setItemsParaModificarCarrito
							}
						/>
					)
				})}
		</div>
	)
}

export default List
