import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Contador from '../Contador/Contador'
import Button from '../Contador/Button'
import { CartContext } from '../Context/CartContext'

//import Loading from '../Loading'

function ItemDetail({ item, itemId, itemTitle, itemThumbnail, min, max }) {
	const carritoContext = useContext(CartContext)
	const setCarrito = carritoContext.setCarrito
	const carrito = carritoContext.carrito
	const [counter, setCounter] = useState(1)
	function sumar() {
		if (counter < max) {
			setCounter(counter + 1)
		}
	}

	function restar() {
		if (counter > min) {
			setCounter(counter - 1)
		}
	}

	function searchInCarrito(searchId) {
		const itemIndex = carrito.findIndex(
			(element) => element.item.id === searchId
		)
		console.log('itemIndex: ' + itemIndex)
		if (itemIndex >= 0) {
			console.log('item SI estaba en el carrito')
			const carritoCopy = JSON.parse(JSON.stringify(carrito))
			carritoCopy[itemIndex].cantidad =
				carritoCopy[itemIndex].cantidad + counter
			carritoCopy[itemIndex].subTotal =
				carritoCopy[itemIndex].item.price *
				carritoCopy[itemIndex].cantidad
			setCarrito(carritoCopy)
		} else {
			console.log('item NO estaba en el carrito')

			setCarrito((lastCarrito) => [
				...lastCarrito,
				{ cantidad: counter, item, subTotal: counter * item.price },
			])
		}
		console.log(carrito)
	}

	function handleClick() {
		setCounter(0)
		searchInCarrito(itemId)
	}

	return (
		<div className={'item'}>
			<NavLink
				to={{
					pathname: `/productos/${itemId}`,
					state: {
						item: item,
						min: min,
						max: max,
					},
				}}
			>
				<div>{itemTitle}</div>
				<img width={'100'} src={itemThumbnail} alt={itemTitle} />
				<div>Precio: {item.price}</div>
			</NavLink>

			{max > 0 ? (
				<div>
					<Contador sumar={sumar} restar={restar} counter={counter} />
					<div className={'agregarBtn'}>
						<Button
							sign={'Comprar: ' + counter}
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
