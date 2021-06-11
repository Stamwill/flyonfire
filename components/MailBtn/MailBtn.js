import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './MailBtn.module.css'

const MailBtn = React.forwardRef(function MailBtn(props, ref) {
  const { children, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <a className={classes.btn} href="mailto:williamstam@gmail.com">Get In Touch!</a>
    </div>
  )
})

MailBtn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

MailBtn.uiName = 'MailBtn'

export default MailBtn
