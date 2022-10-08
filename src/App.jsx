import React from 'react';

function App() {
	return (
		<div
			className='bg-red-700 h-screen text-white flex flex-col space-y-4 p-5'
		>
			<h1 className='text-2xl text-center font-bold'>
				Dê o seu palpite na Copa do Mundo do Catar 2022! 
			</h1>
			<button
				className='text-red-700 bg-white px-8 py-3 rounded-2xl font-bold'
			>
				Criar minha conta
			</button>
			<button
				className='text-white border border-white px-8 py-3 rounded-2xl font-bold'
			>
				Fazer login
			</button>
		</div>
	);
}

export default App;
