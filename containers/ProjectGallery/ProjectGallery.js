import * as React from 'react'
import classnames from 'clsx'
import classes from './ProjectGallery.module.css'
import Gallery from '../../blocks/Gallery'


const ProjectGallery = React.forwardRef(function ProjectGallery(props, ref) {
  const { className, projectsAnimations, projectsLogos, galleries, ...other} = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      {projectsLogos.map((link, id) => (
        <div className={classes.container} key={id}>
          <img className={classes.img} src={link.logo.url} alt="test"/>
          <a className={classes.link}> {link.text} </a>
        </div>
      ))}

      {projectsAnimations.map((link, id) => (
        <div className={classes.container} key={id}>
          <img className={classes.img} src={link.logo.url} alt="test"/>
          <a className={classes.link} > {link.text} </a>
        </div>
      ))}
    </div>
  )
})
export default ProjectGallery
