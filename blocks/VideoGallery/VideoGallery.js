import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './videoGallery.module.css'

const VideoGallery = React.forwardRef(function VideoGallery(props, ref) {
  const { className, videos, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      {videos.map((video, id) => (
        <div className={classes.videoContainer} key={id}>
          <video className={classes.video} controls>
            <source src={video.video.url} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  )
})

VideoGallery.propTypes = {
  className: PropTypes.string,
}

VideoGallery.uiName = 'VideoGallery'

export default VideoGallery
