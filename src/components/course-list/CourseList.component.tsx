import { FC, useState, useEffect } from 'react';
import { fetchCourses } from '../../helpers';
import { CourseItem } from '../course-item/CourseItem.component';

export const CourseList: FC = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="course-list">
      <h1 className="course-list__title" style={{ textAlign: 'center' }}>
        Course List
      </h1>
      <div className="courses">
        <CourseItem />
      </div>
    </div>
  );
};
