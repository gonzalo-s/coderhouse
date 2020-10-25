import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/Navbar.js'
import { CartProvider } from './components/Context/CartContext'

function App() {
	const [data, setData] = useState([])

	function setNewData(newData) {
		setData(newData)
	}
	console.log('App.js data: ', data)

	return (
		<div>
			<CartProvider>
				<NavBar setData={setNewData} data={data} />
			</CartProvider>
		</div>
	)
}

export default App
