import React from 'react'
import { CoffeeIcon } from '@phosphor-icons/react'

import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CardHeader } from '../components/CardHeader'

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

export const Icon = () => (
  <Card>
    <CardHeader
      icon={<CoffeeIcon />}
      title="Card header with icon"
    />
  </Card>
)

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
