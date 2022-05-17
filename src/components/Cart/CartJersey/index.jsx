/* eslint-disable react/prop-types */
import { $Container, $Trashcan, $Span } from './styles';
import trashcan from '../../../assets/trashcan.svg';
import { ThreeDots } from 'react-loader-spinner';

export const CartJersey = ({ img, name, price, size, qty, disable, callbackDelete, callbackPlus, callbackMinus }) => {
	return (
		<$Container>
			<img className="shirt" src={img} alt="" />
			<span>
				<h2>{name} {size}</h2>
				<p>R$ {price.toFixed(2)}</p>
			</span>
			<$Span>
				<$Trashcan src={trashcan} alt="trascan" onClick={(name) => callbackDelete(name)} />
				{!disable ?
					<div>
						<p onClick={(id) => qty > 1 && callbackMinus(id)} >-</p>
						<h3>{qty}</h3>
						<p onClick={(id) => callbackPlus(id)} >+</p>
					</div> :
					<ThreeDots color="#000000" height={30} width={30} />
				}

			</$Span>
		</$Container>
	);
};
