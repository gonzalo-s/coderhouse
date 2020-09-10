import React, { useState, useEffect } from 'react'
import Button from './Button.js'
import Display from './Display.js'

function Contador({ itemToAdd }) {
	const [state, setState] = useState({
		counter: 0,
		min: 0,
		max: 10,
	})
	useEffect(() => {
		setState({
			...state,
			counter: state.counter + itemToAdd,
		})
	}, [])

	console.log('itemToAdd: ' + itemToAdd)
	console.log('counter: ' + state.counter)

	function sumar() {
		if (state.counter < state.max) {
			setState({
				...state,
				counter: state.counter + 1,
			})
		}
	}
	function restar() {
		if (state.counter > state.min) {
			setState({
				...state,
				counter: state.counter - 1,
			})
		}
	}

	return (
		<div>
			<Button sign={'-'} onClick={restar} />
			<Display contador={state.counter} />
			<Button sign={'+'} onClick={sumar} />
		</div>
	)
}

export default Contador
