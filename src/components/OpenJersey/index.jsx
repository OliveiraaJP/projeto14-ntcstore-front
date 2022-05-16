/* eslint-disable no-unused-vars */
import { Link, useNavigate, useParams } from 'react-router-dom';
import { $OpenJersey } from './style';
import logo from '../../assets/logo.jpg';
import arrow from '../../assets/arrow.svg';
import car from '../../assets/car.svg';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';


export const OpenJersey = () => {

	
	const [jersey, setJersey] = useState({});
	const [size, setSize] = useState('P');
	const [disable, setDisable] = useState(false);

	const { name, img, price, type, _id } = jersey;
	const { id } = useParams();
	const { user } = useContext(UserContext);
	const navigate = useNavigate();
	//const URL = `https://naotemchuteira.herokuapp.com/jersey/${id}`;
	const URL = `${process.env.REACT_APP_API_URI}/jersey/${id}`;

	const config = {
		headers: {
			'Authorization': `Bearer ${user.token}`
		}
	};
	useEffect(() => {
		const promise = axios.get(URL, config);
		promise.then(res => {
			console.log(res.data);
			setJersey(res.data);
		});
		promise.catch((err) => {
			if (err.response.status === 401) {
				return alert('Sem permissão, faça login novamente');
			}
			alert('Erro ao pegar camisa');
		});
	}, []);

	async function addCart(name, img, price, size,) {
		const confirm = window.confirm('deseja adicionar ao carrinho?');
		if (!confirm) return;
		try {
			// eslint-disable-next-line no-unused-vars
			const promise = axios.post(`${process.env.REACT_APP_API_URI}/cart`
				/*'https://naotemchuteira.herokuapp.com/cart'*/, { name, img, price, size, }, config);
			console.log(promise);
			console.log('enviado cart');
			navigate('/homepage');
		} catch (error) {
			console.log('erro front add card', error);
		}
	}

	return (
		<$OpenJersey>
			<header>
				<img src={arrow} alt="seta" onClick={() => navigate(-1)} />
				<img src={logo} alt="logo" />
				<Link to={'/cart'}>
					<img src={car} alt="car" />
				</Link>
			</header>
			<article>
				<h2>Camisa {name}</h2>
				<img src={img} alt="jersey" />
				<div>
					<span><small>R${Number(price + 60).toFixed(2).replace('.', ',')}</small> R${Number(price).toFixed(2).replace('.', ',')}</span>
					<select
						name="size"
						id="size"
						required
						onChange={e => setSize(e.target.value)}
						value={size}
						disabled={disable}
					>
						<option value='P'>P</option>
						<option value='M'>M</option>
						<option value='G'>G</option>
						<option value='GG'>GG</option>
					</select>
				</div>
				<button onClick={() => addCart(name, img, price, size)} disabled={disable}>
					{disable ? <ThreeDots color="#FFFFFF" height='46' width='46' ariaLabel='loading' /> : 'Adicionar ao carrinho'}
				</button>
			</article>
		</$OpenJersey>
	);
};