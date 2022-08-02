import styles from './modules/Empty.module.css'

import clipBoard from '../assets/clipboard.svg'

export function Empty(){
  return (
   <div>
     <div className={styles.emptyDivider} />
      <div className={styles.emptyContent}>
        <img src={clipBoard} alt="Logotipo clipboard" />
      </div>
      <div className={styles.emptyInfo} >
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
   </div>
  )
}