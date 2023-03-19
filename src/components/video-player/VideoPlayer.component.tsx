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
  volume?: number;
  muted?: boolean;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({
  srcUrl,
  videoTitle,
  previewPoster,
  config,
  isLight = true,
  controls = true,
  playing = true,
  volume = 0.5,
  muted = false,
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
      volume={volume}
      muted={muted}
      config={{
        file: {
          forceHLS: true,
        },
        ...config,
      }}
    />
  );
};
