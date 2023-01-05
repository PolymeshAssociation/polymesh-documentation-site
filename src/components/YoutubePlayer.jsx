import React from 'react';

const YoutubePlayer = ({ videoId }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?noref=true&modestbranding=1&rel=0&autoplay=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubePlayer;
