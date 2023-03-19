import { FC } from 'react';
import ReactPlayer, { Config } from 'react-player';
import './VideoPlayer.scss';

interface VideoPlayerProps {
  srcUrl: string;
  videoTitle: string;
  previewPoster: string;
  config?: Config;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({
  srcUrl,
  videoTitle,
  previewPoster,
  config,
}) => {
  return (
    <ReactPlayer
      className="video-player player"
      url={srcUrl}
      width="100%"
      height="100%"
      controls
      playing
      onReady={() => {}}
      light={<img src={previewPoster} alt={videoTitle} />}
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
