import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseItemPreview, IMeta } from '../../types/types';
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
  const navigate = useNavigate();

  const renderSkills = (skillList: IMeta['skills'] = []) => {
    if (!skillList.length) {
      return <div>Secret inside the book</div>;
    }
    return skillList.map((skill) => {
      return (
        <div className="skill-item" key={skill}>
          <span className="skill-status" />
          <span className="skill-text">{skill}</span>
        </div>
      );
    });
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
          <div className="card-skill__wrapper skill">
            Skills:
            <div className="skill-list">{renderSkills(skills)}</div>
          </div>
        </div>
        <div className="card-footer">
          <Button
            buttonText="Enroll course"
            onClick={() => navigate(`course/${id}`)}
          />
          <div className="card-footer_bottom">
            <div className="card-lessons">Lessons: {lessonsCount}</div>
            <div className="card-rating">
              {rating ? `Rating: ${rating}/5` : 'Not rated'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
