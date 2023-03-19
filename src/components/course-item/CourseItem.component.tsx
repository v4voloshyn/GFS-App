import { FC, useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { CourseItemPreview } from '../../types/types';

import { SkillsList } from '../skills-list/SkillsList.component';
import { Button } from '../UI/button/Button.component';
import { VideoPlayer } from '../video-player/VideoPlayer.component';

import './CourseItem.scss';

export const CourseItem: FC<CourseItemPreview> = ({
  id,
  title,
  previewImageLink,
  lessonsCount,
  rating,
  meta: { skills = [], courseVideoPreview },
}) => {
  const [isCourseItemLoading, setIsCourseItemLoading] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const timeoutRef = useRef(0);

  const navigate = useNavigate();

  const videoPreviewLink = courseVideoPreview?.link;

  useEffect(() => {
    if (isVideoPlaying && videoPreviewLink) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setShowVideoPlayer(true);
        setShowVideoPlayer(true);
      }, 1000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [isVideoPlaying, videoPreviewLink]);

  const stopVideoOnLeave = () => {
    setIsVideoPlaying(false);
    setShowVideoPlayer(false);
  };

  const handleWatchCourseClick = (courseId: string): void => {
    setIsCourseItemLoading(true);
    navigate(`course/${courseId}`);
  };

  return (
    <div className="course-card card">
      <div
        className="card-image"
        onMouseEnter={() => setIsVideoPlaying(true)}
        onMouseLeave={stopVideoOnLeave}
      >
        {showVideoPlayer ? (
          <VideoPlayer
            previewPoster={`${previewImageLink}/cover.webp`}
            isLight={false}
            videoTitle={title}
            srcUrl={videoPreviewLink}
            controls={false}
            muted
            playing
            onReady={() => {}}
          />
        ) : (
          <img src={`${previewImageLink}/cover.webp`} alt={title} />
        )}
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
            onClick={() => handleWatchCourseClick(id)}
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
