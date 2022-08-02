import { Counter } from './Counter'
import { Empty } from './Empty'
import styles from './modules/Todo.module.css'
import { TodoList } from './TodoList'

export function Todo() {
  return(
    <div className={styles.todoContent}>
      <div className={styles.infoTaks}>
        <div className={styles.createdTasks}>
          <h3>Tarefas criadas</h3>
          <Counter />
        </div>
        <div className={styles.doneTasks}>
          <h3>Concluídas</h3>
          <Counter />
        </div>
      </div>
      <div className={styles.tasksContent}>
        <TodoList />
      </div>
    </div>
  )
}