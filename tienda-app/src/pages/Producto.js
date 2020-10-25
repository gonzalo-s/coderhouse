import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../components/Context/CartContext'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading.js'
import { getFirestore } from '../firebase'
import Contador from '../components/Contador/Contador'
import Button from '../components/Contador/Button'

function Producto() {
	// state = (idle|loading|error|show)
	const [state, setState] = useState('idle')
	const [itemCounter, setItemCounter] = useState(1)

	console.log(state)
	const [item, setItem] = useState([])
	const { addToCart, cantidadEnCarrito } = useContext(CartContext)
	// object deconstructing
	let { id } = useParams()
	useEffect(() => {
		setState('loading')
		const db = getFirestore()
		const itemCollection = db.collection('items')

		itemCollection
			.get()
			.then((itemsSnapshot) => {
				console.log('useEffect ' + id)
				if (itemsSnapshot.size === 0) {
					console.log('no results')
				}
				setItem(
					itemsSnapshot.docs
						.find((item) => {
							return item.id === id
						})
						.data()
				)
				setState('show')
			})
			.catch((error) => {
				console.log('hubo un error: ', error)
				setState('error')
			})
			.finally(() => {})
	}, [setState, setItem, id])

	if (state === 'loading') return <Loading />
	else if (state === 'error') return <div>Error, producto no encontrado</div>
	else if (state === 'show') console.log(item)

	let itemId = id
	const { stock, brand, description, title, imageId } = item

	let max = item.stock
	let min = 1
	//let brand = item.brand
	//let description = item.description

	//let itemTitle = item.title
	//let itemThumbnail = item.imageId

	function sumar() {
		if (itemCounter < max) {
			setItemCounter(itemCounter + 1)
		}
	}

	function restar() {
		if (itemCounter > min) {
			setItemCounter(itemCounter - 1)
		}
	}

	function handleBuyClick() {
		setItemCounter(1)
		addToCart(itemId, item, itemCounter)
	}

	return (
		<div className={'item'}>
			<div className={'title'}>{title}</div>
			<div>Marca: {brand}</div>
			<div>descripcion: {description}</div>
			<img width={'200px'} src={imageId} alt={title} />
			<div className={'stock'}>
				stock: {stock - cantidadEnCarrito(itemId)}
			</div>
			{max > 0 ? (
				<div>
					<Contador
						sumar={sumar}
						restar={restar}
						counter={itemCounter}
					/>
					<div className={'agregarBtn'}>
						<Button
							sign={'Comprar: ' + itemCounter}
							onClick={handleBuyClick}
						/>
					</div>
				</div>
			) : (
				'SIN STOCK'
			)}
		</div>
	)
}
export default Producto
