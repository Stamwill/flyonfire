import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Section from '../../components/Section'
import classes from './Testimonials.module.css'

const Testimonials = React.forwardRef(function Testimonials(props, ref) {
  const { className, references, ...other } = props

  return (
    <Section className={classnames(classes.root, className)} ref={ref} {...other}>
      {references.map((ref, id) => (
        <div className={classes.refBox} key={id}>
          <img className={classes.refImg} src={ref.image.url} alt="text" />
          
          <div className={classes.refTextBox}>
            <h2 className={classes.person}>{ref.person}</h2>
            <p className={classes.refText}>{ref.reference.text}</p>
          </div>
        </div>
      ))}
    </Section>
  )
})

Testimonials.propTypes = {
  className: PropTypes.string,
  references: PropTypes.array
}

export default Testimonials
