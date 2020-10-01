import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/Navbar.js'
import { CartProvider } from './components/Context/CartContext'

function App() {
	//const [totalItemsCarrito, setTotalItemsCarrito] = useState(0)
	const [data, setData] = useState([])

	function setNewData(newData) {
		setData(newData)
	}
	console.log('App.js data: ' + data)

	// function setNewTotalItems(cantidadItems) {
	// 	setTotalItemsCarrito((total) => total + cantidadItems)
	// }
	// function clearTotalItemsCarrito() {
	// 	setTotalItemsCarrito(0)
	// }
	//console.log('totalItemsCarrito: ' + totalItemsCarrito)

	return (
		<div>
			<CartProvider>
				<NavBar
					//totalItemsCarrito={totalItemsCarrito}
					setData={setNewData}
					data={data}
				/>
			</CartProvider>
		</div>
	)
}

export default App
