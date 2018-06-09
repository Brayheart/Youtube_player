import React from 'react'

const VideoListEntry = ({video, onVideoSelect}) => {

  const image = video.snippet.thumbnails.default.url
  const heading = video.snippet.description

  return (
  <li onClick={() => onVideoSelect(video)} className="list-group-item">
    <div className="video-list-media">

      <div className="media-left">
        <img media="media-object" src={image}/>
      </div>

      <div className="media-body">
        <div className="media-heading">{heading}</div>
      </div>

    </div>
  </li>
  )
}

export default VideoListEntry