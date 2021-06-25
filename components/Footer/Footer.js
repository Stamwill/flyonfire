import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './Footer.module.css'

const Footer = React.forwardRef(function Footer(props, ref) {
  const { className, footers, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      {footers.map((item, id) => (
        <div key={id}>
          <h5>{item.title}</h5>
        </div>
      ))}
    </div>
  )
})

Footer.propTypes = {
  className: PropTypes.string,
  footers: PropTypes.array
}

Footer.uiName = 'Footer'

export default Footer
