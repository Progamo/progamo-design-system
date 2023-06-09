import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: '0 $4',

  transition: 'all 0.2s ease-in-out',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 2 2px $colors$grey100',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary_main',
        border: '2px solid transparent',

        svg: { color: '$white' },

        '&:not(:disabled):hover': { background: '$adv300', boxShadow: '$shadows$6' },
        '&:disabled': { backgroundColor: '$gray200' },
      },

      secondary: {
        color: '$primary_main',
        border: '2px solid $primary_main',

        svg: { color: '$primary_main' },

        '&:not(:disabled):hover': { borderColor: '$adv300', color: '$adv300', svg: { color: '$adv300' } },
        '&:disabled': { color: '$gray200', borderColor: '$gray200' },
      },

      tertiary: {
        color: '$primary_main',
        svg: { color: '$primary_main' },
        border: '2px solid transparent',

        '&:not(:disabled):hover': { color: '$adv300', svg: { color: '$adv300' } },
        '&:disabled': { color: '$gray400' },
      },
    },

    size: {
      small: { height: 36 },
      medium: { height: 42 },
      large: { height: 54 },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'small',
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = 'Button';
