import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import MakeYourGuess from './MakeYourGuess';
import Profile from './Profile';
import SignUp from './SignUp';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/signup',
		element: <SignUp />
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