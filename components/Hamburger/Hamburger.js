import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import AppAppBar from '../../containers/AppAppBar'
import classes from './Hamburger.module.css'

const Hamburger = React.forwardRef(function Hamburger(props, ref) {
  const { className, toggleMenu, open, ...other } = props
  
  return (
    <div className={classnames(classes.root, {[ classes.menuIsOpen ]: open }, className)} ref={ref} {...other}>
      <AppAppBar>
        <div className={classes.container} onClick={toggleMenu}>
          <div className={classes.barOne} />
          <div className={classes.barTwo} />
          <div className={classes.barThree} />
        </div>
      </AppAppBar>
    </div>
  )
})

Hamburger.propTypes = {
  className: PropTypes.string,
  toggleMenu: PropTypes.bool,
  open: PropTypes.bool,
}

export default Hamburger