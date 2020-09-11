import React, { useState } from 'react'
import Button from './Button.js'
import Display from './Display.js'

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
		<div>
			<Button sign={'-'} onClick={restar} />
			<Display contador={counter} />
			<Button sign={'+'} onClick={sumar} />
			<Button sign={'Agregar al Carrito'} onClick={handleClick} />
		</div>
	)
}

export default Contador
