import React from 'react'

import { Breadcrumbs } from '../components/Breadcrumbs'
import { Grid } from '../components/Grid'

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    className: { control: false }
  }
}

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Customise", href: "/?path=/docs/customise--docs" },
  { label: "Breadcrumbs" },
];

const Template = (args) => <Breadcrumbs {...args} />

export const Playground = Template.bind({})

Playground.args = {
  items: breadcrumbItems
}

export const Separator = () => (
  <Grid spacing={4} direction="column">
    <Grid item><Breadcrumbs items={breadcrumbItems} /></Grid>
    <Grid item><Breadcrumbs items={breadcrumbItems} separator="arrow" /></Grid>
  </Grid>
)
