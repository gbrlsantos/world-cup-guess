import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ isDashboard }) => {
	return (
		<header className='bg-red-500 py-6 px-5'>
			<div className='flex justify-between mb-16 max-w-2xl m-auto'>
				<img src='images/white-redish-logo.svg' className='w-20' />
				{ !isDashboard && <img src='images/profile-white.svg' /> }
			</div>
			<div className='space-y-8 max-w-2xl m-auto'>
				{ isDashboard ? <span className='text-white'>Olá, Bruno!</span> :
					<img src='images/white-arrow-left.svg' /> }
				<h1 className='text-xl text-white font-bold pb-3'>{ isDashboard ? 'Qual é o seu palpite?' : 'Bruno Bertolini' }</h1>
			</div>
		</header>
	);
};

Header.propTypes = {
	isDashboard: PropTypes.bool
};

Header.defaultProps = {
	isDashboard: false
};

export default Header;