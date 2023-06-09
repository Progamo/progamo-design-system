import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from '@progamo-ui/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
  },
  args: {
    src: 'https://github.com/ManoelDev.png',
    alt: 'Manoel Neto',
    size: 'medium',
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    size: 'small',
  },
};
