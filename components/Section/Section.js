import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import classes from './Section.module.css'

const Section = React.forwardRef(function Section(props, ref) {
  const { children, className, disableSpacing, ...other } = props
  return (
    <section className={classnames(
      classes.root,
      {
        [classes.disableSpacing]: disableSpacing,
      },
        className,
      )}
      ref={ref}
      {...other}
    >
      {children}
    </section>
  )
})

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disableSpacing: PropTypes.bool
}

export default Section
