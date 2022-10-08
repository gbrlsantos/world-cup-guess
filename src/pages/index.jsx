import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import Home from './Home';
import Sign from './Sign';
import MakeYourGuess from './MakeYourGuess';
import Profile from './Profile';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Sign />
	},
	{
		path: '/signup',
		element: <Sign isSignUp={ true } />
	},
	{
		path: '/profile',
		element: <Profile />
	},
	{
		path: '/make-your-guess',
		element: <MakeYourGuess />
	}
]);

export const Router = () => (
	<RouterProvider router={router} />
);