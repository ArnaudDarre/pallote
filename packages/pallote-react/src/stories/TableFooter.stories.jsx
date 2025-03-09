import React from 'react'

import { TableFooter } from '../components/TableFooter'

export default {
  title: 'Components/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Pagination and filter component for a table.'
      }
    }
  },
  argTypes: {
    className: { control: false }
  }
}

const Template = (args) => <TableFooter {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'TableFooter'
}
