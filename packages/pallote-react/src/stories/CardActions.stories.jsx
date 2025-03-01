import React from 'react'

import { Button } from '../components/Button'
import { Buttons } from '../components/Buttons'
import { CardActions } from '../components/CardActions'
import { Grid } from '../components/Grid'

export default {
  title: 'Components/CardActions',
  component: CardActions,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Container for the card buttons. If there is one direct child, it will always be on the right side of the card. If there is two direct children, they will be placed on the left and right side.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <CardActions {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Button color="grey">Back</Button>
      <Buttons>
        <Button color="error">Cancel</Button>
        <Button color="primary">Save</Button>
      </Buttons>
    </>
  )
}

export const Direction = () => (
  <Grid spacing={4} direction="column">
    <Grid item>
      <CardActions direction="portrait">
        <Button color="grey">Portrait</Button>
        <Button color="primary">Portrait</Button>
      </CardActions>
    </Grid>
    <Grid item>
      <CardActions>
        <Button color="grey">Landscape</Button>
        <Button color="primary">Landscape</Button>
      </CardActions>
    </Grid>
  </Grid>
)
