import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import Home from './Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Home />
	}
]);

export const Router = () => (
	<RouterProvider router={router} />
);