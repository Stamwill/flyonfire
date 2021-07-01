import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Image from 'next/image'
import Section from '../../components/Section'
import classes from './About.module.css'

const About = React.forwardRef(function About(props, ref) {
  const { className, selfImgs, about, ...other } = props
  return (
    <Section className={classnames(classes.root, className)} ref={ref} {...other}>
      <div className={classes.aboutContainer}>
        <div className={classes.imgContainer}>
          <img className={classes.img} src={selfImgs[0].img.url} alt="lee" />
        </div>

        <div className={classes.textContainer}>
        {about.map((text, id) => (
          <div key={id}>
          <p className={classes.aboutText} key={id}>{text.textField}</p>
          </div>
        ))}
        </div>
      </div>
    </Section>
  )
})

About.propTypes = {
  className: PropTypes.string,
  about: PropTypes.array,
  selfImgs: PropTypes.array,
}

export default About
