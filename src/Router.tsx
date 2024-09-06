import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ApplicationShell from './components/ApplicationShell/ApplicationShell';
import HomePage from './pages/Home.page';
import LoginPage from './pages/Login.page';
import NotFoundPage from './pages/NotFound.page';
import RegisterPage from './pages/Register.page';

const router = createBrowserRouter([
  {
    element: <ApplicationShell />,

    children: [
      {
        path: '*',
        element: <NotFoundPage />,
      },
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
