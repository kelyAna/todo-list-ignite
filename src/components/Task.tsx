import styles from './modules/Task.module.css'

import iconNewTask from '../assets/icon-new-task.svg'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Todo } from './Todo'

export function Task(){
  const [tasks, setTasks] = useState(['Comprar pão'])

  const [newTask, setNewTask] = useState('')

  function handleCreadNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTask])
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeleteOne = tasks.filter(task => {
      return task !== taskToDelete
    })

    setTasks(taskWithoutDeleteOne)
  }

  return (
    <div>
      <form className={styles.taskForm}>
        <textarea 
         value={newTask}
         name="task"
         onChange={handleNewTaskChange}
         onInvalid={handleNewTaskInvalid}
         placeholder="Adicione uma nova tarefa"
         required
        />
        <footer>
          <button type="submit" className={styles.addTaskButton} onClick={handleCreadNewTask}>
            Criar
            <img src={iconNewTask} alt=""/>
          </button>
        </footer>
      </form>

      <Todo tasksList={tasks} onDeleteTask={deleteTask} countTasks={tasks.length} onMarkTaskAsCompleted={() => alert('test')} className={''} />
    </div>
  )
}