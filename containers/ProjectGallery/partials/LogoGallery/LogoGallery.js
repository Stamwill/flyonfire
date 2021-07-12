import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './styles.css'

const LogoGallery = React.forwardRef(function LogoGallery(props, ref) {
  const { className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <h1>Logo Test</h1>
    </div>
  )
})

LogoGallery.propTypes = {
  className: PropTypes.string,
}

LogoGallery.uiName = 'LogoGallery'

export default LogoGallery
