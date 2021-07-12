import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './videoGallery.module.css'

const VideoGallery = React.forwardRef(function VideoGallery(props, ref) {
  const { className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <h1>test</h1>
    </div>
  )
})

VideoGallery.propTypes = {
  className: PropTypes.string,
}

VideoGallery.uiName = 'VideoGallery'

export default VideoGallery
