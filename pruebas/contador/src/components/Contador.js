import React, { useState } from 'react'
import Button from './Button.js'
import Display from './Display.js'
import Input from './Input.js'

function Contador() {
	const [state, setState] = useState({
		counter: 0,
		min: 0,
		max: 10,
	})
	console.log(state)

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

	function handleOnChangeMin(e) {
		console.log('change')
		setState({
			...state,
			min: e.target.value,
		})
	}

	function handleOnChangeMax(e) {
		console.log('change')
		setState({
			...state,
			max: e.target.value,
		})
	}

	return (
		<div>
			<Button sign={'-'} onClick={restar} />
			<Display contador={state.counter} />
			<Button sign={'+'} onClick={sumar} />

			<div>
				Min: <Input onChange={handleOnChangeMin} val={state.min} />
			</div>
			<div>
				Max: <Input onChange={handleOnChangeMax} val={state.max} />
			</div>
		</div>
	)
}

export default Contador
