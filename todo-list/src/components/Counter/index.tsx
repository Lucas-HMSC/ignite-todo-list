import styles from './styles.module.scss';

interface Props {
  total: number;
  done?: number;
}

export function Counter({ total, done = 0 }: Props) {
  return (
    <span className={styles.badge}>
      { 
        done > 0 ? `${done} de ${total}` : `${total}`
      }
    </span>
  );
}