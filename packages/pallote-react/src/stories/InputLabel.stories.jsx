import React from 'react'

import { InputLabel } from '../components/InputLabel'

export default {
  title: 'Components/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Reusable label for all form fields.'
      }
    }
  },
  argTypes: {
    onChange: { control: false },
    icon:{ control: false },
    onFocus:{ control: false },
    onBlur:{ control: false },
    children:{ control: false },
    className: { control: false }
  }
}

const Template = (args) => <InputLabel {...args} />

export const Playground = Template.bind({})

Playground.args = {
  label: 'Input label',
  hint: 'Link',
  error: 'Error message',
}

export const isLegend = () => (
  <InputLabel
    isLegend
    label="Input label"
    hint="Link"
    error="Error message"
  />
)

isLegend.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: 'Add this prop when the component is used in a fieldset, for example on the `Checkboxes` or `RadioButtons` components.'
    }
  }
}
