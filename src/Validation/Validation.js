import React from 'react';

const validation = (props) => {
	let validationMessage = 'Text long enough';
	if (props.userInputLenght <= 5) {
		validationMessage = 'Text too short!';
	}
	return (
		<div>
			<p>{validationMessage}</p>
		</div>
	);
};

export default validation;
