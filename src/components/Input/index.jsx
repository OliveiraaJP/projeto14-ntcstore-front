/* eslint-disable react/prop-types */
import { useState } from 'react';
import { $Input } from './style';

export const Input = ({ type, name, id, placeholder, onChange, value, disable, message, minLength, pattern, min, step }) => {

	const [focused, setFocused] = useState(false);

	return (
		<$Input>
			<input
				type={type}
				name={name}
				id={id}
				required
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				disabled={disable}
				pattern={pattern}
				minLength={minLength}
				min={min}
				step={step}
				onBlur={() => setFocused(true)}
				focused={focused.toString()}
			/>
			<span>{message}</span>
		</$Input>
	);
};