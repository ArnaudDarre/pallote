import React from 'react'

import { Card } from '../components/Card'
import { CardHeader } from '../components/CardHeader'
import { CardMedia } from '../components/CardMedia'
import { Grid } from '../utilities/Grid'

export default {
  title: 'Components/CardMedia',
  component: CardMedia,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Container for an image illustrating the card, for example on a list of blog posts.'
      }
    }
  },
  argTypes: {
    fullWidth: { defaultValue: false },
    className: { control: false }
  }
}

const Template = (args) => <CardMedia {...args} />

export const Playground = Template.bind({})

Playground.args = {
  height: '200px',
  image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg'
}

export const Width = () => (
  <Grid gap={4}>
    <Grid colsm={12}>
      <Card direction="landscape">
        <CardMedia width={200} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" />
        <CardHeader title="Override width" />
      </Card>
    </Grid>
  </Grid>
)

Width.parameters = {
  docs: {
    description: {
      story: 'Override the default width of the image (when used on a Card with `direction="landscape"` prop).'
    }
  }
}

export const Height = () => (
  <Grid gap={4}>
    <Grid colmd={4} colsm={12}>
      <Card>
        <CardMedia height={200} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" />
        <CardHeader title="Override height" />
      </Card>
    </Grid>
  </Grid>
)

Height.parameters = {
  docs: {
    description: {
      story: 'Override the default height of the image.'
    }
  }
}

export const FullWidth = () => (
  <Grid gap={4}>
    <Grid colmd={4} colsm={12}>
      <Card>
        <CardMedia fullWidth height={200} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" />
        <CardHeader title="Full width" />
      </Card>
    </Grid>
  </Grid>
)

FullWidth.parameters = {
  docs: {
    description: {
      story: 'Remove the gutter around the image.'
    }
  }
}
