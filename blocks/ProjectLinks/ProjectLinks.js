import * as React from 'react'
import classnames from 'clsx'
import classes from './ProjectLinks.module.css'


const ProjectLinks = React.forwardRef(function ProjectLinks(props, ref) {
  const { className, ...other} = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <h1>test</h1>
    </div>
  )
})

export default ProjectLinks