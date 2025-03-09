import { ArrowRight, Star } from '@phosphor-icons/react'
import { Alert, Breadcrumbs, Button, Buttons, Card, CardHeader, Checkbox, Checkboxes, Grid, Input, Link, ListItem, Radio, RadioButtons, Select, Status, Switch, Tag } from 'pallote-react';

import { breadcrumbItems } from '../../../docs/components/partials/breadcrumbs'

export const Cover = () => {
  return (
    <Grid gap={6} direction='column' items='end' className='coverExamples'>
      <Grid gap={6} items='end'>
        <Grid gap={6} direction='column'>
          <Input id='input' label='Input' className='w-20'/>
          <Grid gap={6}>
            <RadioButtons label='Legend' className='mt-0 w-fit'>
              <Radio name='radio' id='radio_1' value='1' label='Label' />
              <Radio name='radio' id='radio_2' value='2' label='Label' />
            </RadioButtons>
            <Status>Status</Status>
          </Grid>
        </Grid>
        <Grid gap={6} direction='column'>
          <Checkboxes label='Landscape' direction='landscape'>
            <Checkbox id='checkbox_1' value='1' label='Label' />
            <Checkbox id='checkbox_2' value='2' label='Label' />
            <Checkbox id='checkbox_2' value='2' label='Label' />
          </Checkboxes>
          <Grid gap={6}>
            <Link icon={<ArrowRight />}>Link</Link>
            <Radio name='radio' id='radio' value='none' label='Radio button' />
          </Grid>
        </Grid>
      </Grid>
      <Grid gap={6} direction='column'>
        <Grid gap={6}>
          <Status color='success'>Status</Status>
          <ListItem icon={<Star />}>List item</ListItem>
        </Grid>
        <Grid gap={6}>
          <Grid gap={6} direction='column'>
            <Checkbox id='checkbox' value='0' label='Checkbox' />
            <Switch id='switch' startLabel='Switch' />
          </Grid>
          <Select id='select' label='Select' className='w-20'>
            <option value=''></option>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
          </Select>
        </Grid>
      </Grid>
      <Grid gap={6} items='end'>
        <Breadcrumbs items={breadcrumbItems} />
        <Grid gap={6} direction='column'>
          <Grid gap={2} direction='column'>
            <Tag className='w-full'>Tag</Tag>
            <Tag dense color='secondary' className='w-full'>Tag</Tag>
          </Grid>
          <Button>Button</Button>
        </Grid>
        <Input id='hint' label='Input' hint='Input with hint text' className='w-20'/>
      </Grid>
      <Grid gap={6} items='start'>
        <Buttons direction='portrait' fullWidth className='w-20'>
          <Button>Save</Button>
          <Button color='secondary'>Edit</Button>
          <Button color='grey'>Cancel</Button>
        </Buttons>
        <Alert title='Alert' subtitle='Alert subtitle' variant='notice' className='w-20' />
        <Card transparent className='w-20'>
          <CardHeader
            label='Card label'
            title='Card title'
            subtitle='This is a card subtitle'
          />
        </Card>
      </Grid>
    </Grid>
  )
}
