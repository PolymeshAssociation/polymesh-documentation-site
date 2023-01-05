import React from 'react';
import './OverviewVideoBox.css';
import YoutubePlayer from '../YoutubePlayer';

export default function OverviewVideoBox(props) {
  return (
    <div className="overview-video-box-wrapper">
      <div className="content-wrapper">
        <h3 className="title">{props.title}</h3>
        {props.children}
      </div>
      <div className="video-wrapper">
        <YoutubePlayer videoId={props.videoId} />
      </div>
    </div>
  );
}
