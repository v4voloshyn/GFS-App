import { createBrowserRouter } from 'react-router-dom';
import { fetchCourseById, fetchCourses } from '../helpers';

import { Layout } from '../components/layout/Layout.component';
import { Course } from '../pages/course/Course.page';
import { Home } from '../pages/home/Home.page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: fetchCourses,
      },
      {
        path: 'course/:courseId',
        element: <Course />,
        loader: ({ params }) => fetchCourseById(params.courseId!.toString()),
      },
    ],
  },
]);
