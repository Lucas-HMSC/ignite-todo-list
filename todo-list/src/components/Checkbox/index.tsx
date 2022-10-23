import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

import styles from './styles.module.scss';

export function Checkbox() {
  return (
    <CheckboxPrimitive.Root className={styles.checkbox}>
      <CheckboxPrimitive.Indicator asChild>
        <div className={styles.checked}>
          <Check />
        </div>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}