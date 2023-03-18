import { FC } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { ICourseItem } from '../../types/types';
import { Spinner } from '../../components/spinner/Spinner.component';
import { LessonsList } from '../../components/lessons-list/LessonsList.component';

import './Course.scss';
import { getTotalLessonsDurationInMin } from './utils/utils';

export const Course: FC = () => {
  const { lessons } = useLoaderData() as ICourseItem;

  const { state } = useNavigation();

  if (state === 'loading') {
    return <Spinner size="fullscreen" />;
  }

  return (
    <div className="course course-wrapper">
      <div className="course__main">Video frame + title + description</div>
      <div className="course__lessons">
        <div className="course__lessons-info">
          <div className="course__lessons-progress">
            Lessons 0 / {lessons.length}
          </div>
          <div className="course__lessons-timetotal">
            {Math.trunc(getTotalLessonsDurationInMin(lessons))}min total
          </div>
        </div>
        <LessonsList />
      </div>
    </div>
  );
};
