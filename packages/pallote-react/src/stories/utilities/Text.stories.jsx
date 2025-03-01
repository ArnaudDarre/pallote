import React from 'react'

import { Grid } from '../../utilities/Grid'
import { Text } from '../../utilities/Text'

export default {
  title: 'Utilities/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ''
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: { type: 'text' } }
  }
}

const Template = (args) => <Text {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Text'
}

export const Variant = () => (
  <Grid gap={4}>
    <Grid item gap={2} alignItems="baseline">
      <Grid item><Text variant="h1">h1</Text></Grid>
      <Grid item><Text variant="h2">h2</Text></Grid>
      <Grid item><Text variant="h3">h3</Text></Grid>
      <Grid item><Text variant="h4">h4</Text></Grid>
      <Grid item><Text variant="h5">h5</Text></Grid>
      <Grid item><Text variant="h6">h6</Text></Grid>
    </Grid>
    <Grid item gap={2} alignItems="baseline">
      <Grid item><Text variant="subtitle">Subtitle</Text></Grid>
      <Grid item><Text variant="body">Body</Text></Grid>
      <Grid item><Text variant="caption">Caption</Text></Grid>
      <Grid item><Text variant="overline">Overline</Text></Grid>
    </Grid>
  </Grid>
)

export const Align = () => (
  <Grid gap={4} direction="column">
    <Grid item><Text align="left" className="w-full">Left</Text></Grid>
    <Grid item><Text align="center" className="w-full">Center</Text></Grid>
    <Grid item><Text align="right" className="w-full">Right</Text></Grid>
    <Grid item><Text align="justify" className="w-full">Justify</Text></Grid>
  </Grid>
)

export const Weight = () => (
  <Grid gap={4}>
    <Grid item><Text weight="regular">Regular</Text></Grid>
    <Grid item><Text weight="bold">Bold</Text></Grid>
  </Grid>
)

export const Transform = () => (
  <Grid gap={4}>
    <Grid item><Text transform="none">None</Text></Grid>
    <Grid item><Text transform="capitalize">Capitalize</Text></Grid>
    <Grid item><Text transform="uppercase">Uppercase</Text></Grid>
    <Grid item><Text transform="lowercase">Lowercase</Text></Grid>
    <Grid item><Text transform="initial">Initial</Text></Grid>
    <Grid item><Text transform="inherit">Inherit</Text></Grid>
  </Grid>
)

export const Italic = () => (
  <Text italic>Italic</Text>
)

export const Underline = () => (
  <Text underline>Underline</Text>
)

export const StrikeThrough = () => (
  <Text strikeThrough>StrikeThrough</Text>
)

export const Code = () => (
  <Text code>Code</Text>
)

export const Color = () => (
  <Grid gap={4}>
    <Grid item gap={2}>
      <Grid item><Text color="default">Default</Text></Grid>
      <Grid item><Text color="alt">Alt</Text></Grid>
      <Grid item><Text color="disabled">Disabled</Text></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item className="fill-contrast"><Text color="contrast">Contrast</Text></Grid>
      <Grid item className="fill-contrast"><Text color="contrastAlt">Contrast alt</Text></Grid>
      <Grid item className="fill-contrast"><Text color="contrastDisabled">Contrast disabled</Text></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Text color="primary">Primary</Text></Grid>
      <Grid item><Text color="secondary">Secondary</Text></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Text color="success">Success</Text></Grid>
      <Grid item><Text color="info">Info</Text></Grid>
      <Grid item><Text color="warning">Warning</Text></Grid>
      <Grid item><Text color="error">Error</Text></Grid>
    </Grid>
  </Grid>
)
