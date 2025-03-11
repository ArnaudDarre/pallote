import React from 'react'

import { Grid } from '../utilities/Grid'
import { Tab } from '../components/Tab'
import { Tabs } from '../components/Tabs'
import { TabsControl } from '../components/TabsControl'
import { TabsPanel } from '../components/TabsPanel'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Allow users to navigate between related blocks of content, showing one section at a time.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <Tabs {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <TabsControl>
        <Tab label="Tab 1" index={0} />
        <Tab label="Tab 2" index={1} />
        <Tab label="Tab 3" index={2} />
      </TabsControl>
      <TabsPanel index={0}>Tab content 1</TabsPanel>
      <TabsPanel index={1}>Tab content 2</TabsPanel>
      <TabsPanel index={2}>Tab content 3</TabsPanel>
    </>
  ),
  activeTab: 'Profile'
}

export const Direction = () => (
  <Grid gap={4} direction="column">
    <Tabs>
      <TabsControl>
        <Tab label="Portrait 1" index={0} />
        <Tab label="Portrait 2" index={1} />
        <Tab label="Portrait 3" index={2} />
      </TabsControl>
      <TabsPanel index={0}>Tab content 1</TabsPanel>
      <TabsPanel index={1}>Tab content 2</TabsPanel>
      <TabsPanel index={2}>Tab content 3</TabsPanel>
    </Tabs>
    <Tabs direction="landscape">
      <TabsControl>
        <Tab label="Landscape 1" index={0} />
        <Tab label="Landscape 2" index={1} />
        <Tab label="Landscape 3" index={2} />
      </TabsControl>
      <TabsPanel index={0}>Tab content 1</TabsPanel>
      <TabsPanel index={1}>Tab content 2</TabsPanel>
      <TabsPanel index={2}>Tab content 3</TabsPanel>
    </Tabs>
  </Grid>
)

export const Dense = () => (
  <Tabs dense>
    <TabsControl>
      <Tab label="Dense 1" index={0} />
      <Tab label="Dense 2" index={1} />
      <Tab label="Dense 3" index={2} />
    </TabsControl>
    <TabsPanel index={0}>Tab content 1</TabsPanel>
    <TabsPanel index={1}>Tab content 2</TabsPanel>
    <TabsPanel index={2}>Tab content 3</TabsPanel>
  </Tabs>
)

export const HasBorder = () => (
  <Tabs hasBorder>
    <TabsControl>
      <Tab label="Has border 1" index={0} />
      <Tab label="Has border 2" index={1} />
      <Tab label="Has border 3" index={2} />
    </TabsControl>
    <TabsPanel index={0}>Tab content 1</TabsPanel>
    <TabsPanel index={1}>Tab content 2</TabsPanel>
    <TabsPanel index={2}>Tab content 3</TabsPanel>
  </Tabs>
)
