import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import classes from './ProjectGallery.module.css'

const ProjectGallery = React.forwardRef(function ProjectGallery(props, ref) {
  const { className, projectsAnimations, projectsLogos, galleries, ...other} = props


  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      {projectsLogos.map((link, id) => (
        <div className={classes.container} key={id}>
          <Link href={link.slug}>
            <div className={classes.img}>
              <Image 
                src={link.logo.url}
                layout='fill'      
                alt="logo gallery logo"
              />
            </div>
         
          </Link>

          <Link href={link.slug} >
            <a href={link.slug} className={classes.link}> {link.text} </a>
          </Link>
        </div>
      ))}

      {projectsAnimations.map((link, id) => (
        <div className={classes.container} key={id}>
          <Link href={link.slug}>
            <div className={classes.img}>
            <Image 
              src={link.logo.url}
              layout='fill'      
              alt="Animation gallery logo"
            />
            </div>
          </Link>

          <Link href={link.slug} >
            <a href={link.slug} className={classes.link} > {link.text} </a>
          </Link>
        </div>
      ))}
    </div>
  )
})

ProjectGallery.propTypes = {
  className: PropTypes.string,
  projectsAnimations: PropTypes.array, 
  projectsLogos: PropTypes.array, 
  galleries: PropTypes.array
}

export default ProjectGallery
