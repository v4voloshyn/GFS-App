import { FC } from 'react';
import ReactPlayer, { Config } from 'react-player';
import './VideoPlayer.scss';

interface VideoPlayerProps {
  srcUrl: string;
  videoTitle: string;
  previewPoster: string;
  config?: Config;
  isLight?: boolean;
  controls?: boolean;
  playing?: boolean;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({
  srcUrl,
  videoTitle,
  previewPoster,
  config,
  isLight = true,
  controls = true,
  playing = true,
}) => {
  return (
    <ReactPlayer
      className="video-player player"
      url={srcUrl}
      width="100%"
      height="100%"
      controls={controls}
      playing={playing}
      light={isLight && <img src={previewPoster} alt={videoTitle} />}
      pip
      config={{
        file: {
          forceHLS: true,
        },
        ...config,
      }}
    />
  );
};
