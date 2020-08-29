import React, { useState } from 'react'
import Button from './Button.js'
import Display from './Display.js'

function Contador() {
	const [counter, setCounter] = useState(0)

	function sumar() {
		setCounter((counter) => counter + 1)
	}
	function restar() {
		setCounter((counter) => counter - 1)
	}

	return (
		<div>
			<Button sign={'-'} onClick={restar} />
			<Display contador={counter} />
			<Button sign={'+'} onClick={sumar} />
		</div>
	)
}
export default Contador
