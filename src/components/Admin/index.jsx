import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import logo from '../../assets/logo.jpg';
import { $SignIn, AutoLogin } from '../SignIn/style';
import { Input } from '../Input';
import Swal from 'sweetalert2';

export const Admin = () => {
	
	const navigate = useNavigate();
	const URL = `${process.env.REACT_APP_API_URI}/admin`;
	//const URL = 'https://naotemchuteira.herokuapp.com/admin';

	const [admin, setAdmin] = useState({
		email: '',
		password: ''
	});
	const [disable, setDisable] = useState(false);

	const { user, setUser } = useContext(UserContext);

	function Enter(e) {
		e.preventDefault();
		setDisable(true);

		const promise = axios.post(URL, admin);
		promise.then((res) => {
			const { data } = res;
			const { token } = data;
			setUser({ tokenAdmin: token });
			console.log(data);

			localStorage.setItem('tokenAdmin', token);

			navigate('/admin-page');
		});
		promise.catch(err => {
			setDisable(false);
			if (err.response.status === 404) {
				return Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Admin nao encontrado!',
				});
			}
			if (err.response.status === 401) {
				return Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Sem autorização',
				});
			}
			if (err.response.status === 422) {
				return Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Preencha os dados corretamente',
				});
			}
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Erro ao entrar como admin',
			});
		});
	}

	const config = {
		headers: {
			'Authorization': `Bearer ${user.tokenAdmin}`
		}
	};
	useEffect(() => {
		if (user.tokenAdmin?.length !== 0) {
			const promise = axios.post(`${process.env.REACT_APP_API_URI}/auto-login-admin`
				/*'https://naotemchuteira.herokuapp.com/auto-login-admin'*/, {}, config);
			promise.then(() => {
				navigate('/admin-page');
			});
			promise.catch(() => alert('Erro ao fazer auto-login'));

			return (
				<AutoLogin>
					<h1>Logando...</h1>
					<ThreeDots color="#000000" height={80} width={80} />
				</AutoLogin>
			);
		}
	}, []);

	return (
		<$SignIn>
			<img src={logo} alt='logo' />
			<form onSubmit={Enter}>
				<Input
					type="email"
					name="email"
					id="email"
					required
					placeholder="E-mail Admin"
					onChange={e => setAdmin({ ...admin, email: e.target.value })}
					value={admin.email}
					disabled={disable}
					message="Email inválido"
				/>
				<Input 
					type="password"
					name="password"
					id="password"
					required
					placeholder="Senha Admin"
					onChange={e => setAdmin({ ...admin, password: e.target.value })}
					value={admin.password}
					disabled={disable}
					minLength="3"
					pattern="^[a-zA-Z0-9]{3,}$"
					message="Apenas letras e números. Tamanho mínimo de 3 caracteres."
				/>
				<button type="submit" disabled={disable}>
					{disable ? <ThreeDots color="#FFFFFF" height='46' width='46' ariaLabel='loading' /> : 'Entrar'}
				</button>
			</form>
			<Link to='/'>
				<span>Voltar para login!</span>
			</Link>
		</$SignIn>
	);
};