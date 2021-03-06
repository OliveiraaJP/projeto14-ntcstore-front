import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { UserContext } from '../../contexts/UserContext';
import logo from '../../assets/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { $AdminPage, $Logout } from './style';
import deslogar from '../../assets/deslogar-black.svg';
import { Input } from '../Input';
import Swal from 'sweetalert2';
import house from '../../assets/house.svg';

export const AdminPage = () => {
	const [jersey, setJersey] = useState({
		name: '',
		img: '',
		price: '',
		type: 'nacional',
	});

	const [disable, setDisable] = useState(false);
	const { user, setUser } = useContext(UserContext);
	const URL = `${process.env.REACT_APP_API_URI}/jerseys`;

	const config = {
		headers: {
			Authorization: `Bearer ${user.tokenAdmin}`,
		},
	};

	function postJersey(e) {
		e.preventDefault();
		setDisable(true);

		const promise = axios.post(
			URL,
			{ ...jersey, price: Number(jersey.price) },
			config
		);
		promise.then(() => {
			Swal.fire({
				icon: 'success',
				title: 'Camisa adicionada com sucesso!',
				showConfirmButton: false,
				timer: 2000,
			});
			setDisable(false);
			setJersey({ ...jersey, name: '', img: '', price: '', type: 'nacional' });
		});
		promise.catch((err) => {
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
			const promise = axios.delete(
				`${process.env.REACT_APP_API_URI}/admin-session`, config);
			promise.then(() => {
				localStorage.removeItem('tokenAdmin');
				setUser({ ...user, tokenAdmin: '' });
				navigate('/admin');
			});
			promise.catch(() =>
				alert('Erro ao fazer logout')
			);
		}
	}

	useEffect(() => {
		if (!user.tokenAdmin) {
			alert('Faça login como admin para acessar essa página!');
			navigate('/admin');
		}
	}, []);

	return (
		<$AdminPage>
			<img src={logo} alt="logo" />
			<h2>Admin Page</h2>
			<$Logout>
				<img src={deslogar} alt="deslogar" onClick={logOut} />
			</$Logout>
			<Link to='/'>
				<img src={house} alt='home' />
			</Link>
			<form onSubmit={postJersey}>
				<Input
					type="text"
					name="name"
					id="name"
					required
					placeholder="Nome do time"
					onChange={(e) => setJersey({ ...jersey, name: e.target.value })}
					value={jersey.name}
					disabled={disable}
					message="Nome inválido"
				/>
				<Input
					type="url"
					name="img"
					id="img"
					required
					placeholder="Url da imagem"
					onChange={(e) => setJersey({ ...jersey, img: e.target.value })}
					value={jersey.img}
					disabled={disable}
					message="Url da imagem inválido"
				/>
				<Input
					type="number"
					name="price"
					id="price"
					required
					placeholder="Preço"
					onChange={(e) => setJersey({ ...jersey, price: e.target.value })}
					value={jersey.price}
					disabled={disable}
					min="0"
					step="0.01"
					message="Preço inválido"
				/>
				<select
					name="type"
					id="type"
					required
					onChange={(e) => setJersey({ ...jersey, type: e.target.value })}
					value={jersey.type}
					disabled={disable}
				>
					<option value="nacional">Nacional</option>
					<option value="internacional">Internacional</option>
				</select>
				<button type="submit" disabled={disable}>
					{disable ? (
						<ThreeDots
							color="#FFFFFF"
							height="46"
							width="46"
							ariaLabel="loading"
						/>
					) : (
						'Adicionar Camisa'
					)}
				</button>
			</form>
		</$AdminPage>
	);
};
