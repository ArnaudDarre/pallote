import React from 'react'

import { Grid } from '../../utilities/Grid'
import { Color } from '../../utilities/Color'
import { Text } from '../../utilities/Text'

export default {
  title: 'Utilities/Color',
  component: Color,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Use this utility props and classes to apply a custom background or stroke colour to an element.'
      }
    }
  },
  argTypes: {
    customFill: { control: false },
    customStroke: { control: false },
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <Color {...args} className={'ph-1 pv-½ br-sm w-10'} />

export const Playground = Template.bind({})

Playground.args = {
  fill: 'default',
  stroke: 'border',
  children: (
    <Text variant="caption">Color</Text>
  )
}

export const Fill = () => (
  <Grid gap={4}>
    <Grid item gap={2}>
      <Grid item><Color fill="main" stroke="border" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">main</Text></Color></Grid>
      <Grid item><Color fill="contrast" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">contrast</Text></Color></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Color fill="grey90" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 90</Text></Color></Grid>
      <Grid item><Color fill="grey80" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 80</Text></Color></Grid>
      <Grid item><Color fill="grey70" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 70</Text></Color></Grid>
      <Grid item><Color fill="grey60" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 60</Text></Color></Grid>
      <Grid item><Color fill="grey50" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 50</Text></Color></Grid>
      <Grid item><Color fill="grey40" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 40</Text></Color></Grid>
      <Grid item><Color fill="grey30" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 30</Text></Color></Grid>
      <Grid item><Color fill="grey20" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 20</Text></Color></Grid>
      <Grid item><Color fill="grey10" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 10</Text></Color></Grid>
      <Grid item><Color fill="grey5" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 5</Text></Color></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Color fill="default" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">default</Text></Color></Grid>
      <Grid item><Color fill="paper" stroke="border" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">paper</Text></Color></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Color fill="primary" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">primary</Text></Color></Grid>
      <Grid item><Color fill="secondary" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">secondary</Text></Color></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Color fill="success" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">success</Text></Color></Grid>
      <Grid item><Color fill="info" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">info</Text></Color></Grid>
      <Grid item><Color fill="warning" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">warning</Text></Color></Grid>
      <Grid item><Color fill="error" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">error</Text></Color></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Color fill="border" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">border</Text></Color></Grid>
    </Grid>
  </Grid>
)

export const Stroke = () => (
  <Grid gap={4}>
    <Grid item gap={2}>
      <Grid item><Color stroke="main" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">main</Text></Color></Grid>
      <Grid item><Color stroke="contrast" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">contrast</Text></Color></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Color stroke="grey90" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 90</Text></Color></Grid>
      <Grid item><Color stroke="grey80" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 80</Text></Color></Grid>
      <Grid item><Color stroke="grey70" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 70</Text></Color></Grid>
      <Grid item><Color stroke="grey60" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 60</Text></Color></Grid>
      <Grid item><Color stroke="grey50" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 50</Text></Color></Grid>
      <Grid item><Color stroke="grey40" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 40</Text></Color></Grid>
      <Grid item><Color stroke="grey30" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 30</Text></Color></Grid>
      <Grid item><Color stroke="grey20" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 20</Text></Color></Grid>
      <Grid item><Color stroke="grey10" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 10</Text></Color></Grid>
      <Grid item><Color stroke="grey5" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 5</Text></Color></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Color stroke="default" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">default</Text></Color></Grid>
      <Grid item><Color stroke="paper" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">paper</Text></Color></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Color stroke="primary" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">primary</Text></Color></Grid>
      <Grid item><Color stroke="secondary" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">secondary</Text></Color></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Color stroke="success" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">success</Text></Color></Grid>
      <Grid item><Color stroke="info" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">info</Text></Color></Grid>
      <Grid item><Color stroke="warning" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">warning</Text></Color></Grid>
      <Grid item><Color stroke="error" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">error</Text></Color></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Color stroke="border" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">border</Text></Color></Grid>
    </Grid>
  </Grid>
)

export const Custom = () => (
  <Grid gap={4}>
    <Grid item><Color customFill="#C6882C" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">custom fill</Text></Color></Grid>
    <Grid item><Color customStroke="#007BFF" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">custom stroke</Text></Color></Grid>
    <Grid item><Color customFill="#C6882C" customStroke="#007BFF" className={'ph-1 pv-½ br-sm w-10'}><Text variant="caption">custom fill & stroke</Text></Color></Grid>
  </Grid>
)

Custom.parameters = {
  docs: {
    description: {
      story: 'Boolean prop to enter a custom value in the fill or stroke props (or both).'
    }
  }
}
