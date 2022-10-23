import { useState } from 'react';

import { Clipboard } from '../Clipboard';
import { Counter } from '../Counter';
import { Task } from '../Task';

import styles from './styles.module.scss';

export function Tasks() {
  const [tasks, setTasks] = useState(['sasw']);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>
          Tarefas criadas
          <Counter total={0} />
        </span>
        <span>
          Concluídas
          <Counter total={0} />
        </span>
      </div>

      {
        tasks.length === 0 ?
        (
          <div className={styles.emptyContent}>
            <Clipboard />
    
            <p>
              Você ainda não tem tarefas cadastradas
              <span>
                Crie tarefas e organize seus itens a fazer
              </span>
            </p>
          </div>
        ) : (
          <div className={styles.listContent}>
            <Task />
            <Task />
          </div>
        )
      }
    </div>
  );
}