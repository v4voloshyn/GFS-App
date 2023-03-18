import { FC } from 'react';
import { FaLock, FaPlayCircle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { ICourseItem } from '../../types/types';
import { LessonItem } from '../lesson-item/LessonItem.component';
import './LessonsList.scss';

export const LessonsList: FC = () => {
  const { lessons } = useLoaderData() as ICourseItem;
  console.log(lessons);
  return (
    <div className="lesson__list">
      {lessons.map((lesson, order) => {
        const { id, status, title } = lesson;
        return (
          <LessonItem status={status} title={title} key={id} order={order} />
        );
      })}
    </div>
  );
};
