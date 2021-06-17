import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Image from 'next/image'
// import MailBtn from 'components/MailBtn'
import Section from '../../components/Section'
import classes from './About.module.css'

const About = React.forwardRef(function About(props, ref) {
  const { className, about, ...other } = props
  return (
    <Section className={classnames(classes.root, className)} ref={ref} {...other}>
      <div className={classes.gridContainer}>
        <div className={classes.selfImage}>
          <Image
            src="/vercel.svg"
            alt="picture of a dragon"
            width={400}
            height={400}
            />
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
}

export default About
