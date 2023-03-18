import { FC, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CourseItemPreview } from '../../types/types';
import { SkillsList } from '../skills-list/SkillsList.component';
import { Button } from '../UI/button/Button.component';

import './CourseItem.scss';

export const CourseItem: FC<CourseItemPreview> = ({
  id,
  title,
  previewImageLink,
  lessonsCount,
  rating,
  meta: { skills = [] },
}) => {
  const [isCourseItemLoading, setIsCourseItemLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (courseId: string): void => {
    setIsCourseItemLoading(true);
    navigate(`course/${courseId}`);
  };

  return (
    <div className="course-card card">
      <div className="card-image">
        <img src={`${previewImageLink}/cover.webp`} alt={title} />
      </div>
      <div className="card-body">
        <div className="card-description">
          <div className="card-title">
            <h4>{title}</h4>
          </div>
          <SkillsList skillsList={skills} />
        </div>
        <div className="card-footer">
          <Button
            buttonText="Watch lessons"
            isLoading={isCourseItemLoading}
            onClick={() => handleClick(id)}
          />
          <div className="card-footer_bottom">
            <div className="card-lessons">Lessons: {lessonsCount}</div>
            <div className="card-rating">
              {rating ? (
                <>
                  Rating {rating}/5
                  <FaStar className="star" />
                </>
              ) : (
                'Not rated'
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
