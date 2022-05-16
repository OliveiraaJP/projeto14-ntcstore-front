/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { $Container, $Trashcan, $Span } from './styles';
import trashcan from '../../../assets/trashcan.svg';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserContext';
import { useContext } from 'react';

export const CartJersey = ({ img, name, price, size, qty, callbackDelete, callbackPlus, callbackMinus }) => {

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
				<h2>{name} {size}</h2>
				<p>R$ {price.toFixed(2)}</p>
			</span>
			<$Span>
				<$Trashcan src={trashcan} alt="trascan" onClick={(name) => callbackDelete(name)} />
				<div>
					<p onClick={(id) => callbackMinus(id)} >-</p>
					<h3>{qty}</h3>
					<p onClick={(id) => callbackPlus(id)} >+</p>
				</div>
			</$Span>
		</$Container>
	);
};
