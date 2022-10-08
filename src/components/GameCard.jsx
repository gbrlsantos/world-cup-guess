import React from 'react';
import PropTypes from 'prop-types';

const GameCard = ({ timeA, timeB, match, isEditable }) => {
	return(
		<div className='py-5 px-5 space-y-5 max-w-2xl m-auto'>
			<section className='flex w-full gap-10 justify-center'>
				<img src='images/alt-red-arrow-left.svg' />
				<p className='font-bold'>
					{match.date}
				</p>
				<img src='images/alt-red-arrow-left.svg' className='-rotate-180' />
			</section>
			<section className='border border-grey-300 rounded-2xl p-5 text-center w-full block'>
				<p className='font-bold text-sm text-grey-700 mb-5'>13:00</p>
				<div className='flex justify-center items-center gap-2'>
					<p className='text-grey-700'>
						{timeA.slug}
					</p>
					<img src={`images/flags/${timeA.slug}.png`} className='w-10 h-10'/>
					{ isEditable ? <input type='text' className='font-bold text-red-300 placeholder-red-300 w-10 h-10 bg-[#fde4eb] text-center' placeholder='-' /> :
						<div className='flex justify-center items-center bg-[#fde4eb] w-10 h-10 rounded-full'>
							<p className='font-bold text-red-300'>{timeA.guess}</p>
						</div>
					}
					<p className='font-bold text-red-300'>x</p>
					{ isEditable ? <input type='text' className='font-bold text-red-300 placeholder-red-300 w-10 h-10 bg-[#fde4eb] text-center' placeholder='-' /> :
						<div className='flex justify-center items-center bg-[#fde4eb] w-10 h-10 rounded-full'>
							<p className='font-bold text-red-300'>{timeA.guess}</p>
						</div>
					}
					<img src={`images/flags/${timeB.slug}.png`} className='w-10 h-10'/>
					<p className='text-grey-700'>
						{timeB.slug}
					</p>
				</div>
			</section>
		</div>
	);
};

GameCard.propTypes = {
	timeA: PropTypes.object.isRequired,
	timeB: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
	isEditable: PropTypes.bool
};

GameCard.defaultProps = {
	isEditable: false
};

export default GameCard;