import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from '@pages/index';
import OurStaff from '@pages/ourStaff';

const router = createBrowserRouter([{
  path: '/',
  children: [
  {
    "path": "/",
    "element": <Index Location='Index' Description={undefined} />,
    "index": true
  },
  {
    "path": "/ourstaff",
    "element": <OurStaff Location='OurStaff' Description={undefined} />,
    "index": false
  }
]
}]);

export default () => <RouterProvider router={router} />