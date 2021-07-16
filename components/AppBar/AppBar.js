import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './AppBar.module.css'

const AppBar = React.forwardRef(function AppBar(props, ref) {
  const { className, children, position = 'fixed', ...other } = props

  return (
    <header className={classnames(classes.root, classes[position], className)} ref={ref} {...other}>
      {children}
    </header>
  )
})

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  position: PropTypes.oneOf(['fixed', 'sticky'])
}

AppBar.uiName = 'AppBar'

export default AppBar
