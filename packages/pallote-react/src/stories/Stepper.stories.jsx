import React from 'react'

import { Stepper } from '../components/Stepper'
import { Step } from '../components/Step'
import { Text } from '../utilities/Text'
import { Input } from '../components/Input'

export default {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Multi-step wizard for guiding users through a process. Displays progress and allows navigation between steps.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

export const Default = () => (
  <Stepper>
    <Step label="Account">
      <Text>Enter your account details</Text>
      <Input label="Email" type="email" style={{ marginTop: '1rem' }} />
    </Step>
    <Step label="Profile">
      <Text>Set up your profile</Text>
      <Input label="Full name" style={{ marginTop: '1rem' }} />
    </Step>
    <Step label="Confirmation">
      <Text>Review and confirm your information</Text>
    </Step>
  </Stepper>
)

Default.parameters = {
  docs: {
    description: {
      story: 'Basic stepper with three steps.'
    }
  }
}

export const ShowLabels = () => (
  <Stepper showLabels>
    <Step label="Account">
      <Text>Enter your account details</Text>
    </Step>
    <Step label="Profile">
      <Text>Set up your profile</Text>
    </Step>
    <Step label="Confirmation">
      <Text>Review and confirm</Text>
    </Step>
  </Stepper>
)

ShowLabels.parameters = {
  docs: {
    description: {
      story: 'Show step labels below the icons.'
    }
  }
}
