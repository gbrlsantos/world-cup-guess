import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = ({ type, label, placeholder }) => {
	return (
		<section>
			<label className='text-sm text-grey-500 font-bold'>{ label }</label>
			<input
				placeholder={ placeholder }
				className='w-full border border-grey-500 rounded-2xl p-3 mt-2'
				type={ type }
			/>
		</section>
	);
};

InputGroup.propTypes = {
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string
};

InputGroup.defaultProps = {
	type: 'text'
};

export default InputGroup;