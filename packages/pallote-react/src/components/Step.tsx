import { useContext, HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

import { StepperContext } from './Stepper'
import { Button } from './Button'
import { Buttons } from './Buttons'
import { Card } from './Card'
import { CardContent } from './CardContent'
import { CardHeader } from './CardHeader'
import { CardActions } from './CardActions'

export interface StepProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  label: string
  skippable?: boolean
  className?: string
  children: ReactNode
}

export const Step = ({
  label,
  skippable,
  className,
  children,
  ...props
}: StepProps) => {
  const context = useContext(StepperContext)

  if (!context) {
    throw new Error('Step must be used within a Stepper')
  }

  const { activeStep, totalSteps, goToNext, goToPrevious, skipCurrent, completedSteps } = context
  const isFirstStep = activeStep === 0
  const isLastStep = activeStep === totalSteps - 1
  const allPreviousCompleted = Array.from({ length: activeStep }, (_, i) => i).every(i => completedSteps.includes(i))

  return (
    <Card
      size="lg"
      className={classnames('stepper_panel', className)}
      role="tabpanel"
      aria-label={label}
      {...props}
    >
      <CardHeader title={label} />
      <CardContent>
        {children}
      </CardContent>
      <CardActions>
        <Button
          variant="transparent"
          onClick={goToPrevious}
          disabled={isFirstStep}
          aria-label="Go to previous step"
        >
          Back
        </Button>
        <Buttons>
          {skippable && !isLastStep && (
            <Button
              variant="transparent"
              onClick={skipCurrent}
              aria-label="Skip this step"
            >
              Skip
            </Button>
          )}
          <Button
            onClick={goToNext}
            disabled={isLastStep}
            aria-label={isLastStep ? 'Last step reached' : 'Go to next step'}
          >
            {isLastStep ? 'Finish' : 'Next'}
          </Button>
        </Buttons>
      </CardActions>
    </Card>
  )
}
