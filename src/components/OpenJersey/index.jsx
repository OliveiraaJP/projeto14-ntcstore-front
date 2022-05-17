import { useNavigate, useParams } from 'react-router-dom';
import { $OpenJersey } from './style';
import logo from '../../assets/logo.jpg';
import arrow from '../../assets/arrow.svg';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { Loading } from '../Home/style';
import Swal from 'sweetalert2';

export const OpenJersey = () => {

	const [jersey, setJersey] = useState({});
	const [size, setSize] = useState('P');
	const [disable, setDisable] = useState(false);

	const { name, img, price } = jersey;
	const { id } = useParams();
	const { user } = useContext(UserContext);
	const navigate = useNavigate();
	const URL = `${process.env.REACT_APP_API_URI}/jersey/${id}`;

	const config = {
		headers: {
			'Authorization': `Bearer ${user.token}`
		}
	};
	useEffect(() => {
		const promise = axios.get(URL);
		promise.then(res => setJersey(res.data));
		promise.catch(() => alert('Erro ao pegar camisa'));
	}, []);

	function addCart(name, img, price, size) {
		const confirmation = confirm('deseja adicionar ao carrinho?');
		if (!confirmation) {
			return '';
		}
		setDisable(true);
		const promise = axios.post(`${process.env.REACT_APP_API_URI}/cart`, { name, img, price, size }, config);
		promise.then(() => {
			setDisable(false);
			navigate('/homepage');
		});
		promise.catch((err) => {
			setDisable(false);
			if (err.response.status === 401) {
				return Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Faça login para poder adicionar ao carrinho!',
				});
			}
			alert('Erro ao enviar camisa pro carrinho');
		});
	}

	if (!jersey.name) {
		return (
			<Loading>
				<header>
					<img src={logo} alt="logo" />
				</header>
				<ThreeDots color="#000000" height='100' width='100' ariaLabel='loading' />
			</Loading>
		);
	}

	return (
		<$OpenJersey>
			<header>
				<img src={arrow} alt="seta" onClick={() => navigate(-1)} />
				<img src={logo} alt="logo" />
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