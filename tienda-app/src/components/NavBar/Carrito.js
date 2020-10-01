import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { NavLink } from 'react-router-dom'
import '../Item/Item.css'

function Carrito() {
	const carritoContext = useContext(CartContext)
	const carrito = carritoContext.carrito
	const sumItems = carritoContext.sumItems
	const clearCarrito = carritoContext.clearCarrito

	console.log(carrito)

	if (sumItems > 0) {
		return (
			<div>
				<div className={'carritoItemsWrapper'}>
					{carrito.map((item, i) => {
						console.log(item)
						return (
							<div key={i} className={'carritoItems'}>
								<div> {item.item.title}</div>
								<img
									width={'50'}
									src={item.item.thumbnail}
									alt={item.item.title}
								/>
								<div>cantidad: {item.cantidad}</div>
							</div>
						)
					})}
				</div>
				Pagina Carrito
				<div>Productos en el Carrito: {sumItems}</div>
				<button onClick={clearCarrito}>Borrar Productos</button>
			</div>
		)
	} else {
		return (
			<div>
				<div>Todavia no tenes ningun articulo en el carrito!!</div>
				<NavLink to="/productos">Mira nuestros Productos </NavLink>
			</div>
		)
	}
}
export default Carrito
