import { Logo } from '../Logo';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}
