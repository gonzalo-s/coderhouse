import React, { useEffect, useState } from 'react'
import List from '../List/List'
import Loading from '../Loading.js'
import { getFirestore } from '../../firebase'

function Productos({ setData, data }) {
	const [loadingState, setLoadingState] = useState(true)

	useEffect(() => {
		//usando firebase
		setLoadingState(true)
		const db = getFirestore()
		const itemCollection = db.collection('items')

		itemCollection
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.size === 0) {
					console.log('no results')
				}
				setData(
					querySnapshot.docs.map((doc) => {
						return {
							id: doc.id,
							...doc.data(),
						}
					})
				)
			})
			.catch((error) => {
				console.log('hubo un error: ', error)
			})
			.finally(() => {
				setLoadingState(false)
			})
	}, [])
	//prueba con onSnapshot para actualizar en tiempo real

	// itemCollection.onSnapshot((snapshot) => {
	// 	if (snapshot.size === 0) {
	// 		return console.log('no results')
	// 	} else if (snapshot === undefined || snapshot === null) {
	// 		return console.log('db return error')
	// 	} else {
	// 		setData(
	// 			snapshot.docs.map((doc) => {
	// 				return { id: doc.id, ...doc.data() }
	// 			})
	// 		)
	// 		setLoadingState(false)
	// 	}
	// })

	if (loadingState) {
		return <Loading />
	} else {
		return (
			<div>
				Pagina Productos
				<List data={data} />
			</div>
		)
	}
}
export default Productos
