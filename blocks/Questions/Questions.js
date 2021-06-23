import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Section from '../../components/Section'
import classes from './Questions.module.css'

const Questions = React.forwardRef(function Questions(props, ref) {
  const { className, questions, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <h1 className={classes.title}>Frequently Asked Questions</h1>

      <div className={classes.gridContainer}>
        {questions.map((question, id) => (
          <div className={classes.questionBlock} key={id}>
            <h2 className={classes.question}>{question.question}</h2>
            <p className={classes.answer}>{question.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
})

Questions.propTypes = {
  className: PropTypes.string,
  questions: PropTypes.array,
}

Questions.uiName = 'Questions'

export default Questions
