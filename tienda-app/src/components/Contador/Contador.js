import React from 'react'
import Button from './Button.js'
import Display from './Display.js'
import './Contador.css'

function Contador({ sumar, restar, counter }) {
	return (
		<div className={'contadorWrapper'}>
			<div className={'botonera'}>
				<Button className={'restarBtn'} sign={'-'} onClick={restar} />
				<Display className={'display'} contador={counter} />
				<Button className={'sumarBtn'} sign={'+'} onClick={sumar} />
			</div>
		</div>
	)
}

export default Contador
