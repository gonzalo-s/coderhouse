import React, { useState, createContext } from 'react'

export const CartContext = createContext([])

export function CartProvider({ children }) {
	const [carrito, setCarrito] = useState([])
	console.log(carrito)

	const sumItems = carrito.reduce((a, { cantidad }) => a + cantidad, 0)
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
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
