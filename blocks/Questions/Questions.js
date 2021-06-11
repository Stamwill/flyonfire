import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Section from '../../components/Section'
import classes from './Questions.module.css'

const Questions = React.forwardRef(function Questions(props, ref) {
  const { className, ...other } = props

  return (
    <Section className={classnames(classes.root, className)} ref={ref} {...other}>
      <h1 className={classes.title}>Frequently Asked Questions</h1>
      <div className={classes.flexContainer}>
        <div className={classes.questionBlock}>
          <h2 className={classes.question}>DO YOU OFFER PRINT SERVICE?</h2>
          <p className={classes.answer}>
            Unfortunately no, I can only provide you with the design files.
            For print based designs,
            once you have received these from me you will then need to source somewhere to have the design physically made.
          </p>
        </div>

        <div className={classes.questionBlock}>
          <h2 className={classes.question}>WHAT DO YOU NEED FROM ME?</h2>
          <p className={classes.answer}>
            In order for me to create what it is you need I will need to ask you a few questions about not only the design
            you need but also the business that it is for. This is to ensure that what I create fit&apos;s with your branding.
            For your design, any details, images or inspirations are welcome to help get your idea across.
            The only thing I ask is that any copywrited images are not to be included in your final design.
          </p>
        </div>

        <div className={classes.questionBlock}>
          <h2 className={classes.question}>HOW MUCH DO YOU CHARGE?</h2>
          <p className={classes.answer}>
            This is of course all depends on what it is, and the complexity of your design. But I am always transparent with my client&apos;s
            on how long a project is likely to take, and keep them in the loop throughout the project all the way until it&apos;s completed.
          </p>
        </div>

        <div className={classes.questionBlock}>
          <h2 className={classes.question}>HOW LONG DOES A DESIGN TAKE TO CREATE?</h2>
          <p className={classes.answer}>
            Please contact me if you wish to discuss your project with me, and to obtain a quote for the work you are after.
            Every project is unique in size, complexity and the length of time required to do the work, which makes it extremely difficult to price generically.
          </p>
        </div>
      </div>
    </Section>
  )
})

Questions.propTypes = {
  className: PropTypes.string,
}

Questions.uiName = 'Questions'

export default Questions
