import React from 'react';

function Home() {
	return (
		<div className='bg-red-700 sm:h-screen flex flex-col items-center justify-center'>
			<div className='my-5'>
				<img src='images/white-logo.svg' width="100" height="19"/>
			</div>
			<div className='md:max-w-5xl text-white flex flex-col items-center sm:flex-row space-y-4 p-5 gap-5'>
				<div className='md:max-w-lg max-w-{260px} '>
					<img src='images/main.png' />
				</div>
				<div className='flex flex-col gap-4 mb-10'>
					<h1 className='text-2xl text-center font-bold lg:text-3xl sm:text-left mb-5'>
					Dê o seu palpite na Copa do Mundo do Catar 2022! 
					</h1>
					<a href='/signup' className='text-red-700 text-lg text-center bg-white px-8 py-3 rounded-2xl font-bold'>
					Criar minha conta
					</a>
					<a href='/login' className='text-white text-lg text-center border border-white px-8 py-3 rounded-2xl font-bold'>
					Fazer login
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;
