import './Video.scss';

import React, {useEffect, useState} from 'react';
import {Picture, PictureProps} from '../picture/Picture';

interface MyWindow extends Window {
  onYouTubeIframeAPIReady: () => void
}
declare var window: MyWindow;

export type VideoYTProps = {
  id: string;
  image?: PictureProps;
}

const idName = 'video-id-';
let idNum = 0;
const items: {[key: string]: () => void} = {};

let last: () => void;
let initialized = false;
let loaded = false;



const _getId = () => idName + idNum++;

const initPlayer = () => {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = '//www.youtube.com/player_api';

  document.head.appendChild(script);

  window.onYouTubeIframeAPIReady = () => {
    for (let key in items) {
      if (items.hasOwnProperty(key)) items[key]();
    }

    initialized = true;
  }
  loaded = true;
}

export const Video = ({id, image}: VideoYTProps) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState<YT.Player>();

  useEffect(() => {
    if (!container || player) return;

    const playerId = _getId();

    if (!loaded) initPlayer();

    const build = () => {
      const player = new YT.Player(container, {
        videoId: id,
        playerVars: {
          rel: 0,
          // showInfo: 0,
          modestbranding: 1
        },
        events: {
          onStateChange: (e) => (e.data === 0) && setIsPlaying(false),
          // onReady: (e) => {
          //   player.loadVideoById(id);
          //   player.playVideo();
          // }
        }
      });

      setPlayer(player);
    }

    if (initialized) {
      build();
    } else {
      items[playerId] = build;
    }

    return () => {
      delete items[playerId];
    }
  }, [container]);

  // update videoId
  // useEffect(() => {
  //   if (player) player.loadVideoById(id);
  // }, [player, id])

  const play = () => {
    if (last) last();

    if (!player) return;
    setIsPlaying(true);

    player.playVideo();

    last = () => {
      player.pauseVideo();
      setIsPlaying(false);
    }
  }

  let className = 'yt-video margin';
  if (isPlaying) className += ' active';

  let pictureProps: PictureProps
  if (image) {
    pictureProps = image;
  } else  {
    pictureProps = {
      default: [`https://i1.ytimg.com/vi/${id}/default.jpg`]
    }
  }

  return <div className={className}>
    <div className="yt-overlay">
      <button className="yt-button" onClick={play}/>
      <div className="yt-poster">
        <Picture {...pictureProps}/>
      </div>
    </div>
    <div className="yt-container">
      <div ref={setContainer}/>
    </div>
  </div>
}
