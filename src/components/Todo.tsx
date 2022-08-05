import { Counter } from './Counter'
import { Empty } from './Empty'
import styles from './modules/Todo.module.css'
import { TodoList, TodoListProps } from './TodoList'

export function Todo({ tasksList, onDeleteTask }: TodoListProps) {
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
     {
      tasksList.length !== 0 ? <div className={styles.tasksContent}>
      <TodoList tasksList={tasksList} onDeleteTask={onDeleteTask} />
      </div> : <Empty />
     }
    </div>
  )
}