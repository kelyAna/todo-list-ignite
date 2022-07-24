import styles from './modules/Header.module.css'

import todoLogo from '../assets/todo-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do TODO list"/>
    </header>
  )
}

