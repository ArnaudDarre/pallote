import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Button } from './Button'
import { Buttons } from './Buttons'
import { Card } from './Card'
import { CardContent } from './CardContent'
import { CardHeader } from './CardHeader'
import { CardActions } from './CardActions'

export const Step = ({ label, skip, active, onNext, onBack, onSkip, isFirstStep, isLastStep, children }) => {
  const handleNext = () => onNext()
  const handleBack = () => onBack()
  const handleSkip = () => onSkip()

  return (
    <Card size='lg' className={classnames('w-mobile-sm')} style={{ display: active ? 'block' : 'none' }}>
      <CardHeader title={label} />
      <CardContent>
        {children}
      </CardContent>
      <CardActions>
        <Button color='grey-60' onClick={handleBack} disabled={isFirstStep}>Back</Button>
        <Buttons>
          {skip && <Button color='grey-60' onClick={handleSkip}>Skip</Button>}
          <Button onClick={handleNext} disabled={isLastStep}>Next</Button>
        </Buttons>
      </CardActions>
    </Card>
  )
}

Step.propTypes = {
  label: PropTypes.string.isRequired,
  skip: PropTypes.bool,
  active: PropTypes.bool,
  onNext: PropTypes.func,
  onBack: PropTypes.func,
  onSkip: PropTypes.func,
  isFirstStep: PropTypes.bool,
  isLastStep: PropTypes.bool,
  children: PropTypes.node.isRequired
}
