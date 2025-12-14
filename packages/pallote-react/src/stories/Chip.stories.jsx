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
    <Grid><Chip>Paper</Chip></Grid>
    <Grid><Chip color="primary">Primary</Chip></Grid>
    <Grid><Chip color="secondary">Secondary</Chip></Grid>
    <Grid><Chip color="success">Success</Chip></Grid>
    <Grid><Chip color="info">Info</Chip></Grid>
    <Grid><Chip color="warning">Warning</Chip></Grid>
    <Grid><Chip color="error">Error</Chip></Grid>
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
    <Grid><Chip>Default</Chip></Grid>
    <Grid><Chip dense>Dense</Chip></Grid>
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
    <Grid><Chip avatar="https://i.pravatar.cc/40?img=1">John Doe</Chip></Grid>
    <Grid><Chip avatar="https://i.pravatar.cc/40?img=2" dense>Jane Doe</Chip></Grid>
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
    <Grid><Chip onClose={() => alert('Dismissed!')}>Dismissible</Chip></Grid>
    <Grid><Chip onClose={() => alert('Dismissed!')} dense>Dismissible dense</Chip></Grid>
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
    <Grid><Chip disabled>Disabled</Chip></Grid>
    <Grid><Chip disabled onClose={() => {}}>Disabled dismissible</Chip></Grid>
  </Grid>
)

Disabled.parameters = {
  docs: {
    description: {
      story: 'Disabled state prevents interaction.'
    }
  }
}
