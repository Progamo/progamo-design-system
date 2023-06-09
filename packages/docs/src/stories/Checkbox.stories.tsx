import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, Checkbox, CheckboxProps } from '@progamo-ui/react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox Label Text',
  },
  decorators: [
    (Story) => {
      return <Card css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>{Story()}</Card>;
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
