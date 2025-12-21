import React from 'react'

import { Stepper } from '../components/Stepper'
import { Step } from '../components/Step'
import { Text } from '../utilities/Text'
import { Input } from '../components/Input'

export default {
  title: 'Components/Step',
  component: Step,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Individual step within a Stepper. Must be used as a child of `Stepper`.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  },
}

const Template = (args) => (
  <Stepper>
    <Step {...args} />
  </Stepper>
)

export const Playground = Template.bind({})
Playground.args = {
  label: 'Step Label',
  children: <Text>This is the step content</Text>
}

export const Label = () => (
  <Stepper showLabels>
    <Step label="Custom Step Label">
      <Text>The label appears in both the step indicator and the card header.</Text>
    </Step>
    <Step label="Another Step">
      <Text>Next step content</Text>
    </Step>
  </Stepper>
)

Label.parameters = {
  docs: {
    description: {
      story: 'The `label` prop sets the step title shown in the indicator and card header. You can show the labels under the step icon by adding the `showLabels` prop to the `Stepper` component.'
    }
  }
}

export const Skippable = () => (
  <Stepper showLabels>
    <Step label="Required Step">
      <Text>This step cannot be skipped.</Text>
    </Step>
    <Step label="Optional Step" skippable>
      <Text>This step has a Skip button.</Text>
    </Step>
    <Step label="Final Step">
      <Text>Final step content</Text>
    </Step>
  </Stepper>
)

Skippable.parameters = {
  docs: {
    description: {
      story: 'Use the `skippable` prop to add a Skip button.'
    }
  }
}
