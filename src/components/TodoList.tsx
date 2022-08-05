import styles from './modules/TodoList.module.css'

import iconTrash from '../assets/trash.svg'

export function TodoList(){
    return (
        <div className={styles.todoListContent}>
            <div className={styles.todoListTask}>
                <label className={styles.todoItemList}>
                  <input type="checkbox" />
                  <span className={styles.checkmark}></span>
                </label>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <button type="submit">
                  <img src={iconTrash} alt=""/>
                </button>
            </div>
        </div>
    )
}