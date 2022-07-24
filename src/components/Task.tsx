import styles from './modules/Task.module.css'

import iconNewTask from '../assets/icon-new-task.svg'

export function Task(){
  return (
    <div>
      <form className={styles.taskForm}>
        <textarea 
         value=""
         name="task"
         placeholder="Adicione uma nova tarefa"
         required
        />
        <footer>
          <button type="submit" className={styles.addTaskButton}>
            Criar
            <img src={iconNewTask} alt=""/>
          </button>
        </footer>
      </form>

    </div>
  )
}