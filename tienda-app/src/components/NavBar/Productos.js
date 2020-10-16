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
