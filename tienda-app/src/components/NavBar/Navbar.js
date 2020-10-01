import React, { useState } from 'react'
import './navBar.css'
import { NavLink } from 'react-router-dom'
import Icono from './IconoCarrito'
import Inicio from './Inicio'
import Nosotros from './Nosotros'
import Productos from './Productos'
import Contacto from './Contacto'
import Carrito from './Carrito'
import Buscar from './Buscar.js'
import Item from '../Item/Item.js'
//import { CartProvider } from '../Context/CartContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// VER https://reactrouter.com/web/guides/quick-start
function NavBar({ setData, data }) {
	const [menuState, setMenuState] = useState(true)

	return (
		<Router>
			<div className="App">
				<nav>
					{menuState ? (
						<div
							id="xBtn"
							className="xMenu"
							onClick={() => setMenuState(!menuState)}
						>
							X
						</div>
					) : (
						<div
							className="hamburguer"
							onClick={() => setMenuState(!menuState)}
						>
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</div>
					)}

					{menuState ? (
						<ul className="navList">
							<NavLink className="list-link" to="/">
								<li>Inicio</li>
							</NavLink>
							<NavLink className="list-link" to="/nosotros">
								<li>Nosotros</li>
							</NavLink>
							<NavLink className="list-link" to="/productos">
								<li>Productos</li>
							</NavLink>
							<NavLink className="list-link" to="/contacto">
								<li>Contacto</li>
							</NavLink>
							<NavLink className="list-link" to="/carrito">
								<li>
									<Icono />
								</li>
							</NavLink>
							<NavLink className="list-link" to="/buscar">
								<li>Buscar</li>
							</NavLink>
						</ul>
					) : null}
				</nav>
				<Switch>
					<Route path="/" exact component={Inicio} />
					<Route path="/nosotros" component={Nosotros} />
					<Route path="/productos" exact>
						<Productos setData={setData} data={data} />
					</Route>
					<Route path="/productos/:id" component={Item} />
					<Route path="/contacto" component={Contacto} />
					<Route path="/carrito" component={Carrito} />
					<Route path="/buscar" component={Buscar} />
				</Switch>
			</div>
		</Router>
	)
}

export default NavBar
