/* eslint-disable react/prop-types */
import { $Container, $Trashcan, $Span } from './styles';
import trashcan from '../../../assets/trashcan.svg';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserContext';
import { useContext } from 'react';

export const CartJersey = ({ img, name, price }) => {

	const { user } = useContext(UserContext);

	const config = {
		headers: {
			Authorization: `Bearer ${user.token}`,
		},
	};

	async function deleteJersey(){
		try {
			await axios.delete('/cart', config);
		} catch (error) {
			console.log(error);
		}
	}


	return (
		<$Container>
			<img className="shirt" src={img} alt="" />
			<span>
				<h2>{name}</h2>
				<p>R$ {price.toFixed(2)}</p>
			</span>
			<$Span>
				<$Trashcan src={trashcan} alt="trascan" onClick={deleteJersey} />
				<div>
					<p>-</p>
					<h3>1</h3>
					<p>+</p>
				</div>
			</$Span>
		</$Container>
	);
};
