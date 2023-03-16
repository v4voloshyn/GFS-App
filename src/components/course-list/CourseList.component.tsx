/* eslint-disable react/jsx-props-no-spreading */
import { FC, useEffect } from 'react';
import { fetchCourses } from '../../helpers';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ICourseItem } from '../../types/types';
import { CourseItem } from '../course-item/CourseItem.component';

import './CourseList.scss';

export const CourseList: FC = () => {
  const [courses, setCourses] = useLocalStorage<ICourseItem[]>('courses', []);

  useEffect(() => {
    if (courses.length) return;

    fetchCourses()
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
  }, [courses, setCourses]);

  return (
    <div className="course-list">
      <h1 className="course-list__title" style={{ textAlign: 'center' }}>
        Course List
      </h1>
      <div className="courses">
        {courses.map((course) => (
          <CourseItem key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};
