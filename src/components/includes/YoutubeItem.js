import React from 'react'

function YoutubeItem(props) {
  return (
      <li>
          <a href={`http://www.youtube.com/watch?v=${props.video.id.videoId}`}>
            <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
            <div>
              <p className='title'>{props.video.snippet.title}</p>
              <p className='channelTitle'>{props.video.snippet.channelTitle}</p>
              <p className='publishTime'>{props.video.snippet.publishTime.slice(0, 10)}</p>
            </div>
          </a>
      </li>
  )
}

export default YoutubeItem