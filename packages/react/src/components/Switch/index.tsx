import { SwitchThumb } from '@radix-ui/react-switch';
import { CSwitchThumb, SwitchContainer, SwitchLabel } from './styles';
import { ComponentProps } from 'react';

// eslint-disable-next-line prettier/prettier
export interface SwitchProps extends ComponentProps<typeof SwitchContainer> { }

export function Switch({ ...props }: SwitchProps) {
  return (
    <SwitchLabel as="label">
      <SwitchContainer {...props}>
        <SwitchThumb />
        <CSwitchThumb />
      </SwitchContainer>
    </SwitchLabel>
  );
}
