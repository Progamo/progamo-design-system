import type { Meta, StoryObj } from '@storybook/react';
import { IconiFy, IconiFyProps } from '@progamo-ui/react';

export default {
  title: 'Data display/Icon',
  component: IconiFy,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'info'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    size: 'medium',
    color: 'secondary',
  },
} as Meta<IconiFyProps>;

export const Primary: StoryObj<IconiFyProps> = {
  args: {
    icon: 'ph:user',
  },
};
