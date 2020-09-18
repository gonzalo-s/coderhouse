import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/Navbar.js'

function App() {
	const [totalItemsCarrito, setTotalItemsCarrito] = useState(0)
	const [data, setData] = useState([])

	function setNewData(newData) {
		setData(newData)
	}
	console.log('App.js data: ' + data)

	function setNewTotalItems(cantidadItems) {
		setTotalItemsCarrito((total) => total + cantidadItems)
	}
	function clearTotalItemsCarrito() {
		setTotalItemsCarrito(0)
	}
	console.log('totalItemsCarrito: ' + totalItemsCarrito)

	return (
		<div>
			<NavBar
				totalItemsCarrito={totalItemsCarrito}
				setItemsParaModificarCarrito={setNewTotalItems}
				clearTotalItemsCarrito={clearTotalItemsCarrito}
				setData={setNewData}
				data={data}
			/>
		</div>
	)
}

export default App
