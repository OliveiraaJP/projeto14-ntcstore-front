import { $Cart, $EmptyCart } from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Cart = () => {
	const navigate = useNavigate();

	const [cart] = useState([]);
	function backToMain() {
		navigate('/homepage');
	}

	return(
		<$Cart>
			<header>
				<span onClick={backToMain}>X</span><p>Carrinho de Compras</p></header>
			{cart.length===0 && (
				<$EmptyCart><p> O carrinho de comprsa está vazio.</p></$EmptyCart>
			)}
		</$Cart>
	);
};