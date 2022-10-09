import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = ({ name, label, error, ...props }) => {
	return (
		<section>
			<label className='text-sm text-grey-500 font-bold'>{ label }</label>
			<input
				{...props}
				className={`w-full border border-grey-500 rounded-2xl p-3 mt-2 ${error && 'border-red-600'}`}
				name={name}
			/>
			<span className='p-2 text-sm text-red-600 font-bold'>{error}</span>
		</section>
	);
};

InputGroup.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	error: PropTypes.object
};

InputGroup.defaultProps = {
	type: 'text'
};

export default InputGroup;