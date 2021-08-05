import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './Footer.module.css'

const Footer = React.forwardRef(function Footer(props, ref) {
  const { className, footers, ...other } = props

  return (
    <footer className={classnames(classes.root, className)} ref={ref} {...other}>
      {footers.map((item, id) => (
        <div key={id} >
            <a className={classes.title} href={item.slug}>{item.title}</a>
        </div>
      ))}
    </footer>
  )
})

Footer.propTypes = {
  className: PropTypes.string,
  footers: PropTypes.array
}

Footer.uiName = 'Footer'

export default Footer
