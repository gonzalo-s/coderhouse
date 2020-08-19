import React from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Inicio from './components/Inicio'
import Nosotros from './components/Nosotros'
import Productos from './components/Productos'
import Contacto from './components/Contacto'
import Carrito from './components/Carrito'
import Buscar from './components/Buscar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Switch>
					<Route path="/" exact component={Inicio} />
					<Route path="/nosotros" component={Nosotros} />
					<Route path="/productos" component={Productos} />
					<Route path="/contacto" component={Contacto} />
					<Route path="/carrito" component={Carrito} />
					<Route path="/buscar" component={Buscar} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
