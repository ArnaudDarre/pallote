import { createContext, HTMLAttributes, ReactNode, useState, Children, isValidElement } from 'react'
import classnames from 'classnames'
import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check"

import { Text } from '../utilities/Text'

interface StepperContextValue {
  activeStep: number
  totalSteps: number
  goToNext: () => void
  goToPrevious: () => void
  skipCurrent: () => void
  completedSteps: number[]
}

export const StepperContext = createContext<StepperContextValue | null>(null)

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  showLabels?: boolean
  className?: string
  children: ReactNode
}

export const Stepper = ({
  showLabels,
  className,
  children,
  ...props
}: StepperProps) => {
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const totalSteps = Children.count(children)

  const goToNext = () => {
    if (activeStep < totalSteps - 1) {
      setCompletedSteps(prev => [...prev, activeStep])
      setActiveStep(prev => prev + 1)
    }
  }

  const goToPrevious = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1)
    }
  }

  const skipCurrent = () => {
    if (activeStep < totalSteps - 1) {
      // Skip doesn't mark as completed
      setActiveStep(prev => prev + 1)
    }
  }

  // Extract labels from children
  const stepLabels: string[] = []
  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      const props = child.props as { label?: string }
      stepLabels.push(props.label || '')
    }
  })

  return (
    <StepperContext.Provider value={{ activeStep, totalSteps, goToNext, goToPrevious, skipCurrent, completedSteps }}>
      <div
        className={classnames('stepper', className)}
        {...props}
      >
        <nav
          className={classnames('stepper_nav')}
          aria-label="Progress"
        >
          <ol className={classnames('stepper_list')} role="list">
            {stepLabels.map((label, index) => {
              const isActive = index === activeStep
              const isCompleted = completedSteps.includes(index)

              return (
                <li
                  key={index}
                  className={classnames('stepper_step', {
                    'stepper_step-active': isActive,
                    'stepper_step-completed': isCompleted
                  })}
                  aria-current={isActive ? 'step' : undefined}
                >
                  <span
                    className={classnames('stepper_icon', {
                      'stepper_icon-active': isActive,
                      'stepper_icon-completed': isCompleted
                    })}
                    aria-hidden="true"
                  >
                    {isCompleted ? <CheckIcon size={16} /> : index + 1}
                  </span>
                  {showLabels ? (
                    <Text variant="caption" weight="bold" className={classnames('stepper_label')}>
                      {label}
                    </Text>
                  ) : (
                    <span className="sr-only">{label}</span>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
        <div className={classnames('stepper_content')}>
          {Children.map(children, (child, index) => {
            if (index === activeStep && isValidElement(child)) {
              return child
            }
            return null
          })}
        </div>
      </div>
    </StepperContext.Provider>
  )
}
