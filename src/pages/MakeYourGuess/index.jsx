import React from 'react';
import GameCard from '../../components/GameCard';

const MakeYourGuess = () => {
	return (
		<div>
			<header className='bg-red-500 py-6 px-5'>
				<div className='flex justify-between mb-16 max-w-2xl m-auto'>
					<img src='images/white-redish-logo.svg' className='w-20' />
					<img src='images/profile-white.svg' />
				</div>
				<div className='space-y-8 max-w-2xl m-auto'>
					<span className='text-white'>Olá, Bruno!</span>
					<h1 className='text-2xl text-white font-bold pb-3'>Qual é o seu palpite?</h1>
				</div>
			</header>
			<GameCard
				timeA={{ slug: 'cat' }}
				timeB={{ slug: 'equ' }}
				match={{ time: '13:00', date: '20 de novembro' }}
			/>
			<GameCard
				timeA={{ slug: 'cat' }}
				timeB={{ slug: 'equ' }}
				match={{ time: '13:00', date: '20 de novembro' }}
			/>
		</div>
	);
};

export default MakeYourGuess;