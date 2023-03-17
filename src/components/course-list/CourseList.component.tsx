/* eslint-disable react/jsx-props-no-spreading */
import { FC, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

import { ICourseItem } from '../../types/types';

import { CourseItem } from '../course-item/CourseItem.component';
import { Pagination } from '../pagination/Pagination.component';
import './CourseList.scss';

export const CourseList: FC = () => {
  const courses = useLoaderData() as ICourseItem[];

  const [paginatedCourses, setPaginatedCourses] =
    useState<ICourseItem[]>(courses);

  return (
    <div className="course-list">
      <h1 className="course-list__title" style={{ textAlign: 'center' }}>
        Course List
      </h1>

      <div className="courses">
        {paginatedCourses.map((course) => (
          <CourseItem key={course.id} {...course} />
        ))}
      </div>
      <Pagination
        itemsPerPage={4}
        items={courses}
        setPaginatedCourses={setPaginatedCourses}
      />
    </div>
  );
};
