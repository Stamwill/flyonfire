import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './styles.css'

const AnimationGallery = React.forwardRef(function AnimationGallery(props, ref) {
  const { className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <h1>test</h1>
    </div>
  )
})

AnimationGallery.propTypes = {
  className: PropTypes.string,
}

AnimationGallery.uiName = 'AnimationGallery'

export default AnimationGallery
