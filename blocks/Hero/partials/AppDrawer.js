import * as React from 'react'
import classnames from 'clsx'
import classes from './AppDrawer.module.css'
import PropTypes from 'prop-types'

const AppDrawer = React.forwardRef(function AppDrawer(props, ref) {
  const { className, open, navigations, ...other } = props

  const toggleScroll = (state) => {
    if (typeof window !== undefined) {
      const body = document.body
      console.log('hello')
      body.style.overflow = state
    }
  }

  if(open) {
    toggleScroll('hidden')
  } else {
    toggleScroll('visible')
  }


  return (
    <div className={classnames(classes.root, { [classes.menuIsOpen]: open }, className)} ref={ref} {...other}>
      <div className={classes.navBar}>
        {navigations.map((nav, id) => (
          <a
            className={classes.navLink}
            key={id}
            href={nav.slug}
          >
            {nav.title}
          </a>
        ))}
      </div>
    </div>
  )
})

AppDrawer.propTypes = {
  className: PropTypes.string,
}

export default AppDrawer
