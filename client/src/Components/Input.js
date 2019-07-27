import React from 'react';

function Input({
	error,
	name,
	label,
	errorMessage = 'Please fill this field',
	...restProps
}) {
	return (
		<div className='input-wrap'>
			<label htmlFor={name}>
				{label}
				<input name={name} {...restProps} />
			</label>
			<p>{error === name ? errorMessage : null}</p>
		</div>
	);
}

export default Input;
