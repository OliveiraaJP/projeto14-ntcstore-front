import { $Cart, $EmptyCart } from './styles';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import { CartJersey } from './CartJersey';
import { ThreeDots } from 'react-loader-spinner';

export const Cart = () => {
	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [reload, setReload] = useState(0);
	const [disable, setDisable] = useState(false);
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);

	const config = {
		headers: {
			Authorization: `Bearer ${user.token}`,
		},
	};

	useEffect(() => {
		let camisa = null;
		async function importJersey() {
			camisa = await axios.get(`${process.env.REACT_APP_API_URI}/cart`, config);
			setCart(camisa.data.cart);
			somaValores(camisa.data.cart);
		}
		importJersey();
	}, [reload]);

	async function somaValores(res) {
		let total = 0;

		res.map(x => total += x.price * x.qty);
		setTotalPrice(total.toFixed(2));
	}

	async function callbackDelete(id) {
		let confirm = window.confirm('Deseja excluir esse item do carrinho?');
		if (!confirm) return;
		try {
			await axios.post(`${process.env.REACT_APP_API_URI}/deletecart`, { id }, config);
			setReload(Math.random());
		} catch (error) {
			console.log(error);
		}
	}

	async function callbackPlus(id) {
		try {
			setDisable(true);
			const jersey = cart.find(el => el.id === id);
			await axios.post(`${process.env.REACT_APP_API_URI}/add`, { id: jersey.id, qty: jersey.qty }, config);
			setReload(Math.random());
			setDisable(false);
		} catch (error) {
			console.log(error);
			setDisable(false);
		}
	}

	async function callbackMinus(id) {
		try {
			setDisable(true);
			const jersey = cart.find(el => el.id === id);
			await axios.post(`${process.env.REACT_APP_API_URI}/remove`, { id: jersey.id, qty: jersey.qty }, config);

			setReload(Math.random());
			setDisable(false);
		} catch (error) {
			setDisable(false);
			console.log(error);
		}
	}

	function backToMain() {
		navigate('/homepage');
	}

	function goCheckout() {
		let camisas = [];

		cart.map(x => {
			const obj = { name: x.name, size: x.size, qty: x.qty };

			camisas.push(obj);
		});
		setUser({ ...user, products: camisas });

		const productsSerialized = JSON.stringify({ camisas });
		localStorage.setItem('products', productsSerialized);

		navigate('/checkout', {
			state: totalPrice,
		});
	}

	return (
		<$Cart>
			<header>
				<span onClick={backToMain}>X</span>
				<p>Carrinho de Compras</p>
			</header>
			{cart?.length === 0 && (
				<$EmptyCart>
					<p> O carrinho de compras est?? vazio.</p>
				</$EmptyCart>
			)}
			<main>
				{cart?.length !== 0 &&
					cart.map((jersey, i) => {
						return (
							<CartJersey
								key={i}
								id={jersey.id}
								img={jersey.img}
								name={jersey.name}
								price={jersey.price}
								size={jersey.size}
								qty={jersey.qty}
								callbackDelete={() => callbackDelete(jersey.id)}
								callbackPlus={() => callbackPlus(jersey.id)}
								callbackMinus={() => callbackMinus(jersey.id)}
								disable={disable}
							/>
						);
					})}
			</main>
			{cart?.length !== 0 && (
				<>
					<footer>
						<h1>Total:</h1>
						<span>
							<p>R$ {totalPrice}</p>
							<h2>
								Ou at?? <b>12x</b> de <b>{(totalPrice / 12).toFixed(2)} </b>{' '}
							</h2>
						</span>
					</footer>
					<button onClick={goCheckout} disabled={disable}>
						{disable ?
							<ThreeDots color="#FFFFFF" height='46' width='46' ariaLabel='loading' /> :
							'FINALIZAR COMPRA'
						}
					</button>
				</>
			)}
		</$Cart>
	);
};
