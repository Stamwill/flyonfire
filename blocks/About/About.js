import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Image from 'next/image'
// import MailBtn from 'components/MailBtn'
import Section from '../../components/Section'
import classes from './About.module.css'

const About = React.forwardRef(function About(props, ref) {
  const { className, selfImgs, about, ...other } = props
  return (
    <Section className={classnames(classes.root, className)} ref={ref} {...other}>
      <div className={classes.gridContainer}>
        <div className={classes.selfImage}>
          <img src={selfImgs[0].img.url} alt="lee" />
        </div>

        <div className={classes.info}>
        {about.map((text, id) => (
          <p key={id}>{text.textField}</p>
        ))}
        </div>
      </div>
        {/* <MailBtn /> */}
    </Section>
  )
})

About.propTypes = {
  className: PropTypes.string,
  about: PropTypes.array,
  selfImgs: PropTypes.array,
}

export default About
