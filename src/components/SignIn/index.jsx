import { $SignIn } from './style';
import axios from 'axios';
import { useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import logo from '../../assets/logo.jpg';
import { Input } from '../Input';
import house from '../../assets/house.svg';

export const SignIn = () => {

	const navigate = useNavigate();
	const URL = `${process.env.REACT_APP_API_URI}/sign-in`;

	const [userLogin, setUserLogin] = useState({
		email: '',
		password: ''
	});
	const [disable, setDisable] = useState(false);

	const { user, setUser } = useContext(UserContext);

	function Enter(e) {
		e.preventDefault();
		setDisable(true);

		const promise = axios.post(URL, userLogin);
		promise.then((res) => {
			const { data } = res;
			const { name, email, token } = data;
			setUser({ ...user, name, email, token });

			const userSerialized = JSON.stringify({ name, email, token });
			localStorage.setItem('user', userSerialized);

			navigate('/homepage');
		});
		promise.catch(err => {
			setDisable(false);
			if (err.response.status === 404) {
				return alert('Usuário não encontrado');
			}
			if (err.response.status === 401) {
				return alert('Senha Incorreta!');
			}
			if (err.response.status === 422) {
				return alert('Preencha os dados corretamente.');
			}
			alert('Erro ao fazer Login');
		});
	}

	return (
		<$SignIn>
			<Link to='/'>
				<img src={house} alt='home' />
			</Link>
			<img src={logo} alt='logo' />
			<form onSubmit={Enter}>
				<Input
					type="email"
					name="email"
					id="email"
					required
					placeholder="E-mail"
					onChange={e => setUserLogin({ ...userLogin, email: e.target.value })}
					value={userLogin.email}
					disabled={disable}
					message="Email inválido"
				/>
				<Input
					type="password"
					name="password"
					id="password"
					required
					placeholder="Senha"
					onChange={e => setUserLogin({ ...userLogin, password: e.target.value })}
					value={userLogin.password}
					disabled={disable}
					minLength="3"
					pattern="^[a-zA-Z0-9]{3,}$"
					message="Apenas letras e números. Tamanho mínimo de 3 caracteres."
				/>
				<button type="submit" disabled={disable}>
					{disable ? <ThreeDots color="#FFFFFF" height='46' width='46' ariaLabel='loading' /> : 'Entrar'}
				</button>
			</form>
			<Link to='/signup'>
				<span>Primeira vez? Cadastre-se!</span>
			</Link>
			<Link to='/admin'>
				<p>Clique aqui para adicionar camisa! <br /> (Apenas para admin)</p>
			</Link>
		</$SignIn>
	);
};