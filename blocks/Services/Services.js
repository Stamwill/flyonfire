import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import Section from '../../components/Section'
import Image from 'next/image'
import logo from '../../public/flowers.jpg'
import classes from './Services.module.css'

const Services = React.forwardRef(function Services(props, ref) {
  const { className, ...other } = props

  return (
    <Section className={classnames(classes.root, className)} ref={ref} {...other}>
      <div className={classes.card}>
        <div className={classes.imgContainer}>
        <Image
        className={classes.cardImg}
        src={logo}
        alt="picture of flowers"
        height={250}
        width={250}
        />
          {/* <img className={classes.cardImg} src={Flower} alt="random" /> */}
        </div>

        <div className={classes.titleContainer}>
          <h2 className={classes.cardTitle}>Custom Logo Design</h2>
        </div>

        <div className={classes.infoContainer}>
          <p className={classes.cardInfo}>
            Give your new business an eye catching logo or refreshen the brand
            of your existing business with a new one. Give your social media a brand spanking new
            profile image and banner to show it off to your followers.
          </p>
        </div>
      </div>

      <div className={classes.card}>
        <div className={classes.imgContainer}>
          {/* <img className={classes.cardImg} src={Flower} alt="random" /> */}
        </div>

        <div className={classes.titleContainer}>
          <h2 className={classes.cardTitle}>Print Based Media</h2>
        </div>

        <div className={classes.infoContainer}>
          <p className={classes.cardInfo}>
          There&apos;s still space in the world for print based media such as business cards,
          flyers and brochures to communicate with your customers directly.
          Or perhaps you need custom packaging for your product. If you can think of it, we can create it together!
          </p>
        </div>
      </div>

      <div className={classes.card}>
        <div className={classes.imgContainer}>
          {/* <img className={classes.cardImg} src={Flower} alt="random" /> */}
        </div>

        <div className={classes.titleContainer}>
          <h2 className={classes.cardTitle}>2D Motion Graphics</h2>
        </div>

        <div className={classes.infoContainer}>
          <p className={classes.cardInfo}>
          Whether you are a YouTuber, Twitch Streamer or simply want a professional logo animation for your business.
          We can work together to create fun and exciting visuals for you to use online and in the videos you make
          </p>
        </div>
      </div>
    </Section>
  )
})

Services.propTypes = {
  className: PropTypes.string
}

export default Services
