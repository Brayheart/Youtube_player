import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = ({videos}) => {

const videoItems = videos.map(video => {
  return(
    <VideoListItem video={video} key={video.id.videoId}/>
  )
})

  return (
    <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
  )
}

export default VideoList