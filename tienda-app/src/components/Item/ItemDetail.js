import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Contador from '../Contador/Contador'
import Loading from '../Loading'

function ItemDetail({ data, setItemsParaModificarCarrito }) {
	const { id } = useParams()
	console.log('id in itemDetail: ' + id)
	console.log(data)
	const [selectedItem, setSelectedItem] = useState()
	let max //available_quantity siempre era 1 asi q uso sold_quantity para tener otros valores
	let min = 0

	useEffect(() => {
		setSelectedItem(
			data.filter((item) => {
				return item.id === id
			})
		)
	}, [data, id])

	console.log(selectedItem)

	// useEffect(() => {
	// 	console.log(data)
	// 	setItem(
	// 		data.filter((item) => {
	// 			return item.id === id
	// 		})
	// 	)

	// 	console.log(item)

	// }, [])

	function itemToAdd(cantidad) {
		setItemsParaModificarCarrito(cantidad)
	}

	if (selectedItem === undefined) {
		return <Loading />
	} else {
		max = selectedItem.sold_quantity
		return (
			<div className={'itemDetail'}>
				{selectedItem[0].id}
				<div className={'title'}>{selectedItem[0].title}</div>

				<img
					width={'100'}
					src={selectedItem[0].thumbnail}
					alt={selectedItem[0].title}
				/>

				{selectedItem[0].sold_quantity > 0 ? (
					<Contador max={max} min={min} itemToAdd={itemToAdd} />
				) : (
					'SIN STOCK'
				)}
			</div>
		)
	}
}
export default ItemDetail
