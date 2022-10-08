import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from '../../components/InputGroup';

const Sign = ({ isSignUp }) => {
	return (
		<div>
			<header className='w-full flex flex-row justify-center border-b-2 py-6 border-solid border-red-300'>
				<img src='images/black-logo.svg' className='w-20 sm:w-36' />
			</header>
			<section className='px-6 py-8 sm:max-w-3xl sm:m-auto'>
				<div className='flex gap-6 mb-6'>
					<img src='images/red-arrow-left.svg' />
					<h1 className='text-xl font-bold'>{ isSignUp ? 'Crie sua conta' : 'Entre na sua conta' }</h1>
				</div>
				<div className='space-y-3'>
					<InputGroup
						label='Seu nome'
						placeholder='Digite seu nome'
					/>
					{ isSignUp && 
					<>
						<InputGroup
							label='Seu nome de usuário'
							placeholder='Digite seu nome de usuário'
						/>
						<InputGroup
							type='email'
							label='Seu email'
							placeholder='Digite seu email'
						/>
					</> }
					<InputGroup
						type='password'
						label='Sua senha'
						placeholder='Digite sua senha'
					/>
				</div>
				<button className='w-full bg-red-500 rounded-2xl text-white font-bold py-3 mt-8'>Criar</button>
			</section>
		</div>
	);
};

Sign.propTypes = {
	isSignUp: PropTypes.bool
};

Sign.defaultProps = {
	isSignUp: false
};


export default Sign;