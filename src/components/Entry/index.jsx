import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/logo.jpg';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ThreeDots } from 'react-loader-spinner';
import { Loading } from '../Home/style';
import { Jersey } from '../Home/Jersey';
import { $Entry } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { AutoLogin } from '../SignIn/style';

export const Entry = () => {
	const [jerseys, setJerseys] = useState([]);
	const navigate = useNavigate();

	const { user } = useContext(UserContext);
	const URL = `${process.env.REACT_APP_API_URI}/jerseys-homepage`;

	useEffect(() => {
		const promise = axios.get(URL);
		promise.then((res) => setJerseys(res.data));
		promise.catch(() => {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Erro ao pegar os itens',
			});
		});
	}, []);

	const config = {
		headers: {
			'Authorization': `Bearer ${user.token}`
		}
	};
	useEffect(() => {
		if (user.token?.length !== 0) {
			const promise = axios.post(`${process.env.REACT_APP_API_URI}/auto-login`, {}, config);
			promise.then(() => {
				navigate('/homepage');
			});
			promise.catch(() => console.log('Erro ao fazer o auto-login'));

			return (
				<AutoLogin>
					<h1>Logando...</h1>
					<ThreeDots color="#000000" height={80} width={80} />
				</AutoLogin>
			);
		}
	}, []);

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
		<$Entry>
			<header>
				<img src={logo} alt="logo" />
				<div>
					<Link to={'/signin'}>
						<span>Sign In</span>
					</Link>
					<Link to={'/signup'}>
						<button>Sign Up</button>
					</Link>
				</div>
			</header>
			<main>
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
		</$Entry>
	);
};