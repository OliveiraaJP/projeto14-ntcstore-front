import { $Cart, $EmptyCart } from './styles';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import { CartJersey } from './CartJersey';

export const Cart = () => {
	
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState (0);
	const [reload, setReload] = useState(0);
	console.log(cart);
	const navigate = useNavigate();
	const { user } = useContext(UserContext);

	const config = {
		headers: {
			Authorization: `Bearer ${user.token}`,
		},
	};

	useEffect(() => {
		let camisa = null;
		async function importJersey() {
			camisa = await axios.get('http://localhost:5000/cart', config);
			console.log(camisa);
			setCart(camisa.data.cart);
			somaValores(camisa.data.cart);
		}
		importJersey();
	}, [reload]);

	async function somaValores(res){
		console.log('res',res);
		let total = 0;
		res.map(x => total += x.price);
		setTotalPrice(total.toFixed(2));
	}

	async function callbackDelete(name){
		let confirm = window.confirm('Deseja excluir esse item do carrinho?');
		if(!confirm) return;
		try {
			await axios.post('http://localhost:5000/deletecart', {name} , config);
			setReload(Math.random());
		} catch (error) {
			console.log(error);
		}
	}

	function showcart(){
		console.log(cart);
	}

	function backToMain() {
		navigate('/homepage');
	}

	function goCheckout(){
		navigate('/checkout',{state: totalPrice} );
	}

	return (
		<$Cart>
			<header>
				<span onClick={backToMain}>X</span>
				<p>Carrinho de Compras</p>
			</header>
			{cart.length === 0 && (
				<$EmptyCart>
					<p onClick={showcart}> O carrinho de compras está vazio.</p>
				</$EmptyCart>
			)}
			<main>
				{cart.length !== 0 && (
					cart.map((jersey, i) => {
						return(
							<CartJersey 
								key={i}
								img={jersey.img}
								name={jersey.name}
								price={jersey.price}
								callbackDelete={() => callbackDelete(jersey.name)}/>
						);
					})
				)}
			</main>
			{cart.length !== 0 && (
				<>
					<footer>
						<h1>Total:</h1>
						<span>
							<p>R$ {totalPrice}</p>
							<h2>Ou até <b>12x</b> de <b>{(totalPrice/12).toFixed(2)} </b> </h2>
						</span>
					</footer>
					<button onClick={goCheckout}>FINALIZAR COMPRA</button>
				</>
			)}
		</$Cart>
	);
};
