import React from 'react'

import { Display } from '../../utilities/Display'
import { Grid } from '../../utilities/Grid'
import { Color } from '../../utilities/Color'
import { Snippet } from '../../components/Snippet'
import { Text } from '../../utilities/Text'

export default {
  title: 'Utilities/Display',
  component: Display,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This utility allows to show or hide elements depending on certain conditions.'
      }
    }
  },
  argTypes: {
    children: { control: false }
  }
}

const Template = (args) => <Display show="desktop" {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Display</Text></Color>
  )
}

export const Show = () => (
  <Grid gap={4}>
    <Grid col={4} gap={2} direction="column">
      <Grid><Snippet content="show='mobile-sm'" dense /></Grid>
      <Display show="mobile-sm">
        <Grid>
          <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Show on small mobile</Text></Color>
        </Grid>
      </Display>
    </Grid>
    <Grid col={4} gap={2} direction="column">
      <Grid><Snippet content="show='mobile'" dense /></Grid>
      <Display show="mobile">
        <Grid>
          <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Show on mobile</Text></Color>
        </Grid>
      </Display>
    </Grid>
    <Grid col={4} gap={2} direction="column">
      <Grid><Snippet content="show='tablet'" dense /></Grid>
      <Display show="tablet">
        <Grid>
          <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Show on tablet</Text></Color>
        </Grid>
      </Display>
    </Grid>
    <Grid col={4} gap={2} direction="column">
      <Grid><Snippet content="show='laptop'" dense /></Grid>
      <Display show="laptop">
        <Grid>
          <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Show on laptop</Text></Color>
        </Grid>
      </Display>
    </Grid>
    <Grid col={4} gap={2} direction="column">
      <Grid><Snippet content="show='desktop'" dense /></Grid>
      <Display show="desktop">
        <Grid>
          <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Show on desktop</Text></Color>
        </Grid>
      </Display>
    </Grid>
    <Grid col={4} gap={2} direction="column">
      <Grid><Snippet content="show='touch'" dense /></Grid>
      <Display show="touch">
        <Grid>
          <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Show on touch devices</Text></Color>
        </Grid>
      </Display>
    </Grid>
  </Grid>
)

Show.parameters = {
  docs: {
    description: {
      story: 'Show the component depending on viewport width (resize your browser to see it in action).'
    }
  }
}

export const Hide = () => (
  <Grid gap={4}>
    <Grid col={4} gap={2} direction="column">
      <Grid><Snippet content="hide='mobile-sm'" dense /></Grid>
      <Display hide="mobile-sm">
        <Grid>
          <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Hide on small mobile</Text></Color>
        </Grid>
      </Display>
    </Grid>
    <Grid col={4} gap={2} direction="column">
      <Grid><Snippet content="hide='mobile'" dense /></Grid>
      <Display hide="mobile">
        <Grid>
          <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Hide on mobile</Text></Color>
        </Grid>
      </Display>
    </Grid>
    <Grid col={4} gap={2} direction="column">
      <Grid><Snippet content="hide='tablet'" dense /></Grid>
      <Display hide="tablet">
        <Grid>
          <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Hide on tablet</Text></Color>
        </Grid>
      </Display>
    </Grid>
    <Grid col={4} gap={2} direction="column">
      <Grid><Snippet content="hide='laptop'" dense /></Grid>
      <Display hide="laptop">
        <Grid>
          <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Hide on laptop</Text></Color>
        </Grid>
      </Display>
    </Grid>
    <Grid col={4} gap={2} direction="column">
      <Grid><Snippet content="hide='desktop'" dense /></Grid>
      <Display hide="desktop">
        <Grid>
          <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Hide on desktop</Text></Color>
        </Grid>
      </Display>
    </Grid>
    <Grid col={4} gap={2} direction="column">
      <Grid><Snippet content="hide='touch'" dense /></Grid>
      <Display hide="touch">
        <Grid>
          <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Hide on touch devices</Text></Color>
        </Grid>
      </Display>
    </Grid>
  </Grid>
)

Hide.parameters = {
  docs: {
    description: {
      story: 'Hide the component depending on viewport width (resize your browser to see it in action).'
    }
  }
}
