import { FC } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { FaBook, FaLock, FaPlayCircle } from 'react-icons/fa';
import { ICourseItem } from '../../types/types';
import { Spinner } from '../../components/spinner/Spinner.component';
import { LessonsList } from '../../components/lessons-list/LessonsList.component';

import './Course.scss';

export const Course: FC = () => {
  const courseData = useLoaderData() as ICourseItem;

  console.log(courseData);

  const { state } = useNavigation();

  if (state === 'loading') {
    return <Spinner size="fullscreen" />;
  }

  return (
    <div className="course course-wrapper">
      <div className="course__main">Video frame + title + description</div>
      <div className="course__lessons">
        <div className="course__lessons-info">
          <div className="course__lessons-progress">Lessons 3 / {1}</div>
          <div className="course__lessons-timetotal">12min total</div>
        </div>
        <LessonsList />
      </div>
    </div>
  );
};
