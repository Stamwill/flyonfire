import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import Section from '../../components/Section'
import Image from 'next/image'
import logo from '../../public/flowers.jpg'
import classes from './Services.module.css'

const Services = React.forwardRef(function Services(props, ref) {
  const { className, services, ...other } = props

  return (
    <Section className={classnames(classes.root, className)} ref={ref} {...other}>
      {services.map((service, id) => (
        <div className={classes.card} key={id}>
          <div className={classes.imgContainer}>
            {/* <Image
            className={classes.cardImg}
            src={service.img}
            alt="picture of flowers"
            height={250}
            width={250}
          /> */}
          </div>

          <div className={classes.titleContainer}>
            <h2 className={classes.cardTitle}>{service.title}</h2>
          </div>

          <div className={classes.infoContainer}>
            <p className={classes.cardInfo}>{service.info}</p>
          </div>
        </div>
      ))}
    </Section>
  )
})

Services.propTypes = {
  className: PropTypes.string
}

export default Services
