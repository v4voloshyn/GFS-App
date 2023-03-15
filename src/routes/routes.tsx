import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout.component';

import { Course } from '../pages/Course.page';
import { Home } from '../pages/Home.page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'course/:id',
        element: <Course />,
      },
    ],
  },
]);
