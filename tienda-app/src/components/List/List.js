import React, { useState, useEffect } from 'react'
import Products from './Products.js'
import Loading from '../Loading.js'

function List() {
	const [newList, setNewList] = useState([])
	const [loadingState, setLoadingState] = useState(true)
	useEffect(() => {
		Products().then((result) => {
			setLoadingState(false)
			setNewList(
				result.map((product) => (
					<li key={product.id}>
						{product.name + ' ' + product.brand}
					</li>
				))
			)
		})
	}, [newList])
	return (
		<div>
			{' '}
			{loadingState ? (
				<Loading />
			) : (
				<ul style={{ listStyleType: 'none' }}>{newList}</ul>
			)}
		</div>
	)
}

export default List
