import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.scss';

export function CreateButton() {
  return (
    <button className={styles.createButton}>
      <span>
        Criar
      </span>
      <PlusCircle size={16} />
    </button>
  );
}
