import React from 'react'

import { Tooltip } from '../components/Tooltip'
import { Grid } from '../utilities/Grid'
import { Text } from '../utilities/Text'
import { Button } from '../components/Button'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A tooltip displays additional information when hovering or focusing on an element.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <Tooltip {...args} />

export const Playground = Template.bind({})
Playground.args = {
  content: 'This is tooltip content',
  children: 'Hover me'
}

export const Default = () => (
  <Grid gap={8}>
    <Text>
      Hover over this <Tooltip content="Additional information here">underlined text</Tooltip> to see the tooltip.
    </Text>
  </Grid>
)

Default.parameters = {
  docs: {
    description: {
      story: 'Wrap any text or element to add a tooltip on hover.'
    }
  }
}

export const InfoIcon = () => (
  <Grid gap={8}>
    <Grid direction="row" gap={2} align="center">
      <Text>Label with info</Text>
      <Tooltip infoIcon content="This explains what the label means" />
    </Grid>
  </Grid>
)

InfoIcon.parameters = {
  docs: {
    description: {
      story: 'Use the info icon variant for contextual help. The icon is keyboard focusable.'
    }
  }
}

export const Dense = () => (
  <Grid gap={8}>
    <Text>
      <Tooltip content="Standard tooltip content">Default</Tooltip>
    </Text>
    <Text>
      <Tooltip content="Compact tooltip content" dense>Dense</Tooltip>
    </Text>
  </Grid>
)

Dense.parameters = {
  docs: {
    description: {
      story: 'Compact tooltip variant for tighter layouts.'
    }
  }
}

export const OnButton = () => (
  <Grid gap={4}>
    <Tooltip content="Click to submit the form">
      <Button>Submit</Button>
    </Tooltip>
  </Grid>
)

OnButton.parameters = {
  docs: {
    description: {
      story: 'Tooltip can wrap any element, including buttons.'
    }
  }
}
