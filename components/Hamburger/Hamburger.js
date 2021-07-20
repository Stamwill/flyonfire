import * as React from 'react'
import classnames from 'clsx'
import classes from './Hamburger.module.css'
import AppAppBar from '../../containers/AppAppBar'
import PropTypes from 'prop-types'

const Hamburger = React.forwardRef(function Hamburger(props, ref) {
  const { className, toggleMenu, open, ...other } = props
  
  return (
    <div className={classnames(classes.root, {[ classes.menuIsOpen ]: open }, className)} ref={ref} {...other}>
      <AppAppBar>
        <div className={classes.container} onClick={toggleMenu}>
          <div className={classes.barOne}></div>
          <div className={classes.barTwo}></div>
          <div className={classes.barThree}></div>
        </div>
      </AppAppBar>
    </div>
  )
})

Hamburger.propTypes = {
  className: PropTypes.string
}

export default Hamburger