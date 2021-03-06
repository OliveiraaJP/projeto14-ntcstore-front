import { useContext, useEffect, useState } from 'react';
import { $Home, Loading } from './style';
import logo from '../../assets/logo.jpg';
import deslogar from '../../assets/deslogar.svg';
import car from '../../assets/car.svg';
import { Jersey } from './Jersey';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ThreeDots } from 'react-loader-spinner';

export const Home = () => {
	const [jerseys, setJerseys] = useState([]);

	const { user, setUser } = useContext(UserContext);
	const URL = `${process.env.REACT_APP_API_URI}/jerseys`;

	const config = {
		headers: {
			Authorization: `Bearer ${user.token}`,
		},
	};

	useEffect(() => {
		const promise = axios.get(URL, config);
		promise.then((res) => setJerseys(res.data));
		promise.catch((err) => {
			navigate('/');
			if (err.response.status === 401) {
				return Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Sem permissão faça login novamente',
				});
			}
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Erro ao pegar os itens',
			});
		});
	}, []);

	const navigate = useNavigate();
	function logOut() {
		const confirmation = confirm('Deseja realmente fazer log-out?');
		if (confirmation) {
			const promise = axios.delete(
				`${process.env.REACT_APP_API_URI}/session`, config);
			promise.then(() => {
				localStorage.removeItem('user');
				setUser({ ...user, name: '', token: '' });
				navigate('/');
			});
			promise.catch(() => alert('Erro ao fazer log-out'));
		}
	}

	if (jerseys.length === 0) {
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
		<$Home>
			<header>
				<img src={deslogar} alt="deslogar" onClick={logOut} />
				<img src={logo} alt="logo" />
				<Link to={'/cart'}>
					<img src={car} alt="car" />
				</Link>
			</header>
			<main>
				<h1>Bem vindo, {user.name}!</h1>
				<h2>Times Nacionais</h2>
				<article>
					{jerseys.map((jersey, i) => {
						if (jersey.type === 'nacional') {
							return (
								<Jersey
									key={i}
									name={jersey.name}
									img={jersey.img}
									price={jersey.price}
									id={jersey._id}
								/>
							);
						}
					})}
				</article>
				<h2>Times Internacionais</h2>
				<article>
					{jerseys.map((jersey, i) => {
						if (jersey.type === 'internacional') {
							return (
								<Jersey
									key={i}
									name={jersey.name}
									img={jersey.img}
									price={jersey.price}
									id={jersey._id}
								/>
							);
						}
					})}
				</article>
			</main>
		</$Home>
	);
};
