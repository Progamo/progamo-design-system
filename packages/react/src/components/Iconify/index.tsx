import { ComponentProps } from 'react';
import { Iconify } from './styles';

export type IconiFyProps = ComponentProps<typeof Iconify>;

export function IconiFy({ ...props }: IconiFyProps) {
  return <Iconify {...props} />;
}

IconiFy.displayName = 'IconiFy';
