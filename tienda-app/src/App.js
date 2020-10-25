import React from 'react'
import './App.css'
import NavBar from './components/NavBar/Navbar.js'
import { CartProvider } from './components/Context/CartContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Carrito from './pages/Carrito'
import Producto from './pages/Producto'

function App() {
	return (
		<div>
			<Router>
				<CartProvider>
					<NavBar />
					<Switch>
						<Route path="/" exact component={Inicio} />
						<Route path="/nosotros" component={Nosotros} />
						<Route path="/productos" exact component={Productos} />
						<Route path="/productos/:id" component={Producto} />
						<Route
							path="/categorias/:categoryId"
							component={Productos}
						/>
						<Route path="/contacto" component={Contacto} />
						<Route path="/carrito" component={Carrito} />
					</Switch>
				</CartProvider>
			</Router>
		</div>
	)
}

export default App
