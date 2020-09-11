import React, { useState } from 'react'
import Button from './Button.js'
import Display from './Display.js'
import './Contador.css'

function Contador({ itemToAdd, max, min }) {
	const [counter, setCounter] = useState(0)

	function sumar() {
		if (counter < max) {
			setCounter(counter + 1)
		}
	}

	function restar() {
		if (counter > min) {
			setCounter(counter - 1)
		}
	}
	function handleClick() {
		itemToAdd(counter)
	}

	return (
		<div className={'contadorWrapper'}>
			<div className={'botonera'}>
				<Button className={'restarBtn'} sign={'-'} onClick={restar} />
				<Display className={'display'} contador={counter} />
				<Button className={'sumarBtn'} sign={'+'} onClick={sumar} />
			</div>
			<div className={'agregarBtn'}>
				<Button sign={'Agregar al Carrito'} onClick={handleClick} />
			</div>
		</div>
	)
}

export default Contador
