import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Contador from '../Contador/Contador'
import Button from '../Contador/Button'
import { CartContext } from '../Context/CartContext'

function ItemDetail({ item }) {
	const { id, title, imageId, stock, price } = item
	const { addToCart, cantidadEnCarrito } = useContext(CartContext)

	const [itemCounter, setItemCounter] = useState(1)

	function handleClick() {
		setItemCounter(1)
		addToCart(item, itemCounter)
	}

	return (
		<div className={'itemDetail'}>
			<NavLink
				className={'itemInfoContainer'}
				to={{
					pathname: `/productos/${id}`,
				}}
			>
				<div className={'title'}>{title}</div>
				<img
					className={'imgBox'}
					width={'50%'}
					src={imageId}
					alt={title}
				/>
				<h6>Precio: {price}</h6>
			</NavLink>
			<div className={'stock'}>
				stock: {stock - cantidadEnCarrito(id)}
			</div>

			{stock > 0 ? (
				<div>
					<Contador
						max={stock}
						value={itemCounter}
						onChange={setItemCounter}
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
