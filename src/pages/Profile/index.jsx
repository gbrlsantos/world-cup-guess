import React from 'react';

const Profile = () => {
	return (
		<div>
			<header className='bg-red-500 py-6 px-5'>
				<div className='flex justify-between mb-16 max-w-2xl m-auto'>
					<img src='images/white-redish-logo.svg' className='w-20' />
				</div>
				<div className='space-y-8 max-w-2xl m-auto'>
					<img src='images/white-arrow-left.svg' />
					<h1 className='text-xl text-white font-bold pb-3'>Bruno Bertolini</h1>
				</div>
			</header>
			<main className='py-10 px-5 space-y-5 max-w-2xl m-auto'>
				<h2 className='text-xl text-red-500 font-bold pb-3'>Seus palpites</h2>
				<section className='flex w-full gap-10 justify-center'>
					<img src='images/alt-red-arrow-left.svg' />
					<p className='font-bold'>20 de novembro</p>
					<img src='images/alt-red-arrow-left.svg' className='-rotate-180' />
				</section>
				<section className='border border-grey-300 rounded-2xl p-5 text-center w-full block'>
					<p className='font-bold text-sm text-grey-700 mb-5'>13:00</p>
					<div className='flex justify-center items-center gap-2'>
						<p className='text-grey-700'>CAT</p>
						<img src='images/flags/cat.png' className='w-10 h-10'/>
						<div className='flex justify-center items-center bg-[#fde4eb] w-10 h-10 rounded-full'>
							<p className='font-bold text-red-300'>1</p>
						</div>
						<p className='font-bold text-red-300'>x</p>
						<div className='flex justify-center items-center bg-[#fde4eb] w-10 h-10 rounded-full'>
							<p className='font-bold text-red-300'>1</p>
						</div>
						<img src='images/flags/equ.png' className='w-10 h-10'/>
						<p className='text-grey-700'>EQU</p>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Profile;