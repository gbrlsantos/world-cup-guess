import React from 'react';
import GameCard from '../../components/GameCard';
import Header from '../../components/Header';

const MakeYourGuess = () => {
	return (
		<div>
			<Header
				isDashboard={ true }
			/>
			<GameCard
				timeA={{ slug: 'cat' }}
				timeB={{ slug: 'equ' }}
				match={{ time: '13:00', date: '20 de novembro' }}
				isEditable={ true }
			/>
			<GameCard
				timeA={{ slug: 'cat' }}
				timeB={{ slug: 'equ' }}
				match={{ time: '13:00', date: '20 de novembro' }}
				isEditable={ true }
			/>
		</div>
	);
};

export default MakeYourGuess;