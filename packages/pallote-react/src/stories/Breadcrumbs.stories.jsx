import React from 'react'

import { Breadcrumbs } from '../components/Breadcrumbs'
import { Grid } from '../utilities/Grid'

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'List of links to allow users to navigate the page tree.'
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
  <Grid gap={4} direction="column">
    <Grid item><Breadcrumbs items={breadcrumbItems} /></Grid>
    <Grid item><Breadcrumbs items={breadcrumbItems} separator="arrow" /></Grid>
  </Grid>
)
