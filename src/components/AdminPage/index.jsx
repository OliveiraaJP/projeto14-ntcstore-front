import { $SignIn } from '../SignIn/style';
import axios from 'axios';
import { useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { UserContext } from '../../contexts/UserContext';
import logo from '../../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
import { $Logout } from './style';
import deslogar from '../../assets/deslogar-black.svg';

export const AdminPage = () => {

	const [jersey, setJersey] = useState({
		name: '',
		img: '',
		price: '',
		type: 'nacional'
	});

	const [disable, setDisable] = useState(false);
	const { user, setUser } = useContext(UserContext);
	const URL = 'http://localhost:5000/jerseys';

	const config = {
		headers: {
			'Authorization': `Bearer ${user.tokenAdmin}`
		}
	};

	function postJersey(e) {
		e.preventDefault();
		setDisable(true);

		const promise = axios.post(URL, { ...jersey, price: Number(jersey.price) }, config);
		promise.then(() => {
			alert('Camisa adicionada com sucesso!');
			setDisable(false);
			setJersey({ ...jersey, name: '', img: '', price: '', type: '' });
		});
		promise.catch(err => {
			setDisable(false);
			if (err.response.status === 422) {
				return alert('Preencha os dados corretamente.');
			}
			if (err.response.status === 401) {
				alert('Sem autorização.');
				localStorage.removeItem('tokenAdmin');
				setUser({ ...user, tokenAdmin: '' });
				return navigate('/admin');
			}
			alert('Erro ao postar camisa');
		});
	}

	const navigate = useNavigate();
	function logOut() {
		const confirmation = confirm('Deseja realmente fazer log-out?');
		if (confirmation) {
			const promise = axios.delete('http://localhost:5000/admin-session', config);
			promise.then(() => {
				localStorage.removeItem('tokenAdmin');
				setUser({ ...user, tokenAdmin: '' });
				navigate('/');
			});
			promise.catch(() => alert('Erro ao fazer log-out'));
		}
	}

	return (
		<$SignIn>
			<img src={logo} alt='logo' />
			<$Logout>
				<img src={deslogar} alt="deslogar" onClick={logOut} />
			</$Logout>
			<form onSubmit={postJersey}>
				<input
					type="text"
					name="name"
					id="name"
					required
					placeholder="Nome do time"
					onChange={e => setJersey({ ...jersey, name: e.target.value })}
					value={jersey.name}
					disabled={disable}
				/>
				<input
					type="url"
					name="img"
					id="img"
					required
					placeholder="Url da imagem"
					onChange={e => setJersey({ ...jersey, img: e.target.value })}
					value={jersey.img}
					disabled={disable}
				/>
				<input
					type="number"
					name="price"
					id="price"
					required
					placeholder="Preço"
					onChange={e => setJersey({ ...jersey, price: e.target.value })}
					value={jersey.price}
					disabled={disable}
					min="0"
					step="0.01"
				/>
				<select
					name="type"
					id="type"
					required
					onChange={e => setJersey({ ...jersey, type: e.target.value })}
					value={jersey.type}
					disabled={disable}
				>
					<option value='nacional'>Nacional</option>
					<option value='internacional'>Internacional</option>
				</select>
				<button type="submit" disabled={disable}>
					{disable ? <ThreeDots color="#FFFFFF" height='46' width='46' ariaLabel='loading' /> : 'Adicionar Camisa'}
				</button>
			</form>
		</$SignIn>
	);
};