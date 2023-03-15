import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCourseById } from '../helpers';

// interface CourseProps {}

export const Course: FC = () => {
  const { id } = useParams();
  const fakeId = 'b36ee0ce-6ddf-4fe3-bcd8-af6affc4e4f2';

  useEffect(() => {
    fetchCourseById(fakeId)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      Course Page {id}
      <Link to="/">Home page</Link>
    </div>
  );
};
