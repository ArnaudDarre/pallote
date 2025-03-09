import React from 'react'

import { Text } from '../utilities/Text'
import { Card } from '../components/Card'
import { CardContent } from '../components/CardContent'
import { CardHeader } from '../components/CardHeader'
import { Grid } from '../utilities/Grid'

export default {
  title: 'Components/CardContent',
  component: CardContent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Repeatable element to add the card main content.'
      }
    }
  },
  argTypes: {
    fullWidth: { defaultValue: false },
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <CardContent {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Text>Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi (fungi which bear fruiting structures that are large enough to be seen with the naked eye).</Text>
      <Text>They can appear either below ground (hypogeous) or above ground (epigeous) where they may be picked by hand. Edibility may be defined by criteria that include absence of poisonous effects on humans and desirable taste and aroma. Edible mushrooms are consumed for their nutritional and culinary value. Mushrooms, especially dried shiitake, are sources of umami flavor.</Text>
    </>
  )
}

export const FullWidth = () => (
  <Grid gap={4}>
    <Grid item colmd={4} colsm={12}>
      <Card>
        <CardHeader
          title="Full width content (remove left and right padding)"
        />
        <CardContent fullWidth>
          Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi (fungi which bear fruiting structures that are large enough to be seen with the naked eye).
        </CardContent>
      </Card>
    </Grid>
  </Grid>
)
