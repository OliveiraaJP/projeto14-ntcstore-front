/* eslint-disable react/prop-types */
import { $Jersey } from './style';
import { Link } from 'react-router-dom';

export const Jersey = ({ name, img, price, id }) => {

	return (
		<$Jersey>
			<Link to={`/jersey/${id}`} >
				<img src={img} alt="jersey" />
				<span>Camisa {name}</span>
				<span>R${Number(price).toFixed(2).replace('.', ',')}</span>
			</Link>
		</$Jersey>
	);
};