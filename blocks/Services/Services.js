import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Section from '../../components/Section'
import classes from './Services.module.css'

const Services = React.forwardRef(function Services(props, ref) {
  const { className, services, ...other } = props

  return (
    <Section className={classnames(classes.root, className)} ref={ref} {...other}>
      {services.map((service, id) => (
        <div className={classes.card} key={id}>
          <div className={classes.imgContainer}>
            <Image 
              src={service.image.url}
              height={100}
              width={100}
              alt="Service logo"
            />
          </div>

          <div className={classes.titleContainer}>
            <h2 className={classes.cardTitle}>{service.serviceTitle}</h2>
          </div>

          <div className={classes.infoContainer}>
            <p className={classes.cardInfo}>{service.serviceInfo}</p>
          </div>
        </div>
      ))}
    </Section>
  )
})

Services.propTypes = {
  className: PropTypes.string,
  services: PropTypes.array,
}

export default Services
