import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from '@pages/index';
import OurDevelopers from '@pages/ourDevelopers';

const router = createBrowserRouter([{
  path: '/',
  children: [
  {
    "path": "/",
    "element": <Index Location='Index' Description={undefined} />,
    "index": true
  },
  {
    "path": "/ourdevelopers",
    "element": <OurDevelopers Location='OurDevelopers' Description={undefined} />,
    "index": false
  }
]
}]);

export default () => <RouterProvider router={router} />