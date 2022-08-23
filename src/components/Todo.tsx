import { useState } from 'react'
import { Empty } from './Empty'
import styles from './modules/Todo.module.css'
import { TodoList, TodoListProps } from './TodoList'

export type TodoProps = {
  countTasks: number
} & TodoListProps

export function Todo({ tasksList, onDeleteTask, countTasks }: TodoProps) {
  const [checked, setIsChecked] = useState(false)
  const [completedTasks, setCompletedTasks] = useState(0)

  const handleMarkTaskAsCompleted = () => {
    setIsChecked(true)
    setCompletedTasks(completedTasks + 1)

    if(checked){
      setCompletedTasks(completedTasks - 1)
      setIsChecked(false)
    } else {
      setCompletedTasks(completedTasks + 1)
      setIsChecked(true)
    }
  }
  
  return(
    <div className={styles.todoContent}>
      <div className={styles.infoTaks}>
        <div className={styles.createdTasks}>
          <h3>Tarefas criadas</h3>
          <div className={styles.counterContent}>{countTasks}</div>
        </div>
        <div className={styles.doneTasks}>
          <h3>Concluídas</h3>
          <div className={styles.counterContent} aria-checked={checked}>
            <h3>{completedTasks} de {countTasks}</h3>
          </div>
        </div>
      </div>
     {
      tasksList.length !== 0 ? <div className={styles.tasksContent}>
        <TodoList 
        className={checked ? styles.doneTask : ''}
        tasksList={tasksList} 
        onDeleteTask={onDeleteTask} 
        onMarkTaskAsCompleted={handleMarkTaskAsCompleted}
        />
      </div> : <Empty />
     }
    </div>
  )
}