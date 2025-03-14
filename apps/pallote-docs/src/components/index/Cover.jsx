import { ArrowRight, CopySimple, House, Moon, PencilSimple, Star, Sun } from '@phosphor-icons/react'
import {
  Breadcrumbs,
  Button,
  Buttons,
  Card,
  CardActions,
  CardHeader,
  Checkbox,
  Checkboxes,
  Grid,
  Input,
  Link,
  List,
  ListItem,
  Nav,
  NavItem,
  Radio,
  RadioButtons,
  SectionHeader,
  Select,
  Status,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tabs,
  TabsControl,
  Tag,
  Textarea,
} from 'pallote-react';

export const breadcrumbItems = [
  { label: "Home", href: "" },
  { label: "Components", href: "" },
  { label: "Breadcrumbs" },
];

export const Cover = () => {
  return (
    <Grid gap={6} justify='end' className='coverExamples'>
      <Grid gap={6} items='end'>
        <Grid gap={6} direction='column' items='end'>
          <Tabs className='w-20'>
            <TabsControl>
              <Tab label="Tab 1" index={0} />
              <Tab label="Tab 2" index={1} />
              <Tab label="Tab 3" index={2} />
            </TabsControl>
          </Tabs>
          <Card className='w-20'>
            <CardHeader
              label='Card label'
              title='Card title'
              subtitle='This is a card subtitle'
            />
            <CardActions>
              <Button color="grey">Back</Button>
              <Buttons>
                <Button color="error">Cancel</Button>
                <Button color="primary">Save</Button>
              </Buttons>
            </CardActions>
          </Card>
          <Grid gap={6} items='end'>
            <Grid gap={6} direction='column'>
              <Switch id='switch' startLabel='Switch' />
              <ListItem icon={<Star />}>List item</ListItem>
            </Grid>
            <Grid gap={6} direction='column'>
              <Nav aria-label='nav'>
                <NavItem label='Nav item' component='a' active />
                <NavItem label='Nav item' component='a' />
                <NavItem label='Nav item' component='a' />
              </Nav>
              <Grid gap={6}>
                <div>Inpul label</div>
                <Grid gap={6} direction='column'>
                  <Status color='success'>Status</Status>
                  <Tag className='w-full'>Tag</Tag>
                </Grid>
              </Grid>
            </Grid>
            <Checkboxes label='Checkboxes' className='w-fit'>
              <Checkbox id='checkbox_1' value='1' label='Label' />
              <Checkbox id='checkbox_2' value='2' label='Label' />
              <Checkbox id='checkbox_2' value='2' label='Label' />
            </Checkboxes>
          </Grid>
        </Grid>
        <Grid gap={6} direction='column'>
          <Grid gap={6} items='end'>
            <Grid gap={6} direction='column'>
              <Breadcrumbs items={breadcrumbItems} className='mt-0' />
              <Grid gap={6}>
                <Checkbox id='checkbox' value='0' label='Checkbox' />
                <Button>Button</Button>
              </Grid>
              <Buttons direction='portrait' fullWidth className='w-20'>
                <Button>Save</Button>
                <Button color='secondary'>Edit</Button>
                <Button color='grey'>Cancel</Button>
              </Buttons>
              <Input id='input' label='Input' hint='Hint text.' />
            </Grid>
            <Grid gap={6} direction='column'>
              <Textarea id="textarea" label="Textarea" className='w-15' />
              <Grid gap={6}>
                <Grid gap={6} direction='column'>
                  <List>
                    <ListItem icon={<Star />}>List item</ListItem>
                    <ListItem icon={<Moon />}>List item</ListItem>
                    <ListItem icon={<Sun />}>List item</ListItem>
                  </List>
                  <Link icon={<ArrowRight />}>Link</Link>
                  <NavItem label='Nav item' active icon={<House />} component='a' className='w-fit' />
                </Grid>
                <RadioButtons label='Radio buttons' className='mt-0 w-fit'>
                  <Radio name='radio' id='radio_1' value='1' label='Label' />
                  <Radio name='radio' id='radio_2' value='2' label='Label' />
                  <Radio name='radio' id='radio_3' value='3' label='Label' />
                </RadioButtons>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid gap={6}>
        <Grid gap={6} direction='column' items='end'>
          <Select id='select' label='Select'>
            <option value=''></option>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
          </Select>
          <Table>
            <TableBody>
              <TableRow className='w-20'>
                <TableCell>Paul</TableCell>
                <TableCell>Bass guitar</TableCell>
                <TableCell kind="number">18</TableCell>
                <TableCell kind="action">
                  <Buttons>
                    <Button kind="icon" size="sm"><PencilSimple /></Button>
                    <Button kind="icon" color="secondary" size="sm"><CopySimple /></Button>
                  </Buttons>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
        <NavItem
          className="w-8 h-fit js-show"
          label='Nav item'
          dropdown={
            <>
              <NavItem label='Nav item' component='a' />
              <NavItem label='Nav item' component='a' />
              <NavItem label='Nav item' component='a' />
            </>
          }
        />
        <Grid gap={6} direction='column'>
          <Tabs>
            <TabsControl>
              <Tab label="Tab" index={0} />
            </TabsControl>
          </Tabs>
          <Radio name='radio_single' id='radio' value='none' label='Radio button' />
        </Grid>
        <SectionHeader
          style={{width:'27.5rem'}}
          label="Section label"
          title="Section title"
          subtitle="Section subtitle"
          actions={
            <Button>Label</Button>
          }
        />
      </Grid>
    </Grid>
  )
}
