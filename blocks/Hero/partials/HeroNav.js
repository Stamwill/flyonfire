import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import Image from 'next-images'
import Hamburger from '../../../components/Hamburger'
import classes from './HeroNav.module.css'

const HeroNav = React.forwardRef(function HeroNav(props, ref) {

  const { className, navigations, open, toggleMenu, ...other } = props
  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <div className={classes.navBar}>
      {navigations.map((nav, id) => (

          <a className={classes.navLink} href={nav.slug} key={id}>{nav.title}</a>

        ))}
        </div>
      <Hamburger className={classes.hamburger} open={open} toggleMenu={toggleMenu}/>
    </div>
  )
})
{/* <img className={classes.logo} src={navigations[0].logo.url} alt="company logo" /> */}

HeroNav.propTypes = {
  className: PropTypes.string,
  navigations: PropTypes.array,
}

export default HeroNav
