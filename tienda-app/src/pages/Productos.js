import React from 'react'
import List from '../components/List/List'
import Loading from '../components/Loading'
import useProductList from '../components/useProductList'
import { useParams, useHistory } from 'react-router-dom'

function Productos() {
	let { categoryId } = useParams()
	const [state, items, error] = useProductList(categoryId)
	let history = useHistory()

	function onCategoryChange(event) {
		let categoryId = event.target.value
		if (categoryId === 'todos') {
			history.push('/productos')
		} else {
			history.push('/categorias/' + categoryId)
		}
	}

	switch (state) {
		case 'loading':
		case 'idle':
			return <Loading />

		case 'success':
			return (
				<div>
					<h2>Productos</h2>
					<label>
						Categorias
						<select value={categoryId} onChange={onCategoryChange}>
							<option value="todos">Todos</option>
							<option value="soldadoras">Soldadoras</option>
							<option value="mascaras">Mascaras</option>
						</select>
					</label>
					<List items={items} />
				</div>
			)

		case 'error':
			return <div>{error}</div>
		default:
			return null
	}
}
export default Productos
