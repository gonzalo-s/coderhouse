import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/Navbar.js'

function App() {
	const [cantidadItems, setCantidadItems] = useState(0)

	function setCantidadItemsParaAgregar(cantidad) {
		setCantidadItems(cantidad)
	}
	console.log('cantidadItems: ' + cantidadItems)

	return (
		<div>
			<NavBar
				itemToAdd={cantidadItems}
				setCantidadItemsParaAgregar={setCantidadItemsParaAgregar}
			/>
		</div>
	)
}

export default App
