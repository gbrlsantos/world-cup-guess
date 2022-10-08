import React from 'react';

const SignUp = () => {
	return (
		<div>
			<header className='w-full flex flex-row justify-center border-b-2 py-6 border-solid border-red-300'>
				<img src='images/black-logo.svg' className='w-20 sm:w-36' />
			</header>
			<section className='px-6 py-8 sm:max-w-3xl sm:m-auto'>
				<div className='flex gap-6 mb-6'>
					<img src='images/red-arrow-left.svg' />
					<h1 className='text-xl font-bold'>Entre sua conta</h1>
				</div>
				<div className='space-y-3'>
					<div>
						<label className='text-sm text-grey-500 font-bold'>Seu email</label>
						<input
							type='text'
							placeholder='Digite seu nome'
							className='w-full border border-grey-500 rounded-2xl p-3 mt-2'
						/>
					</div>
					<div>
						<label className='text-sm text-grey-500 font-bold'>Sua senha</label>
						<input
							type='password'
							placeholder='Digite sua senha'
							className='w-full border border-grey-500 rounded-2xl p-3 mt-2'
						/>
					</div>
				</div>
				<button className='w-full bg-red-500 rounded-2xl text-white font-bold py-3 mt-8'>Entrar</button>
			</section>
		</div>
	);
};

export default SignUp;