import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { useForkRef } from '../../utils'
import AppBar from '../../components/AppBar/AppBar'
import classes from './AppAppBar.module.css'

const AppAppBar = React.forwardRef(function AppAppBar(props, ref) {
  const { className, children, ...other } = props
  const rootRef = React.useRef()
  const handleRef = useForkRef(rootRef, ref)
  const prevScrollPosRef = React.useRef(0)

  const [isHidden, setHidden] = React.useState(false)

  const handleScroll = React.useCallback(() => {
    const currentScrollPos = window.pageYOffset

    if (prevScrollPosRef.current > currentScrollPos) {
      setHidden(false)
    } else {
      setHidden(true)
    }
    prevScrollPosRef.current = currentScrollPos
  }, [])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true})
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <AppBar
      className={classnames(
        classes.root,
        {
          [classes.hidden]: isHidden,
        },
        className,
      )}
      ref={handleRef}
      {...other}
    >
      {children}
    </AppBar>
  )
})

AppAppBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

AppAppBar.uiName = 'AppAppBar'

export default AppAppBar
