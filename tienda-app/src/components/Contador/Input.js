import React from 'react'

function Input({ onChange, val }) {
	return <input onChange={onChange} defaultValue={val}></input>
}

export default Input
