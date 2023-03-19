import { FC } from 'react';
import { FaLock, FaPlayCircle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { ICourseItem } from '../../types/types';
import { LessonItem } from '../lesson-item/LessonItem.component';
import './LessonsList.scss';

interface LessonsListProps {
  handleChangeVideoUrl: (url: string) => void;
  activeLessonLink: string;
}

export const LessonsList: FC<LessonsListProps> = ({
  handleChangeVideoUrl,
  activeLessonLink,
}) => {
  const { lessons } = useLoaderData() as ICourseItem;

  return (
    <div className="lesson__list">
      {lessons.map((lesson, order) => {
        const { id, status, title, duration, link } = lesson;
        return (
          <LessonItem
            status={status}
            title={title}
            key={id}
            order={order}
            duration={duration}
            handleChangeVideoUrl={handleChangeVideoUrl}
            link={link}
            activeLessonLink={activeLessonLink}
          />
        );
      })}
    </div>
  );
};
