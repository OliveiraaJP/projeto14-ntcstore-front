import axios from 'axios';
import { useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import logo from '../../assets/logo.jpg';
import { $SignIn } from '../SignIn/style';

export const Admin = () => {
	const navigate = useNavigate();
	const URL = 'http://localhost:5000/admin';

	const [admin, setAdmin] = useState({
		email: '',
		password: ''
	});
	const [disable, setDisable] = useState(false);

	const { setUser } = useContext(UserContext);

	function Enter(e) {
		e.preventDefault();
		setDisable(true);

		const promise = axios.post(URL, admin);
		promise.then((res) => {
			const { data } = res;
			const { token } = data;
			setUser({ tokenAdmin: token });
			console.log(data);

			navigate('/admin-page');
		});
		promise.catch(err => {
			setDisable(false);
			if (err.response.status === 404) {
				return alert('Admin não encontrado');
			}
			if (err.response.status === 401) {
				return alert('Sem autorização!');
			}
			if (err.response.status === 422) {
				return alert('Preencha os dados corretamente.');
			}
			alert('Erro ao entrar como Admin.');
		});
	}

	return (
		<$SignIn>
			<img src={logo} alt='logo' />
			<form onSubmit={Enter}>
				<input
					type="email"
					name="email"
					id="email"
					required
					placeholder="E-mail Admin"
					onChange={e => setAdmin({ ...admin, email: e.target.value })}
					value={admin.email}
					disabled={disable}
				/>
				<input
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
					title="Apenas letras e números. Tamanho mínimo de 3 caracteres."
				/>
				<button type="submit" disabled={disable}>
					{disable ? <ThreeDots color="#FFFFFF" height='46' width='46' ariaLabel='loading' /> : 'Entrar'}
				</button>
			</form>
		</$SignIn>
	);
};