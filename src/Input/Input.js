import React from 'react';
import './Input.css';

const Input = (props) => {
	return (
		<div>
			<input className="Input" type="txt" onChange={props.change} value={props.name} />
		</div>
	);
};

export default Input;
