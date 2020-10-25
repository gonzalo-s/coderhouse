import React from 'react'
import Button from './Button.js'
import Display from './Display.js'
import './Contador.css'

function Contador({ min = 1, max, value, onChange }) {
	function sumar() {
		if (value < max) {
			onChange(value + 1)
		}
	}

	function restar() {
		if (value > min) {
			onChange(value - 1)
		}
	}

	return (
		<div className={'contadorWrapper'}>
			<div className={'botonera'}>
				<Button className={'restarBtn'} sign={'-'} onClick={restar} />
				<Display className={'display'} contador={value} />
				<Button className={'sumarBtn'} sign={'+'} onClick={sumar} />
			</div>
		</div>
	)
}

export default Contador
