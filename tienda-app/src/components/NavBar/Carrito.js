import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import { NavLink } from 'react-router-dom'
import '../Item/Item.css'
import * as firebase from 'firebase/app'
import { getFirestore } from '../../firebase'
import 'firebase/firestore'
import Order from '../Order'
import BuyerInputData from '../BuyerInputData'

function Carrito() {
	const [orderId, setOrderId] = useState('')
	const { carrito, sumItems, totalValue, clearCarrito, user } = useContext(
		CartContext
	)

	const db = getFirestore()
	const orders = db.collection('orders')
	const newOrder = {
		buyer: user,
		items: carrito,
		date: firebase.firestore.Timestamp.fromDate(new Date()),
		total: totalValue,
		buyer: user,
	}
	function addNewOrder() {
		orders
			.add(newOrder)
			.then(({ id }) => {
				setOrderId(id) //success
			})
			.catch((err) => {
				console.log(err) //error
			})
			.finally(() => {
				clearCarrito()
				//sustituir batch el stock de los productos comprados
				console.log('order agregada')
			})
	}

	// function getOrderById(irdId) {
	// 	const db = getFirestore()
	// 	const itemCollection = db.collection('orders')

	// 	itemCollection.get()

	// }

	useEffect(() => {
		async function asyncCall() {
			if (orderId !== '') {
				//hacer batch update stock
				const itemsToUpdate = db.collection('items').where(
					firebase.firestore.FieldPath.documentId(),
					'in',
					carrito.map((i) => i.item.id)
				)

				const query = await itemsToUpdate.get()
				const batch = db.batch()

				function findCarritoItemById(dbId) {
					let itemFound = carrito.find((i) => i.item.id === dbId)
					return itemFound
				}

				console.log(findCarritoItemById('5zsuob97hvooYrdSpTCc'))

				query.docs.forEach((docs, idx) => {
					console.log(docs.data())
					let soldQty = findCarritoItemById(docs.id).cantidad
					if (docs.data().stock >= soldQty) {
						batch.update(docs.ref, {
							stock: docs.data().stock - soldQty,
						})
					}
				})

				await batch.commit()
			}
		}
		asyncCall()
	}, [orderId, db])

	//console.log(carrito)
	if (orderId !== '') {
		return <Order orderId={orderId} />
	} else if (sumItems > 0) {
		return (
			<div>
				<div className={'carritoItemsWrapper'}>
					{carrito.map((item, i) => {
						return (
							<div key={i} className={'carritoItems'}>
								<div className={'itemTitle'}>
									{' '}
									{item.item.title}
								</div>
								<img
									width={'50'}
									src={item.item.imageId}
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
				{user === '' ? (
					<BuyerInputData />
				) : (
					<div>
						<div>Nombre: {user.name}</div>
						<div>Apellido: {user.lastName}</div>
						<div>Email: {user.mail}</div>

						<button onClick={addNewOrder}>CONFIRMAR COMPRA</button>
					</div>
				)}
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
