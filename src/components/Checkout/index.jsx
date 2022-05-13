import { $Checkout, $EmptyCart } from './styles';
import { useState } from 'react';


export const Checkout = () => {

	const [cart] = useState([]);

	return(
		<$Checkout>
			<header><span>X</span><p>Carrinho de Compras</p></header>
			{cart.length===0 && (
				<$EmptyCart><p> O carrinho de comprsa está vazio.</p></$EmptyCart>
			)}
		</$Checkout>
	);
};