import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { getFirestore } from '../firebase'

function Order({ orderId }) {
	const [dbOrders, setDbOrders] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const db = getFirestore()
			const data = await db.collection('orders').get()
			setDbOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
		}
		fetchData()
	}, [])
	const order = dbOrders.find((ord) => {
		return ord.id === orderId
	})
	if (order === undefined) {
		return <Loading />
	} else {
		// console.log(dbOrders)
		// console.log(orderId)
		// console.log(order)
		return (
			<div>
				<div className={'buyerDetail'}>
					<div>
						Comprador: {order.buyer.name} {order.buyer.lastName}
					</div>
					<div>Mail: {order.buyer.mail}</div>
					<div>ORDEN DE COMPRA: {order.id}</div>
				</div>
				<div className={'orderItemsWrapper'}>
					{order.items.map((item, i) => {
						return (
							<div key={i} className={'orderItems'}>
								<div className={'itemTitle'}>
									{' '}
									{item.item.title}
								</div>
								<div>cantidad: {item.cantidad}</div>
								<div>subtotal: {item.subTotal}</div>
							</div>
						)
					})}
					<div className={'orderTotal'}>Total: {order.total}</div>
				</div>
			</div>
		)
	}
}
export default Order
