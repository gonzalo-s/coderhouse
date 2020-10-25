import { useState, useEffect } from 'react'
import { getFirestore } from '../firebase'

export default function useProductList(categoryId = null) {
	// state = (idle|loading|success|error)
	const [state, setState] = useState('idle')
	const [error, setError] = useState('')
	const [items, setItems] = useState([])

	useEffect(() => {
		//usando firebase
		setState('loading')
		const db = getFirestore()

		let itemCollection = db.collection('items')
		if (categoryId) {
			itemCollection = itemCollection.where(
				'categoryId',
				'==',
				categoryId
			)
		}

		itemCollection
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.size === 0) {
					setState('error')
					setError('Error, productos no encontrados')
					setItems([])
					return
				}
				setItems(
					querySnapshot.docs.map((doc) => {
						return {
							id: doc.id,
							...doc.data(),
						}
					})
				)
				setState('success')
			})
			.catch((error) => {
				setState('error')
				setError('Error, productos no encontrados')
				console.log('hubo un error: ', error)
			})
	}, [categoryId])

	return [state, items, error]
}
