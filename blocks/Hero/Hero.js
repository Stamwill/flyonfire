import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Image from 'next-images'
import Section from '../../components/Section'
import classes from './Hero.module.css'

const Hero = React.forwardRef(function Hero(props, ref) {
  const { className, heroes, ...other } = props


  // console.log(Object.values(heroes[0].heroImg))
  console.log(heroes)
  console.log(heroes[0])
  console.log(heroes[0].heroImg)
  // console.log(heroes[0].heroImg)
  

  return (
    <Section className={classnames(classes.root, className)} disableSpacing ref={ref} {...other}>
    {/* <img className={classes.heroImg} src={heroes[0].heroImg.url} alt="Hero Background Image"/> */}
        {heroes.map((hero, id) => (
          <div className={classes.headers} key={id}>
          {/* <Image 
          src={heroes[0].heroImg.url}
          width={heroes[0].heroImg.width}
          height={heroes[0].heroImg.height}
          alt="Hero Background Image"
          />   */}
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
