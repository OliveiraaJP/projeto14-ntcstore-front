import { $SignUp } from './style';
import logo from '../../assets/logo.jpg';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Input } from '../Input';

export const SignUp = () => {

	const navigate = useNavigate();
	const URL = `${process.env.REACT_APP_API_URI}/signup`;

	const [userSignup, setUserSignup] = useState({
		email: '',
		name: '',
		password: '',
		confirmPassword: '',
	});
	const [disable, setDisable] = useState(false);

	async function createUser(event) {

		event.preventDefault();
		setDisable(true);
		try {
			// eslint-disable-next-line no-unused-vars
			const promise = axios.post(URL, userSignup);
			navigate('/signin');
		} catch (error) {
			console.log('erro front criar user', error);
		}
	}

	return (
		<$SignUp>
			<img src={logo} alt="logo" />
			<form onSubmit={createUser}>
				<Input
					type="text"
					name="name"
					id="name"
					required
					placeholder="Nome"
					onChange={(e) => setUserSignup({ ...userSignup, name: e.target.value })}
					value={userSignup.name}
					disabled={disable}
					message="Nome inválido"
				/>
				<Input
					type="email"
					name="email"
					id="email"
					required
					placeholder="E-mail"
					onChange={(e) => setUserSignup({ ...userSignup, email: e.target.value })}
					value={userSignup.email}
					disabled={disable}
					message="Email inválido"
				/>
				<Input
					type="password"
					name="password"
					id="password"
					required
					placeholder="Senha"
					onChange={(e) => setUserSignup({ ...userSignup, password: e.target.value })}
					value={userSignup.password}
					disabled={disable}
					minLength="3"
					pattern="^[a-zA-Z0-9]{3,}$"
					message="Apenas letras e números. Tamanho mínimo de 3 caracteres."
				/>
				<Input
					type="password"
					name="confirmPassword"
					id="confirmPassword"
					required
					placeholder="Confirme a senha"
					onChange={(e) => setUserSignup({ ...userSignup, confirmPassword: e.target.value })}
					value={userSignup.confirmPassword}
					disabled={disable}
					minLength="3"
					pattern={userSignup.password}
					message="Senha não equivalente."
				/>
				<button type="submit" disabled={disable}>
					{disable ? (
						<ThreeDots
							color="#FFFFFF"
							height="46"
							width="46"
							ariaLabel="loading"
						/>
					) : (
						'Cadastrar'
					)}
				</button>
			</form>
			<Link to="/signin">
				<span>Já possui conta? Faça o login!</span>
			</Link>
		</$SignUp>
	);
};
