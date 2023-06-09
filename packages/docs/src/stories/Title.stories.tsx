import type { Meta, StoryObj } from '@storybook/react';
import { Title, TitleProps } from '@progamo-ui/react';

export default {
  title: 'Typography/Title',
  component: Title,
  args: {
    children: 'Custom title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pro padrão, o componente Title renderiza um elemento `h2`. Você pode alterar isso usando a prop `as`.',
      },
    },
  },
} as Meta<TitleProps>;

export const Primary: StoryObj<TitleProps> = {};

export const CustomTag: StoryObj<TitleProps> = {
  args: {
    children: 'H1 Title',
    as: 'h1',
  },
};
