import Index from '@pages/index';
import OurDevelopers from '@pages/ourStaff';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				path: '/',
				element: <Index Location='Index' Description={undefined} />,
				index: true,
			},
			{
				path: '/ourstaff',
				element: <OurDevelopers Location='OurStaff' Description={undefined} />,
				index: false,
			},
		],
	},
]);

export default () => <RouterProvider router={router} />;

