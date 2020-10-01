import React, { useState, createContext } from 'react'

export const CartContext = createContext([])

export function CartProvider({ children }) {
	const [carrito, setCarrito] = useState([])
	console.log(carrito)

	function clearCarrito() {
		setCarrito([])
	}
	return (
		<CartContext.Provider
			value={{
				carrito,
				setCarrito,
				clearCarrito,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
