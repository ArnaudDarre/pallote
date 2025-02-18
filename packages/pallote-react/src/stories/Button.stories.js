import { Button } from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconLeft: { control: false },
    iconRight: { control: false },
    className: { control: false },
    children: { control: false }
  }
};

export const Playground = {};

export const Secondary = {
  args: {
    color: 'secondary',
  },
};

export const Large = {
  args: {
    size: 'lg',
  },
};
