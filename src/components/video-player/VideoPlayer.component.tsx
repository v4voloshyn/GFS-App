import { FC } from 'react';
import ReactPlayer, { Config } from 'react-player';

interface VideoPlayerProps {
  srcUrl: string;
  config?: Config;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ srcUrl, config }) => {
  return (
    <ReactPlayer
      className="video-player player"
      url={srcUrl}
      width="100%"
      height="100%"
      controls
      config={{
        file: {
          forceHLS: true,
        },
        ...config,
      }}
    />
  );
};
