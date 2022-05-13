/* eslint-disable react/prop-types */
import { $Jersey } from './style';

export const Jersey = ({ name, img, price }) => {
	return (
		<$Jersey>
			<img src={img} alt="jersey" />
			<span>Camisa {name}</span>
			<span>R${price.toFixed(2).replace('.', ',')}</span>
		</$Jersey>
	);
};