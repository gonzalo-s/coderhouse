import React from 'react'
import './navBar.css'

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				MARCA
			</a>
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<a className="nav-link" href="">
						Inicio
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="">
						Nosotros
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="">
						Productos
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="">
						Contacto
					</a>
				</li>
			</ul>

			<a className="nav-link" href="">
				Carrito
			</a>

			<form>
				<input type="search" placeholder="Buscar"></input>
				<button type="submit">Buscar</button>
			</form>
		</nav>
	)
}

export default NavBar
