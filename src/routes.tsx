import { createBrowserRouter } from 'react-router';

import { NotFound } from './pages/404';
import { Dashboard } from './pages/app/dashboard/dashboard';
import { Orders } from './pages/app/orders/orders';
import { SignIn } from './pages/auth/sign-in';
import { SignUp } from './pages/auth/sign-up';
import { Error } from './pages/error';
import { AppLayout } from './pages/layouts/app';
import { AuthLayout } from './pages/layouts/auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
