import { Trash } from 'phosphor-react';

import { Checkbox } from '../Checkbox';

import styles from './styles.module.scss';

export function Task() {
  return (
    <div className={styles.task}>
      <Checkbox />

      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </span>

      <Trash className={styles.icon} />
    </div>
  );
}