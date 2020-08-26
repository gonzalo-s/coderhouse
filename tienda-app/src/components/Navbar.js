import React, { useState } from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'
import Icono from './IconoCarrito'
// VER https://reactrouter.com/web/guides/quick-start
function NavBar() {
	const [menuState, setMenuState] = useState(true)

	return (
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
					<Link className="list-link" to="/">
						<li>Inicio</li>
					</Link>
					<Link className="list-link" to="/nosotros">
						<li>Nosotros</li>
					</Link>
					<Link className="list-link" to="/productos">
						<li>Productos</li>
					</Link>
					<Link className="list-link" to="/contacto">
						<li>Contacto</li>
					</Link>
					<Link className="list-link" to="/carrito">
						<li>
							<Icono />
						</li>
					</Link>
					<Link className="list-link" to="/buscar">
						<li>Buscar</li>
					</Link>
				</ul>
			) : null}
		</nav>
	)
}

export default NavBar
