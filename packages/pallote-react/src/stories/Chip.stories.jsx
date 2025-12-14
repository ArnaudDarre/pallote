import React from 'react'

import { Chip } from '../components/Chip'
import { Grid } from '../utilities/Grid'

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Compact element representing an input, attribute, or action.'
      }
    }
  },
  argTypes: {
    avatar: { control: false },
    onClose: { control: false },
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <Chip {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: 'Chip'
}

export const Color = () => (
  <Grid gap={4}>
    <Chip>Paper</Chip>
    <Chip color="primary">Primary</Chip>
    <Chip color="secondary">Secondary</Chip>
    <Chip color="success">Success</Chip>
    <Chip color="info">Info</Chip>
    <Chip color="warning">Warning</Chip>
    <Chip color="error">Error</Chip>
  </Grid>
)

Color.parameters = {
  docs: {
    description: {
      story: 'Different color variants for the chip.'
    }
  }
}

export const Dense = () => (
  <Grid gap={4}>
    <Chip>Default</Chip>
    <Chip dense>Dense</Chip>
  </Grid>
)

Dense.parameters = {
  docs: {
    description: {
      story: 'Compact version of the chip.'
    }
  }
}

export const WithAvatar = () => (
  <Grid gap={4}>
    <Chip avatar="https://i.pravatar.cc/40?img=1">John Doe</Chip>
    <Chip avatar="https://i.pravatar.cc/40?img=2" dense>Jane Doe</Chip>
  </Grid>
)

WithAvatar.parameters = {
  docs: {
    description: {
      story: 'Chip with an avatar image.'
    }
  }
}

export const Dismissible = () => (
  <Grid gap={4}>
    <Chip onClose={() => alert('Dismissed!')}>Dismissible</Chip>
    <Chip onClose={() => alert('Dismissed!')} dense>Dismissible dense</Chip>
  </Grid>
)

Dismissible.parameters = {
  docs: {
    description: {
      story: 'Chip with a close button. The `onClose` prop adds a dismiss button.'
    }
  }
}

export const Disabled = () => (
  <Grid gap={4}>
    <Chip disabled>Disabled</Chip>
    <Chip disabled onClose={() => {}}>Disabled dismissible</Chip>
  </Grid>
)

Disabled.parameters = {
  docs: {
    description: {
      story: 'Disabled state prevents interaction.'
    }
  }
}
