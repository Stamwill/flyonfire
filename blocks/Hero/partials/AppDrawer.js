import * as React from 'react'
import classnames from 'clsx'
import classes from './AppDrawer.module.css'
import PropTypes from 'prop-types'

const AppDrawer = React.forwardRef(function AppDrawer(props,ref) {
  const { className, open, navigations, ...other } = props
  
  const toggleScroll = (state) => {
    const body = document.body
  
    body.style.overflow = state
  }
  
  if (open) {
    toggleScroll('hidden')
  } else {
    toggleScroll()
  }

  return (
    <div className={classnames(classes.root, {[ classes.menuIsOpen ]: open}, className)} ref={ref} {...other}>
      <div className={classes.navBar}>
        {navigations.map((nav, id) => (
          <a key={id} className={classes.navLink} href={nav.slug}>{nav.title}</a>
        ))}
      </div>
    </div>
  )
})

AppDrawer.propTypes = {
  className: PropTypes.string,
}

export default AppDrawer