import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/Navbar.js'

function App() {
	const [totalItems, setTotalItems] = useState(0)

	console.log('totalItems: ' + totalItems)

	function setItemsParaModificar(cantidad) {
		setTotalItems(totalItems + cantidad)
	}
	function clearTotalItems() {
		setTotalItems(0)
	}
	console.log('totalItems: ' + totalItems)

	return (
		<div>
			<NavBar
				totalItems={totalItems}
				setItemsParaModificar={setItemsParaModificar}
				clearTotalItems={clearTotalItems}
			/>
		</div>
	)
}

export default App
