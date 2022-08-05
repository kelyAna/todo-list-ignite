import styles from './modules/TodoList.module.css'

import iconTrash from '../assets/trash.svg'

export type TodoListProps = {
  tasksList: string[]
  onDeleteTask: (task: string) => void
}

export function TodoList({ tasksList, onDeleteTask }: TodoListProps){

    return (
        <div >
            {tasksList.map((task) => {
                return (
                  <div className={styles.todoListContent}>
                      <div className={styles.todoListTask}>
                      <label className={styles.todoItemList}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                      </label>
                      <p>{task}</p>
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