import React from 'react'
//import Contador from '../Contador/Contador.js'
//import { NavLink } from 'react-router-dom'
import './Item.css'

function Item() {
	return <div>item page</div>
}
export default Item

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
