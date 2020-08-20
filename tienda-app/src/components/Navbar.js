import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'
// VER https://reactrouter.com/web/guides/quick-start
function NavBar() {
	let hamState = false

	function hamStateToggle() {
		hamState = !hamState
		console.log(hamState)

		let xBtnE = document.getElementById('xBtn')
		let lineBtnE = document.getElementsByClassName('line')

		if (xBtnE.className === 'xMenuOff') {
			xBtnE.className = 'xMenuOn'
			lineBtnE.className = 'lineOff'
		} else {
			xBtnE.className = 'xMenuOff'
			lineBtnE.className = 'lineOn'
		}
	}

	return (
		<nav>
			<div className="hamburguer" onClick={hamStateToggle}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
				<div id="xBtn" className="xMenuOff">
					X
				</div>
			</div>

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
					<li>Carrito</li>
				</Link>
				<Link className="list-link" to="/buscar">
					<li>Buscar</li>
				</Link>
			</ul>
		</nav>
	)
}

export default NavBar
