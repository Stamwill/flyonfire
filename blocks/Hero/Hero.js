import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Section from '../../components/Section'
import classes from './Hero.module.css'

const Hero = React.forwardRef(function Hero(props, ref) {
  const { className, heroes, ...other } = props

  return (
    <Section className={classnames(classes.root, className)} disableSpacing ref={ref} {...other}>
    <img className={classes.heroImg} src={heroes[0].heroImg.url} />
        {heroes.map((hero, id) => (
        <div className={classes.headers} key={id}>
          <div className={classes.mainHeading}>
            <h1 className={classes.mainTitle}>{hero.mainTitle}</h1>
            <h2 className={classes.subTitle}>{hero.subTitle}</h2>
          </div>

          <div className={classes.subHeading}>
            <h2 className={classes.name}>{hero.nameTitle}</h2>
            <h3 className={classes.ideas}>{hero.ideasTitle}</h3>
          </div>
        </div>
        ))}
    </Section>
  )
})

Hero.propTypes = {
  className: PropTypes.string,
  heroes: PropTypes.array,
}

export default Hero
