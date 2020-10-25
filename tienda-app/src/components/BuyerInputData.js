import React, { useContext, useState } from 'react'
import { CartContext } from '../components/Context/CartContext'

function BuyerInputData() {
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [mail, setMail] = useState('')
	const [checkMail, setCheckMail] = useState('')

	const { setUser } = useContext(CartContext)

	function handleSubmit(e) {
		e.preventDefault()
		console.log(name)
		setUser({
			name: name,
			lastName: lastName,
			mail: mail,
		})
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Nombre:
				<input
					type="text"
					name="name"
					value={name}
					onChange={(event) => {
						setName(event.target.value)
					}}
					required
				/>
			</label>
			<label>
				Apellido:
				<input
					type="text"
					name="lastName"
					value={lastName}
					onChange={(event) => {
						setLastName(event.target.value)
					}}
					required
				/>
			</label>
			<label>
				Mail:
				<input
					type="email"
					name="mail"
					value={mail}
					onChange={(event) => {
						setMail(event.target.value)
					}}
					required
				/>
			</label>
			<label>
				Mail:
				<input
					type="email"
					name="checkMail"
					value={checkMail}
					onChange={(event) => {
						setCheckMail(event.target.value)
					}}
					required
				/>
			</label>
			<input
				type="submit"
				value={'Confirmar Datos'}
				disabled={mail !== checkMail}
			/>
		</form>
	)
}
export default BuyerInputData
