import React from 'react'

function List({ productsList }) {
	//let listOfProducts = productsList.map((product) => <li>{product.name}</li>)
	console.log(productsList)
	let list
	function createListOfProducts(arr) {
		list = arr.map((product) => (
			<li key={product.id}>
				{'Producto: ' + product.name + ' ' + product.brand}
			</li>
		))

		return list
	}
	return (
		<ul style={{ listStyleType: 'none' }}>
			{productsList ? createListOfProducts(productsList) : ''}
		</ul>
	)
}
export default List
