import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/Navbar.js'

function App() {
	const [totalItems, setTotalItems] = useState(0)

	console.log('totalItems: ' + totalItems)

	function setItemsParaAgregar(cantidad) {
		setTotalItems(totalItems + cantidad)
	}
	console.log('totalItems: ' + totalItems)

	return (
		<div>
			<NavBar
				totalItems={totalItems}
				setItemsParaAgregar={setItemsParaAgregar}
			/>
		</div>
	)
}

export default App
