import {createBrowserRouter} from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import ProtectedRoute from './utils/ProtectedRoutes';
import Book from './components/appointment/book/Book';
import About from './components/about/About';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/about',
        element: <About />,
      },
      
      {
        element: <ProtectedRoute role="user" />,
        children: [
          {
            path: '/book',
            element: <Book />,
          },
        ],
      },
      {
        path: '*',
        element: <p>404 Error - Nothing here...</p>,
      },
    ],
  },
]);

export default router;
