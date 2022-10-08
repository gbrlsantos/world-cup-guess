import React from 'react';
import GameCard from '../../components/GameCard';
import Header from '../../components/Header';

const Profile = () => {
	return (
		<div>
			<Header />
			<h1 className='max-w-2xl m-auto text-red-500 font-bold text-xl mt-16'>Seus palpites</h1>
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

export default Profile;