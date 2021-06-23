import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import Image from 'next-images'
import Hamburger from '../../../components/Hamburger'
import classes from './HeroNav.module.css'

const HeroNav = React.forwardRef(function HeroNav(props, ref) {

  const { className, heroNavs, open, toggleMenu, ...other } = props
  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      {heroNavs.map((nav, id) => (
      <div className={classes.navBar} key={id}>
        <img className={classes.logo} src={heroNavs[0].logo.url} alt="company logo" />

        <a className={classes.navLink} href="/">{nav.about}</a>
        <a className={classes.navLink} href="/">{nav.projects}</a>
        <a className={classes.navLink} href="/">{nav.services}</a>
        <a className={classes.navLink} href="/">{nav.contact}</a>
      </div>
      ))}
      <Hamburger className={classes.hamburger} open={open} toggleMenu={toggleMenu}/>
    </div>
  )
})

HeroNav.propTypes = {
  className: PropTypes.string,
  heroNavs: PropTypes.array,
}

export default HeroNav
