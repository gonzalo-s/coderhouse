import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Contador from '../Contador/Contador'
import Button from '../Contador/Button'
import { CartContext } from '../Context/CartContext'

function ItemDetail({ item, itemId, itemTitle, itemThumbnail, min, max }) {
	const { addToCart, cantidadEnCarrito } = useContext(CartContext)

	const [itemCounter, setItemCounter] = useState(1)

	function sumar() {
		if (itemCounter < max) {
			setItemCounter(itemCounter + 1)
		}
	}

	function restar() {
		if (itemCounter > min) {
			setItemCounter(itemCounter - 1)
		}
	}

	function handleClick() {
		setItemCounter(1)
		addToCart(itemId, item, itemCounter)
	}

	return (
		<div className={'itemDetail'}>
			<NavLink
				className={'itemInfoContainer'}
				to={{
					pathname: `/productos/${itemId}`,
					state: {
						item: item,
						itemId: itemId,
						min: min,
						max: max,
					},
				}}
			>
				<div className={'title'}>{itemTitle}</div>
				<img
					className={'imgBox'}
					width={'50%'}
					src={itemThumbnail}
					alt={itemTitle}
				/>
				<h6>Precio: {item.price}</h6>
			</NavLink>
			<div className={'stock'}>
				stock: {item.stock - cantidadEnCarrito(itemId)}
			</div>

			{max > 0 ? (
				<div>
					<Contador
						sumar={sumar}
						restar={restar}
						counter={itemCounter}
					/>
					<div className={'agregarBtn'}>
						<Button
							sign={'Comprar: ' + itemCounter}
							onClick={handleClick}
						/>
					</div>
				</div>
			) : (
				'SIN STOCK'
			)}
		</div>
	)
}

export default ItemDetail
