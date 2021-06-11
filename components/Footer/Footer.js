import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './Footer.module.css'

const Footer = React.forwardRef(function Footer(props, ref) {
  const { className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <h3>Hello Footer!</h3>
    </div>
  )
})

Footer.propTypes = {

  className: PropTypes.string,
}

Footer.uiName = 'Footer'

export default Footer
