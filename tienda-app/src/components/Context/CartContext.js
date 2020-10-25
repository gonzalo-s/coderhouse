import React, { useState, createContext } from 'react'

export const CartContext = createContext([])

export function CartProvider({ children }) {
	const [carrito, setCarrito] = useState([])
	const [user, setUser] = useState('')
	console.log('user: ', user)
	const sumItems = carrito.reduce((a, { cantidad }) => a + cantidad, 0)
	const totalValue = carrito.reduce((a, { subTotal }) => a + subTotal, 0)

	function cantidadEnCarrito(searchId) {
		// busca items en el carrito y devuelve cantidad
		const itemIndex = carrito.findIndex(
			(element) => element.item.id === searchId
		)
		if (itemIndex >= 0) {
			//en el carrito hay por lo menos uno del mismo producto
			return carrito[itemIndex].cantidad
		}
		return 0
	}

	function addToCart(searchId, item, itemCounter) {
		//busca el index del item dentro del carrito
		const itemIndex = carrito.findIndex(
			(element) => element.item.id === searchId
		)
		console.log('itemIndex: ' + itemIndex)
		if (itemIndex >= 0) {
			//producto ya esta en el carrito => suma cantidad
			//console.log('item SI estaba en el carrito')
			const carritoCopy = JSON.parse(JSON.stringify(carrito))
			carritoCopy[itemIndex].cantidad =
				carritoCopy[itemIndex].cantidad + itemCounter
			carritoCopy[itemIndex].subTotal =
				carritoCopy[itemIndex].item.price *
				carritoCopy[itemIndex].cantidad
			setCarrito(carritoCopy)
		} else {
			//producto no esta en el carrito => agrega producto con su cantidad
			//console.log('item NO estaba en el carrito')
			//console.log('itemCounter dentro del else ' + itemCounter)
			setCarrito((lastCarrito) => [
				...lastCarrito,
				{
					cantidad: itemCounter,
					item,
					subTotal: itemCounter * item.price,
				},
			])
		}
		console.log(carrito)
	}

	function clearCarrito() {
		setCarrito([])
	}

	return (
		<CartContext.Provider
			value={{
				carrito,
				setCarrito,
				clearCarrito,
				sumItems,
				user,
				totalValue,
				addToCart,
				cantidadEnCarrito,
				setUser,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
