import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import classes from './HeroNav.module.css'

const HeroNav = React.forwardRef(function HeroNav(props, ref) {

  const { className, heroNavs, ...other } = props
  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      {heroNavs.map((nav, id) => (
      <div className={classes.navBar} key={id}>
        <a className={classes.navLink} href="/">{nav.about}</a>
        <a className={classes.navLink} href="/">{nav.projects}</a>
        <a className={classes.navLink} href="/">{nav.services}</a>
        <a className={classes.navLink} href="/">{nav.contact}</a>
      </div>
      ))}
    </div>
  )
})

HeroNav.propTypes = {
  className: PropTypes.string
}

export default HeroNav
