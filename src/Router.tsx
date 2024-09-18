import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ApplicationShell from './components/ApplicationShell/ApplicationShell';
import AboutPage from './pages/About.page';
import CollectionPage from './pages/Collection.page';
import HomePage from './pages/Home.page';
import LoginPage from './pages/Login.page';
import NotFoundPage from './pages/NotFound.page';
import ProfilePage from './pages/Profile.page';
import ProgressPage from './pages/Progress.page';
import RegisterPage from './pages/Register.page';
import SettingsPage from './pages/Settings.page';

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
      {
        path: '/progress',
        element: <ProgressPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/collection',
        element: <CollectionPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
