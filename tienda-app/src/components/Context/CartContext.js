import React, { useState, createContext } from 'react'

export const CartContext = createContext([])

export function CartProvider({ children }) {
	const [carrito, setCarrito] = useState([])
	let user = {
		name: 'ivan drago',
		phone: 1522311234,
		email: 'ivandrago@gmail.com',
	}

	console.log(carrito)

	const sumItems = carrito.reduce((a, { cantidad }) => a + cantidad, 0)
	const totalValue = carrito.reduce((a, { subTotal }) => a + subTotal, 0)

	console.log(sumItems)

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
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
