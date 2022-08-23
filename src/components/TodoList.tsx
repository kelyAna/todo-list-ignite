import styles from './modules/TodoList.module.css'

import iconTrash from '../assets/trash.svg'

export type TodoListProps = {
  tasksList: string[]
  onDeleteTask: (task: string) => void
  onMarkTaskAsCompleted: () => void
  className: string
}

export function TodoList({ tasksList, onDeleteTask, onMarkTaskAsCompleted, className }: TodoListProps){
    return (
        <div >
            {tasksList.map((task) => {
                return (
                  <div className={styles.todoListContent}>
                      <div className={styles.todoListTask}>
                      <label className={styles.todoItemList}>
                        <input type="checkbox" />
                        <span className={styles.checkmark} onClick={onMarkTaskAsCompleted}></span>
                      </label>
                      <p className={className}>{task}</p>
                      <button type="submit" onClick={() => onDeleteTask(task)}>
                        <img src={iconTrash} alt=""/>
                      </button>
                     </div>
                 </div>
              )
            })}
        </div>
    )
}