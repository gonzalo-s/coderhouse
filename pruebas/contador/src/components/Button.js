import React from 'react'

function Button({ onClick, sign }) {
	return <button onClick={onClick}>{sign}</button>
}

export default Button
