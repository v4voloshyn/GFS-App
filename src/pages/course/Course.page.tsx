/* eslint-disable jsx-a11y/media-has-caption */
import { FC, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

import { ICourseItem } from '../../types/types';

import { Spinner } from '../../components/spinner/Spinner.component';
import { LessonsList } from '../../components/lessons-list/LessonsList.component';

import { getTotalLessonsDurationInMin } from './utils/utils';

import './Course.scss';
import { VideoPlayer } from '../../components/video-player/VideoPlayer.component';

export const Course: FC = () => {
  const { lessons, title } = useLoaderData() as ICourseItem;
  const [hlsUrl, setHlsUrl] = useState(lessons[0].link);
  const [lessonPreviewImgUrl, setLessonPreviewImgUrl] = useState(
    `${lessons[0].previewImageLink}/lesson-${1}.webp`
  );

  const { state } = useNavigation();

  const handleChangeVideoUrl = (url: string): void => {
    setHlsUrl(url);
  };

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
        <div className="course__description">Description here</div>
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
          handleChangeVideoUrl={handleChangeVideoUrl}
          activeLessonLink={hlsUrl}
        />
      </div>
    </div>
  );
};
