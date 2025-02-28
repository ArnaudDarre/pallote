import React from 'react'

import { Button } from '../components/Button'
import { Buttons } from '../components/Buttons'
import { Card } from '../components/Card'
import { CardHeader } from '../components/CardHeader'
import { Grid } from '../components/Grid'

export default {
  title: 'Components/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Contains the card title. You can add an optional label or subtitle. The font sizes are automatically set by the Card size prop.'
      }
    }
  },
  argTypes: {
    className: { control: false }
  }
}

const Template = (args) => (
  <Card size="md" transparent>
    <CardHeader {...args} />
  </Card>
)

export const Playground = Template.bind({})

Playground.args = {
  label: 'Card label',
  title: 'Card title',
  subtitle: 'This is a card subtitle'
}

export const Actions = () => (
  <Card>
    <CardHeader
      title="Card header with actions"
      actions={
        <>
          <Button color="error">Cancel</Button>
          <Button color="primary">Save</Button>
        </>
      }
    />
  </Card>
)
