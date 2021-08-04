import * as React from 'react'
import classnames from 'clsx'
import Link from 'next/link'
import PropTypes from 'prop-types'
import classes from './AppDrawer.module.css'

const AppDrawer = React.forwardRef(function AppDrawer(props, ref) {
  const { className, open, toggleMenu, navigations, ...other } = props

  React.useEffect(() => {
    const toggleScroll = (state) => {
      if (typeof window !== undefined) {
        const body = document.body
  
        body.style.overflow = state
      }
    }
  
    if(open) {
      toggleScroll('hidden')
    } else {
      toggleScroll('visible')
    }
  })

  return (
    <div className={classnames(classes.root, { [classes.menuIsOpen]: open }, className)} ref={ref} {...other}>
      <div className={classes.navBar}>
        {navigations.map((nav, id) => (
        <Link href={nav.slug} key={id}>
          <a
            className={classes.navLink}
            key={id}
            href={nav.slug}
            onClick={toggleMenu}
          >
            {nav.title}
          </a>
        </Link>
        ))}
      </div>
    </div>
  )
})

AppDrawer.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  toggleMenu: PropTypes.func,
  navigations: PropTypes.array,
}

export default AppDrawer