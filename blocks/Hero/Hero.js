import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Section from '../../components/Section'
import HeroNav from './partials'
import classes from './Hero.module.css'

const Hero = React.forwardRef(function Hero(props, ref) {
  const { className, ...other } = props

  return (
    <Section className={classnames(classes.root, className)} disableSpacing ref={ref} {...other}>
      <HeroNav />
      <div className={classes.headers}>
        <div className={classes.mainHeading}>
          <h1 className={classes.mainTitle}>FLYONFIRE CREATIVE</h1>
          <h2 className={classes.subTitle}>GRAPHIC DESIGN AND ANIMATION</h2>
        </div>

        <div className={classes.subHeading}>
          <h2 className={classes.name}>Lee Piechowicz</h2>
          <h3 className={classes.ideas}>Bringing your ideas to life</h3>
        </div>
      </div>
    </Section>
  )
})

Hero.propTypes = {
  className: PropTypes.string,
}

export default Hero
