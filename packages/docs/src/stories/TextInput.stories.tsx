import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, Text, TextInput, TextInputProps } from '@progamo-ui/react';

export default {
  title: 'Form/Text Input',
  component: TextInput,
  argTypes: {
    children: { control: null },
  },
  args: {},
  decorators: [
    (Story) => {
      return (
        <Card as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">Email address</Text>
          {Story()}
        </Card>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'type_your_name',
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: 'type_your_name',
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'type_your_name',
  },
};
