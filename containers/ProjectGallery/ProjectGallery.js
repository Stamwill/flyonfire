import * as React from 'react'
import classnames from 'clsx'
import Link from 'next/link'
import classes from './ProjectGallery.module.css'

const ProjectGallery = React.forwardRef(function ProjectGallery(props, ref) {
  const { className, projectsAnimations, projectsLogos, galleries, ...other} = props


  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      {projectsLogos.map((link, id) => (
        <div className={classes.container} key={id}>
          <Link href={link.slug}>
            <img className={classes.img} src={link.logo.url} alt="logo container img"/>
          </Link>

          <Link href={link.slug} >
            <a className={classes.link}> {link.text} </a>
          </Link>
        </div>
      ))}

      {projectsAnimations.map((link, id) => (
        <div className={classes.container} key={id}>
          <Link href={link.slug}>
            <img className={classes.img} src={link.logo.url} alt="animations container img"/>
          </Link>

          <Link href={link.slug} >
            <a className={classes.link} > {link.text} </a>
          </Link>
        </div>
      ))}
    </div>
  )
})
export default ProjectGallery
