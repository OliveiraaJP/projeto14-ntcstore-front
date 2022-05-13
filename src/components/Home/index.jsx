import { useContext, useEffect, useState } from 'react';
import { $Home } from './style';
import logo from '../../assets/logo.jpg';
import deslogar from '../../assets/deslogar.svg';
import car from '../../assets/car.svg';
import { Jersey } from './Jersey';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

	const [jerseys, setJerseys] = useState([]);

	const { user, setUser } = useContext(UserContext);
	const URL = 'http://localhost:5000/jerseys';

	const config = {
		headers: {
			'Authorization': `Bearer ${user.token}`
		}
	};

	useEffect(() => {
		const promise = axios.get(URL, config);
		promise.then(res => {
			console.log(res.data);
			setJerseys(res.data);
		});
		promise.catch((err) => {
			if (err.response.status === 401) {
				return alert('Sem permissão, faça login novamente');
			}
			alert('Erro ao pegar os itens');
		});
	}, []);

	const navigate = useNavigate();
	function logOut() {
		const confirmation = confirm('Deseja realmente fazer log-out?');
		if (confirmation) {
			const promise = axios.delete('http://localhost:5000/session', config);
			promise.then(() => {
				localStorage.clear();
				setUser({ ...user, name: '', token: '' });
				navigate('/');
			});
			promise.catch(() => alert('Erro ao fazer log-out'));
		}
	}

	return (
		<$Home>
			<header>
				<img src={deslogar} alt="deslogar" onClick={logOut} />
				<img src={logo} alt="logo" />
				<img src={car} alt="car" />
			</header>
			<main>
				<h1>Bem vindo, {user.name}!</h1>
				<h2>Camisas de time</h2>
				<div>
					{jerseys.map((jersey, i) => {
						return (
							<Jersey
								key={i}
								name={jersey.name}
								img={jersey.img}
								price={jersey.price}
							/>
						);
					})}
				</div>
			</main>
		</$Home>
	);
};