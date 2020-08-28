import React from 'react'

function Button(props) {
	return <button onClick={props.onClick}>{props.sign}</button>
}

export default Button
