/* eslint-disable jsx-a11y/media-has-caption */
import { FC, useEffect, useRef, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { ICourseItem } from '../../types/types';

import { Spinner } from '../../components/spinner/Spinner.component';
import { LessonsList } from '../../components/lessons-list/LessonsList.component';

import { getTotalLessonsDurationInMin } from './utils/utils';

import './Course.scss';
import { VideoPlayer } from '../../components/video-player/VideoPlayer.component';

export const Course: FC = () => {
  const { lessons } = useLoaderData() as ICourseItem;
  const [hlsUrl, setHlsUrl] = useState(lessons[0].link);

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
          <VideoPlayer srcUrl={hlsUrl} />
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
