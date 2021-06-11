import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import classes from './HeroNav.module.css'

const HeroNav = React.forwardRef(function HeroNav(props, ref) {

  const { className, ...other } = props
  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <div className={classes.navBar}>
        <a className={classes.navLink} href="/">About</a>
        <a className={classes.navLink} href="/">Projects</a>
        <a className={classes.navLink} href="/">Services</a>
        <a className={classes.navLink} href="/">Contact</a>
      </div>
    </div>
  )
})

HeroNav.propTypes = {
  className: PropTypes.string
}

export default HeroNav
