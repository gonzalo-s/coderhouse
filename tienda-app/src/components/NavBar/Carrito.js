import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { NavLink } from 'react-router-dom'
import '../Item/Item.css'
import * as firebase from 'firebase/app'
import { getFirestore } from '../../firebase'
import 'firebase/firestore'

function Carrito() {
	const carritoContext = useContext(CartContext)
	const carrito = carritoContext.carrito
	const sumItems = carritoContext.sumItems
	const totalValue = carritoContext.totalValue
	const clearCarrito = carritoContext.clearCarrito
	const user = carritoContext.user
	const db = getFirestore()
	const orders = db.collection('orders')
	const newOrder = {
		buyer: user.name,
		items: carrito,
		date: firebase.firestore.Timestamp.fromDate(new Date()),
		total: totalValue,
	}
	function addNewOrder() {
		orders
			.add(newOrder)
			.then(({ id }) => {
				console.log(id)
				//setOrderId(id) //success
			})
			.catch((err) => {
				console.log(err) //error
			})
			.finally(() => {
				console.log('nueva orden agregada')
			})
	}
	console.log(carrito)

	if (sumItems > 0) {
		return (
			<div>
				<div className={'carritoItemsWrapper'}>
					{carrito.map((item, i) => {
						return (
							<div key={i} className={'carritoItems'}>
								<div> {item.item.title}</div>
								<img
									width={'50'}
									src={item.item.thumbnail}
									alt={item.item.title}
								/>
								<div>cantidad: {item.cantidad}</div>
								<div>subtotal: {item.subTotal}</div>
							</div>
						)
					})}
					<div>Total:{totalValue}</div>
				</div>
				Pagina Carrito
				<div>Productos en el Carrito: {sumItems}</div>
				<button onClick={clearCarrito}>Borrar Productos</button>
				<button onClick={addNewOrder}>CONFIRMAR COMPRA</button>
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
