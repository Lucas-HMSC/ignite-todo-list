import { CreateButton } from '../CreateButton';
import { Input } from '../Input';

import styles from './styles.module.scss';

export function CreateTaskBar() {
  return (
    <div className={styles.createTaskBar}>
      <Input />

      <CreateButton />
    </div>
  );
}
