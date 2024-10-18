import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from '@pages/index';

const router = createBrowserRouter([{
  path: '/',
  children: [
  {
    "path": "/",
    "element": <Index Location='Index' Description={undefined} />,
    "index": true
  }
]
}]);

export default () => <RouterProvider router={router} />