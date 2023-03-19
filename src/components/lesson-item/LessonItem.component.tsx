import { FC } from 'react';
import clsx from 'clsx';
import { FaLock, FaPlayCircle } from 'react-icons/fa';
import { VideoLesson } from '../../types/types';

import './LessonItem.scss';

interface LessonItemProps {
  title: VideoLesson['title'];
  status: VideoLesson['status'];
  link: VideoLesson['link'];
  order: number;
  duration: VideoLesson['duration'];
  handleChangeVideoUrl: (lessonUrl: string) => void;
  activeLessonLink: string;
}

export const LessonItem: FC<LessonItemProps> = ({
  status,
  title,
  link,
  order,
  duration,
  handleChangeVideoUrl,
  activeLessonLink,
}) => {
  const lockedStatus = status === 'locked';
  const isLessonActive = activeLessonLink === link;

  const selectLessonToView = () => {
    if (!lockedStatus) {
      handleChangeVideoUrl(link);
    }
  };
  const itemStyles = clsx(`lesson__item`, {
    lesson__item_active: isLessonActive,
    lesson__item_locked: lockedStatus,
  });

  return (
    <div className={itemStyles}>
      <input type="checkbox" name="lesson-viewed" className="lesson-viewed" />
      <button
        type="button"
        className="lesson__info"
        onClick={selectLessonToView}
      >
        <div className="lesson__title" title="">
          {order + 1}. {title}
        </div>
        <div className="lesson__description">
          {lockedStatus && <FaLock />} <FaPlayCircle />{' '}
          {Math.round(duration / 60)}min
        </div>
      </button>
    </div>
  );
};
