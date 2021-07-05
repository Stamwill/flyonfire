import * as React from 'react'
import classnames from 'clsx'
import classes from './ProjectGallery.module.css'
import Gallery from '../../blocks/Gallery'


const ProjectGallery = React.forwardRef(function ProjectGallery(props, ref) {
  const { className, projectsAnimations, projectsLogos, galleries, testFuncTwo, ...other} = props

  const [logosIsOpen, setLogosOpen] = React.useState(false)
  const [animationsIsOpen, setAnimationsOpen] = React.useState(false)

  const testFuncOne = () => {
    setLogosOpen(prevstate => !prevstate)
    setAnimationsOpen(false)
    console.log('logos', logosIsOpen)
    console.log('animations',animationsIsOpen)
  }



  if (logosIsOpen) {
    return (<div>
      <Gallery galleries={galleries}/>
      <p onClick={testFuncTwo}>Go back</p>
    </div>
    )
  } else {
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

      <p onClick={testFuncTwo}>Go back</p>
    </div>
  )
}
})
export default ProjectGallery