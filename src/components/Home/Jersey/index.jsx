/* eslint-disable react/prop-types */
import { $Jersey } from './style';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserContext.js';
import { useContext } from 'react';

export const Jersey = ({ name, img, price }) => {

	const { user } = useContext(UserContext);
	const config = {
		headers: {
			'Authorization': `Bearer ${user.token}`
		}
	};	

	async function addCart (name, img, price){
		const confirm = window.confirm('deseja adicionar ao carrinho?');
		if(!confirm) return;
		try {
			// eslint-disable-next-line no-unused-vars
			const promise = axios.post('http://localhost:5000/cart', {name, img, price}, config);
			console.log(promise);
			console.log('enviado cart');
		} catch (error) {
			console.log('erro front add card', error);
		}
	}

	return (
		<$Jersey onClick={() => addCart(name, img, price)}>
			<img src={img} alt="jersey" />
			<span>Camisa {name}</span>
			<span>R${Number(price).toFixed(2).replace('.', ',')}</span>
		</$Jersey>
	);
};