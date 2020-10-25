import React, { useState } from 'react'
import './navBar.css'
import { NavLink } from 'react-router-dom'
import Icono from './IconoCarrito'

// VER https://reactrouter.com/web/guides/quick-start
function NavBar() {
	const [menuState, setMenuState] = useState(true)

	return (
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
					</ul>
				) : null}
			</nav>
		</div>
	)
}

export default NavBar
