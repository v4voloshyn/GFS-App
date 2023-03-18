import { FC } from 'react';
import { FaLock, FaPlayCircle } from 'react-icons/fa';
import { VideoLesson } from '../../types/types';
import './LessonItem.scss';

interface LessonItemProps {
  title: VideoLesson['title'];
  status: VideoLesson['status'];
  order: number;
  duration: VideoLesson['duration'];
}

export const LessonItem: FC<LessonItemProps> = ({
  status,
  title,
  order,
  duration,
}) => {
  const lockedStatus = status === 'locked';

  return (
    <div className={`lesson__item ${lockedStatus && 'lesson__item_locked'}`}>
      <input type="checkbox" name="lesson-viewed" className="lesson-viewed" />
      <div className="lesson__info">
        <div className="lesson__title" title="">
          {order + 1}. {title}
        </div>
        <div className="lesson__description">
          {lockedStatus && <FaLock />} <FaPlayCircle />{' '}
          {Math.round(duration / 60)}min
        </div>
      </div>
    </div>
  );
};
