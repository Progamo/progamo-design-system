import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardProps, Text } from '@progamo-ui/react/';

export default {
  title: 'Surfaces/Card',
  component: Card,
  argTypes: {
    children: {
      control: { type: null },
    },
  },
  args: {
    children: <Text>Testando o elemento Card</Text>,
  },
} as Meta<CardProps>;

export const Primary: StoryObj<CardProps> = {};
