import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Contador from '../Contador/Contador'
import Button from '../Contador/Button'
//import Loading from '../Loading'

function ItemDetail({
	item,
	itemId,
	itemTitle,
	itemThumbnail,
	setItemsParaModificarCarrito,
	min,
	max,
}) {
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
		console.log('counter clicked: ' + counter)
		setItemsParaModificarCarrito(counter)
		setCounter(0)
	}

	return (
		<div className={'item'}>
			<NavLink
				to={{
					pathname: `/productos/${itemId}`,
					state: { item: item },
				}}
			>
				<div>{itemTitle}</div>
				<img width={'100'} src={itemThumbnail} alt={itemTitle} />
			</NavLink>

			{max > 0 ? (
				<div>
					<Contador sumar={sumar} restar={restar} counter={counter} />
					<div className={'agregarBtn'}>
						<Button
							sign={'Comprar: ' + counter}
							onClick={handleClick}
						/>
					</div>
				</div>
			) : (
				'SIN STOCK'
			)}
		</div>
	)
}

export default ItemDetail

// let max = item.sold_quantity //available_quantity siempre era 1 asi q uso sold_quantity para tener otros valores
// let min = 0
// //{{pathname: `/itemdetail/${props.id}`, state: {test:'test'}}}
// return (
// 	<div className={'item'}>
// 		<NavLink
// 			to={{
// 				pathname: `/productos/${item.id}`,
// 				state: { item: item },
// 			}}
// 		>
// 			<div className={'title'}>{item.title}</div>
// 		</NavLink>
// 		<img width={'100'} src={item.thumbnail} alt={item.title} />

// 		{item.sold_quantity > 0 ? (
// 			<Contador
// 				max={max}
// 				min={min}
// 				setItemsParaModificarCarrito={setItemsParaModificarCarrito}
// 			/>
// 		) : (
// 			'SIN STOCK'
// 		)}
// 	</div>
// )
