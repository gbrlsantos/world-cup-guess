import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import Home from './Home';
import Login from './Login';
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
	}
]);

export const Router = () => (
	<RouterProvider router={router} />
);