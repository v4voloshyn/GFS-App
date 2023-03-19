/* eslint-disable jsx-a11y/media-has-caption */
import { FC, useState, useEffect } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

import { ICourseItem } from '../../types/types';
import { getTotalLessonsDurationInMin } from './utils/utils';

import { Spinner } from '../../components/spinner/Spinner.component';
import { LessonsList } from '../../components/lessons-list/LessonsList.component';

import './Course.scss';
import { VideoPlayer } from '../../components/video-player/VideoPlayer.component';

export const Course: FC = () => {
  const { lessons, title } = useLoaderData() as ICourseItem;
  const [hlsUrl, setHlsUrl] = useState('');
  const [lessonPreviewImgUrl, setLessonPreviewImgUrl] = useState('');

  const { state } = useNavigation();

  const handleChangeLessonData = (
    videoSrc: string,
    imagePreviewLink: string
  ): void => {
    setHlsUrl(videoSrc);
    setLessonPreviewImgUrl(imagePreviewLink);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (state === 'loading') {
    return <Spinner size="fullscreen" />;
  }

  return (
    <div className="course course-wrapper">
      <div className="course__main">
        <div className="player-wrapper">
          <VideoPlayer
            srcUrl={hlsUrl}
            videoTitle={title}
            previewPoster={`${lessonPreviewImgUrl}`}
          />
        </div>
        <div className="course__description">Descr</div>
      </div>
      <div className="course__lessons">
        <div className="course__lessons-info">
          <div className="course__lessons-progress">
            Lessons 0 / {lessons.length}
          </div>
          <div className="course__lessons-timetotal">
            {Math.trunc(getTotalLessonsDurationInMin(lessons))}min total
          </div>
        </div>
        <LessonsList
          handleChangeLessonData={handleChangeLessonData}
          activeLessonVideoLink={hlsUrl}
        />
      </div>
    </div>
  );
};
