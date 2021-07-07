import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Hamburger from '../../../components/Hamburger'
import classes from './HeroNav.module.css'

const HeroNav = React.forwardRef(function HeroNav(props, ref) {

  const { className, navigations, open, toggleMenu, logo, ...other } = props


  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <img className={classes.logo} src={logo[0].logo.url} alt="company logo" />
      <div className={classes.navBar}>
        {navigations.map((nav, id) => (
          <Link href={nav.slug} key={id} passHref>
            <a
              className={classes.navLink}
              href={nav.slug}
              key={id}
            >
              {nav.title}
            </a>
          </Link>
        ))}
      </div>
      <Hamburger className={classes.hamburger} open={open} toggleMenu={toggleMenu} />
    </div>
  )
})

HeroNav.propTypes = {
  className: PropTypes.string,
  navigations: PropTypes.array,
}

export default HeroNav
