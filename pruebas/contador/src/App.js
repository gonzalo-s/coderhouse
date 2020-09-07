import React, { useState } from 'react'
import Contador from './components/Contador.js'
import List from './components/List.js'
import Loading from './components/Loading.js'

function App() {
	const [newList, setNewList] = useState([])
	const [loading, setLoading] = useState('true')

	function pedirLista() {
		let task = new Promise((resolve, reject) => {
			setTimeout(function () {
				let productsList = [
					{
						name: 'cerveza',
						brand: 'heineken',
						category: 'bebidas',
						quantity: 5,
						id: 1,
					},
					{
						name: 'agua',
						brand: 'h2o',
						category: 'bebidas',
						quantity: 3,
						id: 2,
					},
					{
						name: 'jugo',
						brand: 'baggio',
						category: 'bebidas',
						quantity: 12,
						id: 3,
					},
					{
						name: 'detergente',
						brand: 'magistral',
						category: 'limpieza',
						quantity: 50,
						id: 4,
					},
					{
						name: 'lavandina',
						brand: 'ala',
						category: 'limpieza',
						quantity: 7,
						id: 5,
					},
				]
				resolve(productsList)
			}, 3000)
		})

		task.then((lista) => {
			console.log(lista)
			setNewList(lista)
			setLoading(false)
			console.log(newList)
		})
	}
	return (
		<div>
			<Contador />
			<button onClick={pedirLista}>lista</button>
			{loading ? <Loading /> : <List productsList={newList} />}
		</div>
	)
}

export default App
