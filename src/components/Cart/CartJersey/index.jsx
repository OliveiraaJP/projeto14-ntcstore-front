/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { $Container, $Trashcan, $Span } from './styles';
import trashcan from '../../../assets/trashcan.svg';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserContext';
import { useContext } from 'react';

export const CartJersey = ({ img, name, price, callbackDelete }) => {

	const { user } = useContext(UserContext);

	const config = {
		headers: {
			Authorization: `Bearer ${user.token}`,
		},
	};

	return (
		<$Container>
			<img className="shirt" src={img} alt="" />
			<span>
				<h2>{name}</h2>
				<p>R$ {price.toFixed(2)}</p>
			</span>
			<$Span>
				<$Trashcan src={trashcan} alt="trascan" onClick={(name) => callbackDelete(name)} />
				<div>
					<p>-</p>
					<h3>1</h3>
					<p>+</p>
				</div>
			</$Span>
		</$Container>
	);
};
