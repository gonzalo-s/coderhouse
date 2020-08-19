import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'
// VER https://reactrouter.com/web/guides/quick-start
function NavBar() {
	return (
		<nav>
			<Link to="/">
				<h3>Logo</h3>
			</Link>
			<ul className="navList">
				<Link to="/">
					<li>Inicio</li>
				</Link>
				<Link to="/nosotros">
					<li>Nosotros</li>
				</Link>
				<Link to="/productos">
					<li>Productos</li>
				</Link>
				<Link to="/contacto">
					<li>Contacto</li>
				</Link>
				<Link to="/carrito">
					<li>Carrito</li>
				</Link>
				<Link to="/buscar">
					<li>Buscar</li>
				</Link>
			</ul>
		</nav>
	)
}

export default NavBar
