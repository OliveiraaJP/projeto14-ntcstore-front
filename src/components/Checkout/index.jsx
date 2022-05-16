import { $Container, $BuySafe, $Main } from './styles';
import logo from '../../assets/logo.jpg';
import padlock from '../../assets/padlock.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

export const Checkout = () => {
	const navigate = useLocation();
	const navigator = useNavigate();
	const { state } = navigate;
	const { user } = useContext(UserContext);

	const [userInfo, setUserInfo] = useState({
		name: '',
		lastName: '',
		tel: '',
		adress: '',
		numberAdress: '',
		adressComplement: '',
		parcel: 1,
		price: state,
		products: user.products,
	});
	console.log('state ' + state);
	console.log(user);

	const config = {
		headers: {
			Authorization: `Bearer ${user.token}`,
		},
	};

	async function confirmBuy(e) {
		e.preventDefault();
		emailjs.sendForm('service_ydj5hsv', 'template_u1zz9fo', e.target, 'gPm-5QrnsANGG8yJf')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		try {
			await setUserInfo({
				name: '',
				lastName: '',
				tel: '',
				adress: '',
				numberAdress: '',
				adressComplement: '',
				parcel: 1,
				price: state,
				products: user.products,
			});
			await axios.post(
				`${process.env.REACT_APP_API_URI}/checkout`,
				{ userInfo },
				config
			);
			Swal.fire({
				icon: 'success',
				title: 'Compra efetuada com sucesso!',
				showConfirmButton: false,
				timer: 2000,
			});

			localStorage.removeItem('products');
			navigator('/homepage');
		} catch (error) {
			console.log('confirm error', error);
		}
	}

	return (
		<$Container>
			<$BuySafe>
				<b>COMPRA SEGURA</b> <img src={padlock} alt="padlock" />{' '}
				<p>100% PROTEGIDO</p>
			</$BuySafe>
			<header>
				<img src={logo} alt="logo NTC" />
			</header>
			<$Main>
				<form onSubmit={confirmBuy}>
					<h1>
						Valor total: <span>R$ {state}</span>
					</h1>
					<h1>Dados do destinatário</h1>
					<input
						type="text"
						name="name"
						placeholder="Nome"
						value={userInfo.name}
						onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
						required
					/>
					<input
						type="text"
						name="sobrenome"
						placeholder="Sobrenome"
						value={userInfo.lastName}
						onChange={(e) =>
							setUserInfo({ ...userInfo, lastName: e.target.value })
						}
						required
					/>
					<input
						type="tel"
						name="telefone"
						placeholder="Telefone"
						minLength="11"
						maxLength="11"
						pattern="[0-9]{11}"
						value={userInfo.tel}
						onChange={(e) => setUserInfo({ ...userInfo, tel: e.target.value })}
						required
					/>

					<h1>Endereço do destinatário</h1>
					<input
						type="text"
						name="address"
						placeholder="Endereço"
						value={userInfo.adress}
						onChange={(e) =>
							setUserInfo({ ...userInfo, adress: e.target.value })
						}
						required
					/>
					<input
						type="number"
						name="numero"
						placeholder="Número"
						value={userInfo.numberAdress}
						onChange={(e) =>
							setUserInfo({ ...userInfo, numberAdress: e.target.value })
						}
						required
					/>
					<input
						type="text"
						name="complemento"
						placeholder="Complemento"
						value={userInfo.adressComplement}
						onChange={(e) =>
							setUserInfo({ ...userInfo, adressComplement: e.target.value })
						}
					/>

					<h1>Entrega</h1>
					<h2>FRETE GRÁTIS PARA TODO O BRASIL</h2>

					<h1>Forma de Pagamento</h1>

					<select
						name="parcel"
						id="parcel"
						onChange={(e) =>
							setUserInfo({ ...userInfo, parcel: e.target.value })
						}
						required
					>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((parcel, index) => (
							<option key={index} value={parcel}>
								{parcel}x de {(state / parcel).toFixed(2)}
							</option>
						))}
					</select>
					<button type="submit">Confirmar compra</button>
				</form>
			</$Main>
		</$Container>
	);
};
