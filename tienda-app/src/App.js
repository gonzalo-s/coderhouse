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

	//console.log('totalItemsCarrito: ' + totalItemsCarrito)

	function setItemsParaModificarCarrito(cantidad) {
		setTotalItemsCarrito(totalItemsCarrito + cantidad)
	}
	function clearTotalItemsCarrito() {
		setTotalItemsCarrito(0)
	}
	console.log('totalItemsCarrito: ' + totalItemsCarrito)

	return (
		<div>
			<NavBar
				totalItemsCarrito={totalItemsCarrito}
				setItemsParaModificarCarrito={setItemsParaModificarCarrito}
				clearTotalItemsCarrito={clearTotalItemsCarrito}
				setData={setNewData}
				data={data}
			/>
		</div>
	)
}

export default App
