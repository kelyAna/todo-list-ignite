import styles from './App.module.css'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { Todo } from './components/Todo'
import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Task />
      </div>  
    </div>
  )
}

export default App
