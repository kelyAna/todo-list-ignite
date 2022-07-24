import styles from './App.module.css'
import { Header } from './components/Header'
import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      </div>  
    </div>
  )
}

export default App
