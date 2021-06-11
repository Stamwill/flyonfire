import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Image from 'next/image'
// import MailBtn from 'components/MailBtn'
import Section from '../../components/Section'
import classes from './About.module.css'

const About = React.forwardRef(function About(props, ref) {
  const { className, ...other } = props
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
          {/* <img src={logo} alt="dragon" /> */}
        </div>
        <div className={classes.info}>
          <p>Welcome to Flyonfire Creative, my name is Lee Piechowicz and I am a  Graphic Designer based in the Midlands, UK.</p>

          <p>From designing logo&apos;s for small business, to creating cool bottle labels for brewers,
          to completely rebranding YouTube channels for content creators. The one thing I enjoy is being creative and bringing ideas to life!</p>

          <p>I started FlyonFire Creative after creating artwork for a number of my own projects.
          From branding my own Personal Training business to starting my own YouTube channel.
          Although those projects were very different from each other, they all required their own branding and designs that were going to catch attention.</p>

          <p>I then realised that I could use my skills to help others acheive success with their own projects. There are many apps and
          logo generators out there that people can use for free, but the one thing they all lack is originality or those personal touches to your brand.</p>

          <p>Presentation is important and it is what gains interest and excitement from our potential customers. It also allows us to look professional
          and create a good first impression about the quality of our product.</p>

          <p>Whether you are an Author, Craft seller, Beer Brewer, YouTuber or Personal Trainer.
          If you have a project that you need help with, please feel free to get in touch!</p>
        </div>
      </div>
        {/* <MailBtn /> */}

    </Section>
  )
})

About.propTypes = {
  className: PropTypes.string
}

export default About
